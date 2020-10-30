import React from 'react';

import '../styles/Collapsible.css';

let last_collapsible = null;

const toggleCollapsible = (collapsible) => {
    const content = collapsible.nextElementSibling;

    if (content.style.maxHeight) {
        collapsible.style.background = '#dfdfdf';
        content.style.maxHeight = null;
        last_collapsible = null;
    } else {
        collapsible.style.background = '#f1f1f1';
        content.style.maxHeight = content.scrollHeight + "px";

        if (last_collapsible) {
            toggleCollapsible(last_collapsible);
        }
        last_collapsible = collapsible;
    }
};

const Collapsible = ({title, children}) => {
    return (
        <>
            <button className={'collapsible'} 
            onClick={e => toggleCollapsible(e.target)}>{title}</button>

            <div className={"content"}>
                {children}
            </div>
        </>
    );
};

export default Collapsible;
