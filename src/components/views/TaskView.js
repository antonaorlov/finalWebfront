import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div style={{backgroundColor:"#47A992",color:"#482121",fontFamily:"courier",margin:5,padding:50}}>
      <h1>{task.description}</h1>
      {task.employee ? <h3>{task.employee.firstname + " " + task.employee.lastname}</h3>: <h3>staff</h3>}
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <Link to={`/tasks`}>View all tasks</Link>
      <div>style={{backgroundColor:"#47A992",color:"#482121",fontFamily:"courier",margin:5,padding:400}}</div>
    </div>
  );

};

export default TaskView;