import React from "react";
import { buyIce } from "../redux";
import { connect } from "react-redux";

function IceContainer(props) {
  console.log(props);
  return (
    <div>
      <h2>Number of Ice - {props.numIce}</h2>
      <button onClick={props.buyIce}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numIce: state.ice.numIce,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIce: () => dispatch(buyIce()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceContainer);
