import React from 'react';
import { useSelector } from 'react-redux';
import {selectUserIsLoggedIn, selectUserName} from '../../services/selectors';
import './index.css';

const UserDisplay: React.FC = () => {
    const username = useSelector(selectUserName);
    const isLoggedIn = useSelector(selectUserIsLoggedIn)

    if (!isLoggedIn){
        return null;
    }
    return(
        <div className="name-display">
            <h2><b>Hello</b> {username}!</h2>
        </div>
    )
}

export default UserDisplay;
