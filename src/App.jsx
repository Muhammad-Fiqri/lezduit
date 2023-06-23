import TopNav from "./Task Menu/TopNav";
import YourTask from "./Task Menu/YourTask";
import TaskList from "./Task Menu/TaskList";
import AddTaskHover from "./Task Menu/AddTaskHover";

import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return(
    <Provider store={store}>
      <TopNav/>
      <YourTask/>
      <TaskList/>
      <AddTaskHover/>
    </Provider>
  );
}

export default App
