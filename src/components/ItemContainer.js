import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIce } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItems}>Buy</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numCakes : state.ice.numIce;

  return {
    item: itemState,
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  const dispatchFunc = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIce());

  return {
    buyItems: dispatchFunc,
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(ItemContainer);
