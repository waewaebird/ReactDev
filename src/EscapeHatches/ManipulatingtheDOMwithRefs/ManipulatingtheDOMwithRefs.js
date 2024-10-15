import {useState, useRef} from 'react';

export default function Counter() {
    const [show, setShow] = useState(true);
    const ref = useRef(null);

    return (
        <div>
            <button
                onClick={() =>{
                    setShow(!show);
                }}>
                Toggle with setState
            </button>
            <button
                onClick={() =>{
                    ref.current.remove();
                }}>
                Remove from the DOM
            </button>
            {show && <p ref={ref}>Hello World</p>}
        </div>
    );
}





/*const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
})

export default function MyForm() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    )
}*/


/*export default function CatFriends() {
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);

    function handleScrollToFirstCat() {
        firstCatRef.current.scrollIntoView({
            behavior : 'smooth',
            block : 'nearest',
            inline : 'center'
        });
    }

    function handleScrollToSecondCat() {
        secondCatRef.current.scrollIntoView({
            behavior : 'smooth',
            block : 'nearest',
            inline : 'center'
        });
    }

    function handleScrollToThirdCat() {
        thirdCatRef.current.scrollIntoView({
            behavior : 'smooth',
            block : 'nearest',
            inline : 'center'
        });
    }

    return (
        <>
            <nav>
                <button onClick={handleScrollToFirstCat}>
                    Neo
                </button>
                <button onClick={handleScrollToSecondCat}>
                    Millie
                </button>
                <button onClick={handleScrollToThirdCat}>
                    Bella
                </button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img
                            src="https://placecats.com/neo/300/200"
                            alt="Neo"
                            ref={firstCatRef}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placecats.com/millie/200/200"
                            alt="Millie"
                            ref={secondCatRef}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placecats.com/bella/199/200"
                            alt="Bella"
                            ref={thirdCatRef}
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}*/




/*export default function Form() {
    const inpurRef = useRef(null);

    function handleClick() {
        inpurRef.current.focus();
    }

    return (
        <>
            <input ref={inpurRef} />
            <button onClick={handleClick}>
                Focus the Input
            </button>
        </>
    );
}*/
