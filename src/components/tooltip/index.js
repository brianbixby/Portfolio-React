import React from 'react';
import { renderIf } from '../../lib/util';
import caretUp from '../assetts/caret-up.icon.svg';
import './tooltip.css';

const Tooltip = props => (
    <div className='tooltip'>
        {renderIf(props.message && props.show,
            <section>
                <img className='caret-up' alt="caret up" src={caretUp} />
                <p> {props.message} </p>
            </section>
        )}
    </div>
);

export default Tooltip;