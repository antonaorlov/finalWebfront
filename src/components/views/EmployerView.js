import { Link } from "react-router-dom";

const EmployerView = (props) => {
  const {employer, editTask, allTasks} = props;
   // If employer or allTasks is not yet loaded, display a loading message
   if (!employer || !allTasks) {
    return <p>Loading...</p>;
  }
  let assignedTasks = allTasks.filter(task => task.employerId===employer.id);
  let availableTasks = allTasks.filter(task => task.employerId!==employer.id);
  
  return (
    <div>      
      <h1>{employer.firstname}</h1>
      <h3>{employer.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned tasks:
        {assignedTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4>{task.title}</h4>
            </Link>
            <button onClick={() => editTask({id:task.id, employerId: null})}>x</button>
            </div>
          );
        })}</div>
        <div>Available tasks:
        {availableTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4>{task.title}</h4>
            </Link>
            <button onClick={() => editTask({id:task.id, employerId: employer.id})}>+</button>
            </div>
          );
        })}</div>

      </div>

  
    </div>
  );

};

export default EmployerView;

