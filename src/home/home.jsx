import { Logout } from '../logout';
import { useAuthenticationStateContext } from '../hooks';
import { TOKEN_ID } from '../constants';

export const Home = () => {
    const authenticationState = useAuthenticationStateContext();
    const tokenId = authenticationState[TOKEN_ID];

    return (
        <div>
            <h3>Home page for spaceship</h3>
            Looks like you are the member of a spaceship, your tokenId <b>#{ tokenId }</b>
            <Logout />
        </div>
    )
};

export default Home;
