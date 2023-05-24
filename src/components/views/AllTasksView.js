import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let {tasks, deleteTask} = props;
  if (!tasks.length) {
    return (
    <div style={{backgroundColor:"#47A992",color:"#482121",fontFamily:"courier",margin:0,padding:50}}>
      <p>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div style={{backgroundColor:"#47A992",color:"#482121",fontFamily:"courier",margin:0,padding:50}}>
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div key={task.id}>
          <Link to={`/task/${task.id}`}>
            <h1>{description}</h1>
          </Link>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        );
      }
      )}
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
    </div>
  );
};


export default AllTasksView;