import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import "./ToDo.scss";
import { useDispatch, useSelector } from "react-redux";
import { RemoveTask } from "../features/task/taskSlice.js";

export default function ToDo(props) {
    //access redux action
    const dispatch = useDispatch();

    //remove task from local storage
    const killMe = () => {
        dispatch(RemoveTask({"name" : props.taskName,"id" : props.id}));
    }

    return(
        <div className="ToDo-wrp">
            <CircleRoundedIcon/>
            <p>id: {props.id}</p>
            <p>task name: {props.taskName}</p>
            <CheckRoundedIcon onClick={killMe}/>
        </div>
    );
}