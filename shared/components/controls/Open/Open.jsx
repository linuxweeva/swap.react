import React from 'react'
import PropTypes from 'prop-types'
import './Open.scss'

const Open = ({ open, notification = false, isUpdate }) => (
    <div className="users" onClick={ open } onMouseUp={setTimeout(() => {
        isUpdate('', false)
    }, 3000 )}>
        <div className="users__user">
            <span className="users__user-letter">K</span>
            { notification === true ?
                <span className="users__user-status"> </span>  : ''}
        </div>
    </div>
)

Open.propTypes = {
    open: PropTypes.func.isRequired,
    notification: PropTypes.bool.isRequired,
    isUpdate: PropTypes.func.isRequired
}

export default Open