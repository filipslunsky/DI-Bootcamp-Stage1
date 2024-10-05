import { useDispatch, connect } from "react-redux";
import { changeTitle } from "../redux/textAction";
import React from 'react';

// const InputText = (props) => {
//   // const dispatch = useDispatch();
//   return (
//     <div>
//       <input onChange={(e) => props.myChangeTitle(e)} />
//     </div>
//   );
// };

class InputText extends React.Component {
  render() {
    return (
      <div>
        <input onChange={(e) => this.props.myChangeTitle(e)} />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    myChangeTitle: (e) => dispatch(changeTitle(e.target.value)),
  };
};

export default connect(undefined, mapDispatchToProps)(InputText);
