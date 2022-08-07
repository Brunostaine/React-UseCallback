import React, { useCallback } from 'react';
import { useState } from 'react';

import List from './List';

const UseCallback = () => {
    const [counter, setCounter] = useState(0);

    const getItensFromDatabase = useCallback(() => {
        return ["a", "b", "c"];
    }, []);
    return (
        <div>
            <h2>UseCallback</h2>
            <List getItems={getItensFromDatabase} />
            <button onClick={() => setCounter(counter + 1)}>Alterar</button>
            <p>{counter}</p>
        </div>
    );
};

export default UseCallback;
