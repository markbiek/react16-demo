import React from 'react';
import { render } from 'react-dom';

const $ = jQuery;

import ErrorBoundary from './components/ErrorBoundary';
import Stupid from './components/Stupid';
import Smart from './components/Smart';

class App extends React.Component {
    render() {
        return (
            <div>
                <Stupid />
                <ErrorBoundary>
                    <Smart />
                </ErrorBoundary>
            </div>
        );
    }
}

$(document).ready(() => {
    let app = document.getElementById('app');

    if (app) {
        render(<App />, app);
    }
});
