import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All employers
export const fetchAllEmployers = (employers) => {
  return {
    type: at.FETCH_ALL_EMPLOYERS,
    payload: employers,
  };
};

//Single employer
export const fetchEmployers = (employer) => {
  return {
    type: at.FETCH_EMPLOYER,
    payload: employer,
  };
};

export const addEmployer = (employers) => {
  return {
    type: at.ADD_EMPLOYER,
    payload: employers,
  };
};

export const deleteEmployer = (employerId) => {
  return {
    type: at.DELETE_EMPLOYER,
    payload: employerId,
  };
};

//All tasks
export const fetchAllTasks = (tasks) => {
  return {
    type: at.FETCH_ALL_TASKS,
    payload: tasks,
  };
};

export const addTask = (tasks) => {
  return {
    type: at.ADD_TASK,
    payload: tasks,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: at.DELETE_TASK,
    payload: taskId,
  };
};


export const editTask = (task) => {
  return {
    type: at.EDIT_TASK,
    payload: task,
  };
};

//Single task
export const fetchTask = (task) => {
  return {
    type: at.FETCH_TASK,
    payload: task,
  };
};