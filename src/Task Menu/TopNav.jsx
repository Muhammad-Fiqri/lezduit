import AddIcon from '@mui/icons-material/Add';
import './TopNav.scss';

function TopNav() {
    const addIconClicked = () => {
      console.log("Add Task Clicked");
      const AddTaskMenu = document.getElementsByClassName("AddTaskHoverWrapper")[0];
      AddTaskMenu.style.display = "block";
    }

    return(
      <>
        <div className='TopNavWrapper'>
            <h1>LEZDUIT!</h1>
            <AddIcon onClick={addIconClicked}/>
        </div>
      </>
    );
}
  
export default TopNav;