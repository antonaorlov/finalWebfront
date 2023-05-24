import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let {tasks, deleteTask} = props;
  if (!tasks.length) {
    return (
    <div>
      <p className='element'>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div >
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div key={task.id}>
          <Link to={`/task/${task.id}`}>
            <h1>{description}</h1>
          </Link>
          <button onClick={() => deleteTask(task.id)}>
          <span class="transition"></span>
            <span class="gradient"></span>
            Delete</button>
          </div>
        );
      }
      )}
      <br></br>
      <Link to={`/newtask`}>
        <button>
        <span class="transition"></span>
            <span class="gradient"></span>
          Add New Task</button>
      </Link>
    </div>
  );
};


export default AllTasksView;