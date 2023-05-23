import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { Task } = props;
  return (
    <div>
      <h1>{Task.desciption}</h1>
      {Task.employer ? <h3>{Task.employer.firstname + " " + Task.employer.lastname}</h3>: <h3>staff</h3>}
      <Link to={`/editTask/${Task.id}`}>Edit Task information</Link>
      <br/>
      <Link to={`/Tasks`}>View all Tasks</Link>
    </div>
  );

};

export default TaskView;
