import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Loader extends React.Component {
    render() {
        return (
            <div>
                Загрузка...
            </div>
        )
    }
}

Loader.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)
