import * as ac from './actions/actionCreators';
const axios = require('axios');

//PATH (should be where your server is running)
let path = "http://localhost:5001/api";

// THUNKS

//All Employers
export const fetchAllEmployersThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/Employers`);
    dispatch(ac.fetchAllEmployers(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single Employer
export const fetchEmployerThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/Employers/${id}`);
    dispatch(ac.fetchEmployers(res.data));
  } catch(err) {
    console.error(err);
  }
};

//All tasks
export const fetchAllTasksThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/tasks`);
    dispatch(ac.fetchAllTasks(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addTaskThunk = (task) => async (dispatch) => {
  try {
    let res = await axios.post(`${path}/tasks`, task);
    dispatch(ac.addTask(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
    throw err; // Propagate the error so it can be handled in handleSubmit
  }
};

export const deleteTaskThunk = taskId => async dispatch => {
  try {
    await axios.delete(`${path}/tasks/${taskId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteTask(taskId));
  } catch(err) {
    console.error(err);
  }
};

export const editTaskThunk = task => async dispatch => {
  try {
    let res = await axios.put(`${path}/tasks/${task.id}`, task);
    //res.data is the updated course object
    dispatch(ac.editTask(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single Task
export const fetchTaskThunk = id => async dispatch => {
  try {
    let res = await axios.get(`${path}/tasks/${id}`);
    dispatch(ac.fetchTask(res.data));
  } catch(err) {
    console.error(err);
  }
};