import React from 'react';

export default class Stupid extends React.Component {
    render() {
        return (
            <p><a href="#" onClick={e => {
                throw 'STUPID!';
            }}>Click for stupid</a></p>
        );
    }
}
