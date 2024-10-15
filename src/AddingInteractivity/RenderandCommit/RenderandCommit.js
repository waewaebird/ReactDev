import {useState, useEffect} from "react";

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function Clock() {
    const times = useTime();
    return (
      <>
        <h1>{times.toLocaleTimeString()}</h1>
        <input/>
      </>
    );
}