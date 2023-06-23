import './TaskList.scss';
import ToDo from './ToDo.jsx';
import { useEffect } from 'react';
import { useSelector } from "react-redux";


function TaskList() {
    const task = useSelector((state) => state.task.value);

    useEffect(() => {
        displayTask()
    });

    const displayTask = () => {
        console.log("Task List: ",task);
    }

    return(
        <>
            <div className="TaskListWrapper">
                {task.map((task_n) => <ToDo taskName={task_n.name} id={task_n.id} key={task_n.id}/>)}
            </div>
        </>
    );
}

export default TaskList;