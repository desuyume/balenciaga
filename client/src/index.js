import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import UserStore from './store/UserStore'
import CommentStore from './store/CommentStore'

const userStore = new UserStore();
const commentStore = new CommentStore();

export const Context = createContext({
	userStore,
	commentStore
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Context.Provider value={{
		userStore,
		commentStore
	}}>
		<App />
	</Context.Provider>
)
