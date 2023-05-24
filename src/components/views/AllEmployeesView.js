import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  let { deleteEmployee } = props; 
  if (!props.allEmployees.length) {
    return (
      <div style={{backgroundColor:"#7A3E3E",color:"#EEEEEE",fontFamily:"courier",margin:0,padding:80}}>
        <p>There are no employees.</p> 
          <Link to={'/newemployee'}>
            <button>Add New Employee</button>
            </Link> 
      </div> 

    ); 
  }

  return (
    <div style={{backgroundColor:"#7A3E3E",color:"#EEEEEE",fontFamily:"courier",margin:0,padding:80}}>
      
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div style={{backgroundColor:"#7A3E3E",color:"#EEEEEE",fontFamily:"courier",margin:0,padding:80}} key={employee.id}>
          <Link to={`/employee/${employee.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{employee.department}</p>
          <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
        </div>
        );

      })}
      <Link to={'/newemployee'}>
        <button>Add New Employee</button>
      </Link>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;