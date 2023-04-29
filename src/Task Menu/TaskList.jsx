import './TaskList.scss';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

function TaskList() {
    return(
        <>
            <div className="TaskListWrapper">
                <div className="ToDo">
                    <CircleRoundedIcon/>
                    <p>To Do 1</p>
                    <CheckRoundedIcon/>
                </div>
                <div className="ToDo">
                    <CircleRoundedIcon/>
                    <p>To Do 2</p>
                    <CheckRoundedIcon/>
                </div>
                <div className="ToDo">
                    <CircleRoundedIcon/>
                    <p>To Do 3</p>
                    <CheckRoundedIcon/>
                </div>
            </div>
        </>
    );
}

export default TaskList;