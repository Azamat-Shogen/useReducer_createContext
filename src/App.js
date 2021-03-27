import { useReducer, createContext } from "react";
import A from "./A";
import B from "./B";
import C from "./C";
import "./styles.css";

export const CountContext = createContext();

const initialState = 0;
const reducer = (state = initialState, action) => {
   switch(action){
    case 'increment':
      return state + 1;
    case 'decriment':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state
   }
}


export default function App() {
  
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
  <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      Count - {count}
      <A />
      <B />
      <C />
    </div>
    </CountContext.Provider>
  );
}
