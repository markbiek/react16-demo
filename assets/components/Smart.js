import React from 'react';

export default class Smart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ok: true
        };
    }

    componentDidUpdate() {
        if (!this.state.ok) {
            throw 'SMART!';
        }
    }

    render() {
        return (
            <p><a href="#" onClick={e => {
                this.setState({ ok: false});
            }}>Click for smart</a></p>
        );
    }
}
