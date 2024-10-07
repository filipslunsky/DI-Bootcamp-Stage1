import { memo } from 'react';

const ToDo = ({todos, addTask}) => {

    console.log('Todo Render...');
    

    return (
        <>
            <h2>Todo:</h2>
            <button onClick={() => addTask()}>Add Task</button>
            {
                todos.map((task, index) => {
                    return (
                        <div key={index}>
                            {index}. {task}
                        </div>
                    )
                })
            }
        </>
    );
}
 
export default memo(ToDo);