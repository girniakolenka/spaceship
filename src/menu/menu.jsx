import {  Link } from 'react-router-dom';
import { ROUTES } from '../constants';

export const Menu = () => (
    <nav>
        <ul>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ABOUT}>About</Link>
            </li>
        </ul>
    </nav>
);

export default Menu;
