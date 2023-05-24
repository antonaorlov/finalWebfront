import { Link } from "react-router-dom";


const EmployeeView = (props) => {
  const {employee, editTask, allTasks} = props;
  let assignedTasks = allTasks.filter(task => task.employeeId===employee.id);
  let availableTasks = allTasks.filter(task => task.employeeId!==employee.id);
  
  return (
    <div >      
      <h1 className="element">{employee.firstname}</h1>
      <h3 className="element">{employee.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div className="element" >Assigned tasks:
        {assignedTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4 className="element">{task.description}</h4>
            </Link>
            <button 
            
            onClick={() => editTask({id:task.id, employeeId: null})}>x
             <span class="transition"></span>
            <span class="gradient"></span>
            </button>
            </div>
          );
        })}</div>
        <div className="element">Available tasks:
        {availableTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h4 className="element">{task.description}</h4>
            </Link>
            <button onClick={() => editTask({id:task.id, employeeId: employee.id})}>+
            <span class="transition"></span>
            <span class="gradient"></span>
            </button>
            </div>
          );
        })}</div>

      </div>

  
    </div>
  );

};

export default EmployeeView;