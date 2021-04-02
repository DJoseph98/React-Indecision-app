import React from 'react';

const Actions = (props) => (
    <div>
        <button className="big-button" disabled={!props.options.length > 0} onClick={props.handlePickOption}>Choose for me please I'm stuck</button>
    </div>
);


export default Actions;