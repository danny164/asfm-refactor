import React from 'react';
import moment from 'moment';
import './styles.scss';

function Version() {
    return <section className="d-none d-md-block sticky-version">{moment().year()}© V1.4</section>;
}

Version.propTypes = {};

export default Version;
