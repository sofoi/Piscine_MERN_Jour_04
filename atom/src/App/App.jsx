import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '/home/mrrobot/Desktop/Workplace/Piscine_MERN_Jour_04/atom/src/_helpers';
import { PrivateRoute } from '/home/mrrobot/Desktop/Workplace/Piscine_MERN_Jour_04/atom/src/components';
import { HomePage } from '/home/mrrobot/Desktop/Workplace/Piscine_MERN_Jour_04/atom/src/HomePage';
import { LoginPage } from '/home/mrrobot/Desktop/Workplace/Piscine_MERN_Jour_04/atom/src/LoginPage';
import { RegisterPage } from '/home/mrrobot/Desktop/Workplace/Piscine_MERN_Jour_04/atom/src/RegisterPage';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-md-8 offset-md-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export { App };
