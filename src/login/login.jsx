import { useHistory } from 'react-router-dom';

import { useAuthenticationDispatchContext } from '../hooks';
import {ACTION_TYPES, ROUTES, TOKEN_ID} from '../constants';

export const Login = () => {
    const history = useHistory();
    const dispatch = useAuthenticationDispatchContext();

    const handleLogin = () => {
        dispatch({
            type: ACTION_TYPES.LOGIN,
            payload: {
                [TOKEN_ID]: '123456789'
            }
        });
        history.push(ROUTES.HOME);
    };

    return (
        <div>
            <h2>Welcome to our spaceship, please log in</h2>
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    );
};

export default Login;
