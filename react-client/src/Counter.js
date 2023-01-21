import {useState} from 'react';
export default function Counter(){
    const [count, setCount] = useState(0);
    const increment = ()=>{
        const newCount = count+1;
        setCount(newCount);
    };
    const dec = ()=>{
        const newCount = count-1;
        setCount(newCount);
    }

    return (
        <>
            <button data-testid="firstBtn" onClick={increment}>Inc</button>
            <p>{count}</p>
            <button data-testid="secondBtn" onClick={dec}>Dec</button>
        </>
    )
}