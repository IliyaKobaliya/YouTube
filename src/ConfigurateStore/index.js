import {createBrowserHistory} from 'history'
import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import createRootReducer from '../Redux/Reducers/RootReducer'
import thunk from "redux-thunk";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    );
    if (module.hot) {
        module.hot.accept('../Redux/Reducers/RootReducer', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    return store
}