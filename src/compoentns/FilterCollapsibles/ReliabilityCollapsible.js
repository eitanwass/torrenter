import React from 'react';

import Collapsible from '../Collapsible';

import '../../styles/FilterCollapsibles/ReliabilityCollapsible.css';


const ReliabilityCollapsible = ({reliability, setReliability}) => {
    const toggleCheck = (e) => {
        let newReliability = [];
        if (e.target.checked) {
            newReliability = [...reliability];
            newReliability.push(e.target.name);
        }
        else {
            for (let i = 0 ; i < reliability.length; i++) {
                if (reliability[i] !== e.target.name)
                    newReliability.push(reliability[i]);
            }
        }
        setReliability(newReliability);
    };

    return (
        <Collapsible title={'reliability'}>
            <div className={'reliability-checkboxes'}>
                <span>
                    <input type={'checkbox'} id={'vip'} name={'vip'} 
                    defaultChecked={reliability.includes('vip')}
                    onClick={toggleCheck}/>
                    <label htmlFor={'vip'}>vip</label>
                </span>

                <span>
                    <input type={'checkbox'} id={'trusted'} name={'trusted'} 
                    defaultChecked={reliability.includes('trusted')}
                    onClick={toggleCheck}/>
                    <label htmlFor={'trusted'}>trusted</label>
                </span>

                <span>
                    <input type={'checkbox'} id={'member'} name={'member'} 
                    defaultChecked={reliability.includes('member')}
                    onClick={toggleCheck}/>
                    <label htmlFor={'member'}>member</label>
                </span>
            </div>  
        </Collapsible>
    );
};

export default ReliabilityCollapsible;