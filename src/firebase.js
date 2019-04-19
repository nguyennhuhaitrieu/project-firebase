import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA5qeot0dcexlbMRYvi3udTg74ca2y39N0",
    authDomain: "task-manager-reactjs-0909.firebaseapp.com",
    databaseURL: "https://task-manager-reactjs-0909.firebaseio.com",
    projectId: "task-manager-reactjs-0909",
    storageBucket: "task-manager-reactjs-0909.appspot.com",
    messagingSenderId: "821844731978"
  };

export const firebaseApp = firebase.initializeApp(config);
export const taskRef     = firebase.database().ref('tasks');
export const taskCompletedRef     = firebase.database().ref('tasksCompleted');