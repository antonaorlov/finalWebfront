import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk, fetchAllEmployersThunk  } from '../../store/thunks';


/*
IMPORTANT: comments regarding implementation details!!
=====================================================
You'll see that we have two ways of interacting with the UI
in order to change the course's instructor

The dropdown menu is straighforward, it's pretty much the same 
as having the input field for the instructorId but allows us
to actually see the available insutrctors as well as their names, 
not just their IDs. We did have to connect to the allInstructors state
from the Redux store, as well as fetchAllInstructors in componentDidMount().
This was done so we could get the other instructors in the database.
We filter out the current instructor from the array at the beginning of 
the render function, and use this array to populate the dropdown menu
options. Because it's part of the form, we don't need to modify the 
handleSubmit function. On redirect to the CourseView we will see the 
updates.

You will see below the form there is another part of the UI that is
also changing the current course's instructor. This structure is similar
to how changing assigned courses is done in the InstrutcorView. There is
a slight drawback to using this approach in this context. When we perform
an EDIT_COURSE action (initiated by calling the editCourseThunk), this action
is sent to the allCourses reducer, not the course reducer. For that reason, 
we will not see the updates in the single course view unless there is another 
call to the fetchCourseThunk. This is done once when we redirect after form
submission, which is why the data is shown without needing to refresh. 
If we want that same functionality within the container, we need to make
a call to fetchCourse after each editCourse. We see that in the onClick
functionality of the buttons controlling that portion of the UI. 

*/

class EditTaskContainer extends Component {
  constructor(props){
      super(props);
      this.state = {
        title: "", 
        timeslot: "",
        employerId: null, 
        Redirect: false, 
        RedirectId: null,
        error: ""
      };
  }

  componentDidMount() {
      //getting task ID from url
      this.props.fetchTask(this.props.match.params.id);
      this.props.fetchEmployers();
      this.setState({
          title: this.props.task.title, 
          timeslot: this.props.task.timeslot,
          EmployerId: this.props.task.EmployerId, 
      });
    }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSelectChange = event => {
    //handle change for the dropdown menu
    //want to set the EmployerId based on the selected choice
    //when the form gets submitted, this is how we can change
    //assigned Employer without having to manually enter in the 
    //EmployerId like before
    if (event.target.value === "staff") {
      this.setState({employerId:null});
    } else {
      this.setState({employerId: event.target.value})
    }
  }

  handleSubmit = event => {
      event.preventDefault();
      //implementing form validation
      if (this.state.title === "") {
        this.setState({error: "Error: title cannot be empty"});
        return;
      }

      //get new info for task from form input
      let task = {
          id: this.props.task.id,
          title: this.state.title,
          timeslot: this.state.timeslot,
          employerId: this.state.employerId
      };
      
      this.props.editTask(task);

      this.setState({
        Redirect: true, 
        RedirectId: this.props.task.id
      });

  }

  componentWillUnmount() {
      this.setState({Redirect: false, RedirectId: null});

  }

  render() {
      let { task, allEmployers, editTask, fetchTask} = this.props;
      let assignedEmployer = task.employerId;

      let othersEmployer = allEmployers.filter(Employer => Employer.id!==assignedEmployer);
    
      //go to single task view of the edited task
      if(this.state.Redirect) {
        return (<Redirect to={`/task/${this.state.UseNavigateId}`}/>)
      }

      return (
      <div>
      <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
          <input type="text" name="title" value={this.state.title || ''} placeholder={task.title} onChange ={(e) => this.handleChange(e)}/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Timeslot: </label>
          <input type="text" name="timeslot" value={this.state.timeslot || ''} placeholder={task.timeslot} onChange={(e) => this.handleChange(e)}/>
          <br/>

          <select onChange={(e) => this.handleSelectChange(e)}>
            {task.description!==null ?
              <option value={task.EmployerId}>{task.description+" (current)"}</option>
            : <option value="staff">Staff</option>
            }
            {othersEmployer.map(employer => {
              return (
                <option value={employer.id} key={employer.id}>{employer.firstname}</option>
              )
            })}
            {task.description!==null && <option value="staff">Staff</option>}
          </select>

          <button type="submit">
            Submit
          </button>

        </form>
        { this.state.error !=="" && <p>{this.state.error}</p> }

        {task.EmployerId !== null ?
          <div> Current Employer:  
          <Link to={`/Employer/${task.employerId}`}>{task.description}</Link>
          <button onClick={async () => {await editTask({id:task.id, EmployerId: null});  fetchTask(task.id)}}>Unassign</button>
          </div>
          : <div> No Employer currently assigned </div>
        }

        <div> Other Employers
        {othersEmployer.map(Employer => {
          return (
          <div key={Employer.id}>
              <Link to={`/Employer/${Employer.id}`}>
                <h4>{Employer.firstname}</h4>
              </Link>
              <button onClick={async() => {await editTask({id:task.id, EmployerId: Employer.id}); fetchTask(task.id)}}>Assign this Employer</button>
          </div>
          )})
        }
        </div>
      </div>
      )
  }
}

// map state to props
const mapState = (state) => {
  return {
    task: state.task,
    allEmployers: state.allEmployers
  };
};

const mapDispatch = (dispatch) => {
  return({
      editTask: (task) => dispatch(editTaskThunk(task)),
      fetchTask: (id) => dispatch(fetchTaskThunk(id)),
      fetchEmployers: () => dispatch(fetchAllEmployersThunk()),

  })
}

export default connect(mapState, mapDispatch)(EditTaskContainer);


