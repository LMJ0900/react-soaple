import React, { useState } from "react";

function useCounter(initalValue){
    const [count, setCount] = useState(initalValue);

    const increseCount = () => setCount((count) => count + 1);
    const decreseCount = () => setCount((count) => Math.max(count -1,0));

    return [count, increseCount, decreseCount];
}

export default useCounter;