import React from 'react'
import PropTypes from 'prop-types'

class GoodCard extends React.Component {
  render () {
    const {name, description, image} = this.props.good

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={name}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
            </div>
          </div>

          <div className="content">
            {description}
          </div>
        </div>
      </div>
    )
  }
}

GoodCard.propTypes = {
  good: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired
}

export default GoodCard
