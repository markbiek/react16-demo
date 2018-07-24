import React from 'react';

import {
    NavConsumer,
} from '../context';

export default class NavItems extends React.Component {
    render() {
        return (
            <NavConsumer>
                {({state, actions}) => {
                    return (
                        <ul>
                            <li className={state.selected == 'Nav 1' ? 'active' : ''}><a href="#" onClick={actions.navClick}>Nav 1</a></li>
                            <li className={state.selected == 'Nav 2' ? 'active' : ''}><a href="#" onClick={actions.navClick}>Nav 2</a></li>
                            <li className={state.selected == 'Nav 3' ? 'active' : ''}><a href="#" onClick={actions.navClick}>Nav 3</a></li>
                        </ul>
                    )
                }}
            </NavConsumer>
        )
    }
}
