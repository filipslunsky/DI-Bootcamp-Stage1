const Parent = (props) => {
    console.log('Parent props=>', props);
    
    if(props.auth === 'admin') return props.children;

    return <h2>You are not authorized to see the child</h2>

    // return (
    //     <>
    //     <h1>Parent Component</h1>
    //     </>
    // );
    
}
 
export default Parent;