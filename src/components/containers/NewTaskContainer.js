import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewTaskView from '../views/NewTaskView';
import { addTaskThunk } from '../../store/thunks';



class NewTaskContainer extends Component {
  constructor(props){
      super(props);
      this.state = {
        title: "", 
        timeslot: "",
        location: "", 
        instructorId: null, 
        redirect: false, 
        redirectId: null,
        error: ""
      };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
      event.preventDefault();
      //dont need ID because the task has not been created yet
      if(this.state.title===""){
        this.setState({error:"Title field is required"});
        return;
      }
      let task = {
          title: this.state.title,
          timeslot: this.state.timeslot,
          location: this.state.location,
          instructorId: this.state.instructorId,
           description: this.state.description // Add this line
      };
      try {
        let newTask = await this.props.addTask(task);
    
        if (newTask && newTask.id) {
          this.setState({
            redirect: true, 
            redirectId: newTask.id,
            error: ""
          });
        } else {
          throw new Error('Failed to add task or task id missing');
        }
      } catch (error) {
        console.error('Error adding task:', error);
        this.setState({ error: 'There was an error adding the task.' });
      }
  }

  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  render() {
    //go to single task view of newly created task
      if(this.state.redirect) {
        return (<Redirect to={`/task/${this.state.redirectId}`}/>)
      }
      return (
        <NewTaskView 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          error={this.state.error}      
        />
      );
  }
}

const mapDispatch = (dispatch) => {
  return({
      addTask: (task) => dispatch(addTaskThunk(task)),
  })
}

export default connect(null, mapDispatch)(NewTaskContainer);

