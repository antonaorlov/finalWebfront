import './App.css';

//ROuter
import {Switch, Route} from "react-router-dom"

//components
import{
  HomePageContainer,
  EmployerContainer,
  TaskContainer,
  AllEmployersContainer,
  AllTasksContainer,
  NewTaskContainer,
  EditTaskContainer
} from './components/containers';

const App = () => {
  return(
    <div className='App'>
      <Switch>
        <Route exact path="/" component={HomePageContainer}/>
        <Route exact path="/employers" component={AllEmployersContainer}/>
        <Route exact path="/employer/:id" component={EmployerContainer} />
        <Route exact path="/tasks" component={AllTasksContainer} />
        <Route exact path="/newtask" component={NewTaskContainer} />
        <Route exact path="/task/:id" component={TaskContainer} />
        <Route exact path="/edittask/:id" component={EditTaskContainer} />
      </Switch>
    </div>
  );
}

export default App;