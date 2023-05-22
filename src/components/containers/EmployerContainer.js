import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  fetchEmployerThunk,
  fetchAllTasksThunk,
  editTaskThunk 
} from "../../store/thunks";

import { EmployerView } from "../views";
class EmployerContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    //getting Employer ID from url
    await this.props.fetchEmployer(this.props.match.params.id);
    await this.props.fetchTasks();
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      
      <EmployerView 
        employer={this.props.employer}
        editTask={this.props.editTask}
        allTasks={this.props.allTasks}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    employer: state.employer,
    allTasks: state.allTasks,

  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchEmployer: (id) => dispatch(fetchEmployerThunk(id)),
    editTask: (Task) => dispatch(editTaskThunk(Task)),
    fetchTasks: () => dispatch(fetchAllTasksThunk()),

  };
};

export default connect(mapState, mapDispatch)(EmployerContainer);

