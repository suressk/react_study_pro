import React, { useState } from 'react'

export default function Detail() {
    const [n, setN] = useState(0);
    return (
        <div>
            <p>{n}</p>
            <button onClick={() => {
                setN(n + 1);
            }}>n+1</button>
        </div>
    )
}
