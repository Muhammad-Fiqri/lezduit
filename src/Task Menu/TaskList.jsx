import './TaskList.scss';
import ToDo from './ToDo.jsx';
import { useEffect } from 'react';
import { useSelector } from "react-redux";


function TaskList() {
    //acess redux task list from storage 
    const task = useSelector((state) => state.task.value);

    /*
    useEffect(() => {
        debug();
    });

    const debug = () => {
        console.log("Task List: ",task);
        console.log("local storage:",localStorage);
    }
    */

    return(
        <>
            <div className="TaskListWrapper">
                {/*iterate each one of object inside array of task storage to display*/}
                {task.map((task_n) => <ToDo taskName={task_n.name} id={task_n.id} key={task_n.id}/>)}
            </div>
        </>
    );
}

export default TaskList;