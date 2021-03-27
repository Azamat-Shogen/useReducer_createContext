import React, {useContext} from 'react';
import { CountContext } from './App';


function D(){

  const countContext = useContext(CountContext);

  return(
    <div>
     Component - D - {countContext.countState}
     <button onClick={() => countContext.countDispatch('increment')}>+</button>
     <button onClick={() => countContext.countDispatch('decriment')}>-</button>
     <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default D;