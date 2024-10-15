import {useRef, useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    let countRef = useRef(0);

    function handleClickState() {
        setCount(count + 1);
    }

    function handleClickRef() {
        countRef.current = countRef.current + 1;
    }

    return (
        <>
            <button onClick={handleClickState}>
                You clicked State {count} times
            </button>

            <button onClick={handleClickRef}>
                You clicked Ref {countRef.current} times
            </button>
        </>
    );
}


/*export default function Stopwatch() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
            }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if(startTime != null && now != null) {
        secondsPassed = (now - startTime)/1000;
    }


    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </>
    );
}*/

/*
export default function Counter() {
    let ref = useRef(0);
    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }

    return(
        <button onClick={handleClick}>
            Click me!
        </button>
    );
}*/
