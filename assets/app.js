import React from 'react';
import { render } from 'react-dom';

import {
    NavProvider,
} from './context';

const $ = jQuery;

import ErrorBoundary from './components/ErrorBoundary';
import Stupid from './components/Stupid';
import Smart from './components/Smart';
import Lists from './components/Lists';
import Nav from './components/Nav';

class App extends React.Component {
    state = {
        meta: {
            name: 'foo',
        },
        nav: {
            selected: 'Nav 1'
        }
    };

    render() {
        return (
            <div>
                <NavProvider value={
                    {
                        state: this.state.nav,
                        actions: {
                            navClick: e => {
                                e.persist();
                                e.preventDefault();

                                this.setState(prevState => ({
                                    meta: {
                                        ...prevState.meta,
                                    },
                                    nav: {
                                        selected: e.target.innerHTML
                                    }
                                }));
                            }
                        }
                    }
                }>
                    <Nav />
                </NavProvider>
                <p><small>(This is the main React app rendered in <code>#app</code></small></p>
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
