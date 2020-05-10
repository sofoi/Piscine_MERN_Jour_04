import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import User from '/home/mrrobot/Desktop/Workplace/Piscine_MERN_Jour_04/atom/src/users';

const loggerMiddleware = createLogger();

export const store = createStore(
    User,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);