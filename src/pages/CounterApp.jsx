import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartContext } from "../context/AuthContext";
import { counterDec, counterInc } from "../store/actions";
import { Navigate } from "react-router-dom";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../store/action.types";

const CounterApp = () => {
  const { auth } = useContext(CartContext);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  if (auth) {
    return (
      <div>
       
        
        <div><h5><button className='plus'
          onClick={() =>
            dispatch({ type: INCREMENT_COUNTER }, console.log(count))
          }
        >
          +
        </button> <span>{count} </span>         <button  className='minus' onClick={() => dispatch({ type: DECREMENT_COUNTER })}>-</button>
</h5></div>
        
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default CounterApp;
