import { useState, useRef, useEffect } from "react";
import { createConnection } from './chat';

function Playground() {
    const [text, setText] = useState('a');

    useEffect(() => {
        function onTimeout() {
            console.log('⏰ ' + text);
        }

        console.log('🔵 스케줄 로그 "' + text);
        const timeoutId = setTimeout(onTimeout, 3000);

        return () => {
            console.log('🟡 취소 로그 "' + text);
            clearTimeout(timeoutId);
        };
    }, [text]);

    return (
        <>
            <label>
                What to log : {' '}
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </label>
            <h1>{text}</h1>
        </>
    )
}

export default function App1() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>
                컴포넌트 {show ? '마운트 해제' : '마운트'}
            </button>
            {show && <hr />}
            {show && <Playground />}
        </>
    );
}


export function ChatRoom() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, []); //배열인데 의존성 배열
}

function VideoPlayer({src, isPlaying}) {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            console.log('video.play() 호출');
            ref.current.play();
        } else {
            console.log('video.pause() 호출');
            ref.current.pause();
        }
    }, [isPlaying]);

    return <video ref={ref} src={src} loop playsInline />;
}

export function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState('');

    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? '일시정지' : '재생'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}