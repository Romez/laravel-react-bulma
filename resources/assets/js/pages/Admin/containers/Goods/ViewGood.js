import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ViewGood extends React.Component {
  render () {
    const {imageUrl, name, description} = this.props.good

    return (
      <div className="card card-view">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={imageUrl} alt={name}/>
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

ViewGood.propTypes = {
  good: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = (state) => {
  const id = state.admin.goodsReducer.modalActionId
  const good = state.admin.goodsReducer.goods.find((good) => good.id === id)

  return {
    good
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewGood)
