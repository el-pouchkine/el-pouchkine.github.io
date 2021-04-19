import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomButtons = (props) => {
    return (
        <div className="bottom-buttons">
            <div className="bottom-buttons-main">
                {props.left && (
                    <NavLink to={props.left} className="left hover"><span>&#10092;</span></NavLink>
                )}
                <p className="center">Feel : Scroll</p>
                {props.right && (
                    <NavLink to={props.right} className="right hover"><span>&#10093;</span></NavLink>
                )}
            </div>
        </div>
    );
};

export default BottomButtons;