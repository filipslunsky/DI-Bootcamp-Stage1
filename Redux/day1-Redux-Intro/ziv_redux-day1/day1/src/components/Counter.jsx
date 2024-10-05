import { useDispatch, useSelector, connect } from "react-redux";

import { add, minus, INCREMENT } from "../redux/actions";

const Counter = (props) => {
  const count = useSelector((state) => state.counterReducer.count);
  console.log(props);
  

  const dispatch = useDispatch();
  return (
    <>
      <h2>Redux Counter</h2>
      <button onClick={() => props.myAdd(10)}> + </button>
      {count}
      <button onClick={() => dispatch(minus())}> - </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myCount: state.counterReducer.count,
    myText: state.counterReducer.text
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myAdd: (val) => dispatch(add(val)),
    myMinus: () => dispatch(minus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
