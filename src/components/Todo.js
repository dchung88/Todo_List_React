import React, { useState } from 'react';

const listOfTask = [];

const Todo = () => {

    const [task, setTask] = useState(listOfTask);
    const [desc, setDesc] = useState("");

    const addTask = e => {
        e.preventDefault();
        let newTask = {desc, needToDo: true};
        setTask([...task, newTask]);
    }
    
    const toggleNeedToDo = i => {
        let temp = [...task];
        temp[i].needToDo = !temp[i].needToDo;
        setTask(temp);
    }

    const deleteTask = i => {
        let temp = [...task];
        temp.splice(i, 1);
        setTask(temp);
    }

    return (
    
        <div className= "form-group">
            <h1>Todo List</h1>
            
            {task.map((tasks, i) =>
                <ul key = {i} className = {tasks.needToDo?"":"have"}>
                    {
                        tasks.needToDo ?
                        <input type="checkbox" onClick = {e => toggleNeedToDo(i)}/>:
                        <input type="checkbox" onClick = {e => toggleNeedToDo(i)}/>
                    }
                    {tasks.desc}
                    <button key= {i} onClick = {e => deleteTask(i)}>Delete</button>
                </ul>    
            )}

            <form onSubmit={ addTask } className= 'form-check'>
                <label>Task</label>
                    <input
                        type="text"
                        // className="form-control"
                        name="desc"
                        onChange={e => setDesc(e.target.value)}
                    />
                    <input type="submit" value="Add Task" className="btn btn-primary" />
            </form>
        </div>
    
    );
}

export default Todo;