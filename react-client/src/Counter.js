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
            <button data-testid="firstBtn"  className='' onClick={increment}>Inc</button>
            <p data-testid="count">{count}</p>
            <button data-testid="secondBtn" className=''  onClick={dec}>Dec</button>
        </>
    )
}