import React from 'react'
import PropTypes from 'prop-types'
import './Description.scss'

import FilterContainer from '../../containers/FilterContainer'

const Description = ({ title, subtitle, filter = false  }) => (
    <div className="description">
        <div className="container">
            { title !== '' ? <h2 className="description__title">{title}</h2> : '' }
            <h3 className="description__sub-title">{subtitle}</h3>
            {filter ? <FilterContainer /> : ''}
        </div>
    </div>
)

Description.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string.isRequired,
    filter: PropTypes.bool
}

export default Description