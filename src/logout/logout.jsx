import { useHistory } from 'react-router-dom';

import { useAuthenticationDispatchContext } from '../hooks';
import { ACTION_TYPES, ROUTES } from '../constants';

export const Logout = () => {
    const history = useHistory();
    const dispatch = useAuthenticationDispatchContext();

    const handleLogout = () => {
        dispatch({
            type: ACTION_TYPES.LOGOUT
        });
        history.push(ROUTES.LOGIN);
    };
    return (
        <h5>
            To leave our spaceship, please <button onClick={handleLogout}> LOGOUT </button>
        </h5>
    );
};

export default Logout;
