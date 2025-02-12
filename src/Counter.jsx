import { useState, useEffect } from "react";

export const Counter = ({ onChange, initialCount = 1 }) => {
    const [count, setCount] = useState(initialCount); 

    useEffect(() => {
        onChange(count); 
    }, [count, onChange]);

    return (
        <div style={{ display: "flex", gap: '40px', alignItems: 'center' }} className="counter">
            <button
                onClick={() => setCount((prev) => prev > 0 ? prev - 1 : 0)} 
                className="counter-btn"
            >
                -
            </button>
            <p>{count}</p>
            <button
                onClick={() => setCount(prev => prev + 1)} 
                className="counter-btn"
            >
                +
            </button>
        </div>
    );
};
