import React from 'react';
import Option from './Option'; // car Option dans Options

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Options :</h3>
            <button className="button button--link" onClick={props.handleDeleteOptions} disabled={!props.options.length > 0}>Remove ALL</button>
        </div>
       
        {props.options.length === 0 && <p className="widget-header__message">Add all the options you struggle to choose</p>}
        {props.options.map((option, index) => (
            <Option
                key={option}
                count={index}
                optionText={option}
                handleDeleteOneOption={props.handleDeleteOneOption}
            />
        ))
        }
    </div>
);

export default Options;