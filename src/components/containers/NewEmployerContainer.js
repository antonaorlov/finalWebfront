// import { Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// import NewEmployerView from '../views/NewEmployerView';
// import { addEmployerThunk } from '../../store/thunks';


// class NewEmployerContainer extends Component {
//   constructor(props){
//       super(props);
//       this.state = {
//         firstname: "", 
//         lastname: "",
//         department: "", 
//         employerId: null, 
//         Redirect: false, 
//         RedirectId: null,
//         error: ""
//       };
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   handleSubmit = async event => {
//       event.preventDefault();
//       //dont need ID because the Employer has not been created yet
//       if(this.state.firstname===""){
//         this.setState({error:"Title field is required"});
//         return;
//       }
//       let Employer = {
//           firstname: this.state.firstname,
//           lastname: this.state.lastname,
//           department: this.state.department,
//           employerId: this.state.employerId
//       };
      
//       let newEmployer = await this.props.addEmployer(Employer);

//       this.setState({
//         Redirect: true, 
//         RedirectId: newEmployer.id,
//         error: ""
//       });
//   }

//   componentWillUnmount() {
//       this.setState({ Redirect: false, RedirectId: null});
//   }

//   render() {
//     //go to single Employer view of newly created Employer
//       if(this.state.Redirect) {
//         return (< Redirect to={`/Employer/${this.state.RedirectId}`}/>)
//       }
//       return (
//         <NewEmployerView 
//           handleChange={this.handleChange} 
//           handleSubmit={this.handleSubmit}
//           error={this.state.error}      
//         />
//       );
//   }
// }

// const mapDispatch = (dispatch) => {
//   return({
//       addEmployer: (Employer) => dispatch(addEmployerThunk(Employer)),
//   })
// }

// export default connect(null, mapDispatch)(NewEmployerContainer);



