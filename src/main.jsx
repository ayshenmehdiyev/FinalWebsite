import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addToFavListReducer } from './Redux/reducers/Favlist.reducer.jsx'
const globalstore = createStore(addToFavListReducer)



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={globalstore}>
            <App />
        </Provider>
    </BrowserRouter>

)
