import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers/index';

import App from './components/App';
import { firebaseApp, usersRef } from './firebase';
import { actLogin , actLogout } from './actions/index';
import * as serviceWorker from './serviceWorker';

const store = createStore(
	appReducers, /* preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//console.log(firebaseApp);

ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();


firebaseApp.auth().onAuthStateChanged((user) => {
	if (user) {
		//console.log(user);
		//console.log(store.getState());
		let userInfo = {
			email: user.email,
			uid: user.uid,
			isAdmin: false,
		}
		usersRef.child(user.uid).once('value').then(data => {
			let info = data.val();
			userInfo.isAdmin = info.isAdmin;
			userInfo.website = info.website;
			store.dispatch(actLogin(userInfo));
		})
		
	} else {
		store.dispatch(actLogout());
		//console.log('log out');
	}
});

//console.log(store.getState());