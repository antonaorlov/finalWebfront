import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployersView = (props) => {
  if (!props.allEmployers.length) {
    return <div>There are no Employers.</div>;
  }

  return (
    <div>
      {props.allEmployers.map((employer) => {
        let name = employer.firstname + " " + employer.lastname;
        return (
          <div key={employer.id}>
          <Link to={`/Employees/${employer.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{employer.department}</p>
        </div>
        );

      })}
    </div>
  );
};

AllEmployersView.propTypes = {
  allEmployers: PropTypes.array.isRequired,
};

export default AllEmployersView;
