import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  let { deleteEmployee } = props; 
  if (!props.allEmployees.length) {
    return (
      <div>
        <p className='element'>There are no employees.</p> 
          <Link to={'/newemployee'}>
            <button>
            <span className="transition"></span>
            <span className="gradient"></span>
              Add New Employee</button>
            </Link> 
      </div> 

    ); 
  }

  return (
    <div >
      
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div key={employee.id}>
          <Link to={`/employee/${employee.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{employee.department}</p>
          <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
        </div>
        );

      })}
      <br></br>
      <Link to={'/newemployee'}>
        <button>
        <span className="transition"></span>
            <span className="gradient"></span>
          Add New Employee</button>
      </Link>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;