import React, { Component } from "react";
import { connect } from "react-redux";
import {  fetchEmployerThunk, editTaskThunk, fetchAllEmployersThunk} from "../../store/thunks";

import { EmployerView } from "../views";

class EmployerContainer extends Component {
  componentDidMount() {
    //getting instructor ID from url
    this.props.fetchEmployers(this.props.match.params.id);
    this.props.fetchTask();
  }

  render() {
    return (
      <EmployerView 
        employers={this.props.employer}
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
    fetchEmployers: (id) => dispatch(fetchEmployerThunk(id)),
    editTask: (task) => dispatch(editTaskThunk(task)),
    fetchTask: () => dispatch(fetchAllEmployersThunk()),

  };
};

export default connect(mapState, mapDispatch)(EmployerContainer);

