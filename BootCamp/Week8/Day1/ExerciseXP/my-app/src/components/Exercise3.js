import './Exercise.css';

const Exercise = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };


    return(
        <>
            <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>This is a header - part I</h1>
            <h1 style={style_header}>This is a header - part II</h1>
            <h1 className='para'>This is a header - part III</h1>
            <h1>This</h1>
            <p>This is a paragraph</p>
            <a href="#">This is a link</a>
            <h1>This is a form</h1>
            <p>Enter your name here:</p>
            <form>
                <input type="text" />
                <input type="submit" />
            </form>
            <h1>Here is an image</h1>
            <img src="/logo512.png" alt="logo" />
        </>
    )
};

export default Exercise;