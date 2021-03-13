import { useReducer } from 'react';

import { ACTION_TYPES, LOCALSTORAGE_ID, TOKEN_ID } from '../constants';

export const useAuthentication = () => {
    const tokenId = localStorage.getItem(LOCALSTORAGE_ID);
    const initialState = {
        isLoggedIn: !!tokenId,
        [TOKEN_ID]: tokenId
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTION_TYPES.LOGIN:
                localStorage.setItem(LOCALSTORAGE_ID, action.payload[TOKEN_ID]);
                return {
                    ...state,
                    [TOKEN_ID]: action.payload[TOKEN_ID],
                    isLoggedIn: true
                };
            case ACTION_TYPES.LOGOUT:
                localStorage.removeItem(LOCALSTORAGE_ID);
                return {
                    ...state,
                    [TOKEN_ID]: null,
                    isLoggedIn: false
                };
            default:
                console.error('Such action type was not found');
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, dispatch];
};
