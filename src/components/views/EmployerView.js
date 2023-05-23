import { Link } from "react-router-dom";
import { Employer } from "../../store/reducers";


const EmployerView = (props) => {
  const {employers, editTask, allTasks} = props;
 // let assignedTasks = allTasks.filter(task => task.employerId===employer.id);
 // let availableTasks = allTasks.filter(task => task.employerId!==employer.id);
 console.log(employers);
  return (
    <div>      
      <h1>Hi</h1>
     
       {/* <h1>{employers.department}</h1>
      <h3>{employers}</h3>  */}
      {/* <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
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

      </div> */}

  
    </div>
  );

};

export default EmployerView;
