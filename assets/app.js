import React from 'react';
import { render } from 'react-dom';

const $ = jQuery;

class App extends React.Component {
    render() {
        return (
            <p>Hello World</p>
        );
    }
}

$(document).ready(() => {
    let app = document.getElementById('app');

    if (app) {
        render(<App />, app);
    }
});
