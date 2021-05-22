import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Notification from './Notification';

function AsideRight(props) {
    return (
        <div>
            Aside Right
            <Info />
            <Notification />
        </div>
    );
}

AsideRight.propTypes = {};

export default AsideRight;
