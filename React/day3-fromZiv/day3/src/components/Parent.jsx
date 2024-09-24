const Parent = (props) => {
  console.log("Parent Props=>", props);

  if(props.auth === 'admin') return props.children

  return <h2>You are not authorized to ses child</h2>;

};
export default Parent;
