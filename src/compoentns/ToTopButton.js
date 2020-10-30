import React from 'react';

import '../styles/ToTopButton.css';

const goToTop = () => {
    window.scroll({top:0, left:0, behavior:"smooth"});
};

const ToTopButton = ({visible}) => {
    return (
        <button className={'to-top'} style={{'display': visible ? 'block' : 'none'}}
        onClick={goToTop}>
            <i className={'fas fa-chevron-up'}/>
        </button>
    );
};

export default ToTopButton;
