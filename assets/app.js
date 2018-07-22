import React from 'react';
import { render } from 'react-dom';

const $ = jQuery;

import ErrorBoundary from './components/ErrorBoundary';
import Stupid from './components/Stupid';
import Smart from './components/Smart';
import Lists from './components/Lists';

class App extends React.Component {
    render() {
        return (
            <div>
                <Stupid />
                <ErrorBoundary>
                    <Smart />
                    <Lists />
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
