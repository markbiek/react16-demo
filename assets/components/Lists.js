import React from 'react';

import Fruits from './Fruits';
import Veggies from './Veggies';
import Cookies from './Cookies';

export default class Lists extends React.Component {
    render() {
        return (
            <ul>
                <Fruits />
                <Veggies />
                <Cookies />
            </ul>
        );
    }
}
