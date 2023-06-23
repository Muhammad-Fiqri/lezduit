import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import "./ToDo.scss";
import { useDispatch, useSelector } from "react-redux";
import { RemoveTask } from "../features/task/taskSlice.js";

export default function ToDo(props) {
    const dispatch = useDispatch();

    const killMe = () => {
        dispatch(RemoveTask(props.taskName));
    }

    return(
        <div className="ToDo-wrp">
            <CircleRoundedIcon/>
            <p>{props.id}</p>
            <p>{props.taskName}</p>
            <CheckRoundedIcon onClick={killMe}/>
        </div>
    );
}