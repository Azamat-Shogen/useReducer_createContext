import React, {useContext} from 'react';
import { CountContext } from './App';


function A(){

  const countContext = useContext(CountContext);

  return(
    <div>
     Component - A - {countContext.countState}
     <button onClick={() => countContext.countDispatch('increment')}>+</button>
     <button onClick={() => countContext.countDispatch('decriment')}>-</button>
     <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default A;