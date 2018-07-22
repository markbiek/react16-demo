import React from 'react';

import Fruits from './Fruits';
import Veggies from './Veggies';
import Cookies from './Cookies';

export default class Lists extends React.Component {
    render() {
        return (
            <div>
                <h3>Fruits, Veggies, & Cookies</h3>
                <ul>
                    <Fruits />
                    <Veggies />
                    <Cookies />
                </ul>
            </div>
        );
    }
}
