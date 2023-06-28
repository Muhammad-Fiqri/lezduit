import { useState } from 'react';
import $ from 'jquery';

import CloseIcon from '@mui/icons-material/Close';
import './AddTaskHover.scss';

import { useDispatch, useSelector } from "react-redux";
import { AddTask } from "../features/task/taskSlice.js";

function AddTaskHover() {
    //store task name input
    const [task_name, set_task_name] = useState("");

    //take task from redux storage
    const task = useSelector((state) => state.task.value);

    //use dispatch to access redux action
    const dispatch = useDispatch();

    //close hover menu when click x
    const closeTaskHover = () => {
        let HoverMenu = $(".AddTaskHoverWrapper");
        HoverMenu.hide();
        // console.log("close icon click"); //debug purpose!!
    } 

    //save new task to the task array of redux storage and hide the hover menu
    const addTask = () => {
        let HoverMenu = $(".AddTaskHoverWrapper");

        /* debug purpose!!!
        console.log("Adding Task : "+task_name);
        */

        // check if task has the same name in local storage
        let same_name_error = false;
        task.forEach((obj) => {
            if (obj.name == task_name) {
                $("#error").show();
                $("#error").text("Error Can't Add Task With The Same Name")
                $("#error").css("color","white");
                $("#error").css("background-color","red");
                same_name_error = true
            }
        });

        //if not same name, add task and hide
        if (!same_name_error) {
            $("#error").hide();
            dispatch(AddTask(task_name));
            HoverMenu.hide();
        }
    }

    return(
        <div className='AddTaskHoverWrapper'>
            <CloseIcon id="CloseIcon-mui" onClick={closeTaskHover}/>
            <div className="header-wrp">
                <h2>Add Task</h2>
            </div>
            <div className="input-task-wrp">
                <label htmlFor="task-title">
                    Task Title
                </label>
                <input type="text" name="task-title" id="task-input" value={task_name} onChange={(e) => set_task_name(e.target.value)}/>
                <p id="error"></p>
            </div>
            <div className="button-wrp">
                <button id='add-task' onClick={addTask}>Add Task</button>
            </div>
        </div>
    );
}

export default AddTaskHover;