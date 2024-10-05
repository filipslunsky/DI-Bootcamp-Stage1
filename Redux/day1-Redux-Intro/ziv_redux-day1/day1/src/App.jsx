import Counter from "./components/Counter";
import InputText from "./components/InputText";
import { useState } from "react";
import "./App.css";
import { useSelector, connect } from "react-redux";

function App(props) {
  const [count, setCount] = useState(0);
  // const title = useSelector(state => state.textReducer.text)
  return (
    <>
      <h2>{props.myTitle}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>
      {count}
      <button onClick={() => setCount((prev) => prev - 1)}> - </button>
      <Counter />
      <InputText/>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myTitle: state.textReducer.text,
  };
};

export default connect(mapStateToProps)(App);
