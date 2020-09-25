import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numCakes = useSelector((state) => state.cake.numCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes - {numCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
