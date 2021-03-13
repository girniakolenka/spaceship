import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import { Home } from './home';
import { About } from './about';
import { Login } from './login';
import { Menu } from './menu';
import { ROUTES } from './constants';
import { useAuthentication } from './hooks';

import {
    AuthenticationStateContext,
    AuthenticationDispatchContext
} from './hooks';

export const App = () => {
    const [state, dispatch] = useAuthentication();
    const { isLoggedIn } = state;

    return (
        <AuthenticationDispatchContext.Provider value={dispatch}>
            <AuthenticationStateContext.Provider value={state}>
                <Router>
                    { isLoggedIn && <Menu/> }
                    <Switch>
                        { isLoggedIn && (
                            <>
                                <Route exact path={ROUTES.HOME} component={Home}/>
                                <Route exact path={ROUTES.ABOUT} component={About}/>
                                <Redirect to={ROUTES.HOME} />
                            </>
                        )}
                        { !isLoggedIn && (
                            <>
                                <Route exact path={ROUTES.LOGIN} component={Login}/>
                                <Redirect to={ROUTES.LOGIN} />
                            </>
                        )}
                    </Switch>
                </Router>
            </AuthenticationStateContext.Provider>
        </AuthenticationDispatchContext.Provider>
    );
};
