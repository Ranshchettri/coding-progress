import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + 1;
    } else if (action.type === "DECREMENT") {
        return state > 0 ? state - 1 : 0; 
    }else if (action.type === "RESET") {
        return 0;
    } 
     else {
        return state;
    }

};

export default function ReducerHook() {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <h1>Reducer Hook</h1>
            <div>
                {state}
            </div>
            <div>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>
                <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
            </div>
        </div>
    );
}