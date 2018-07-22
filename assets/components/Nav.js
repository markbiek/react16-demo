import React from 'react';
import { createPortal } from 'react-dom';

import NavItems from './NavItems';

export default class Nav extends React.Component {
    render() {
        return createPortal(
            <NavItems />,
            document.getElementById('nav')
        );
    }
}
