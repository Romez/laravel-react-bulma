import React from 'react'
import PropTypes from 'prop-types'
import { GoodsActions } from '../../containers'

class GoodsTableRow extends React.Component {
  render () {
    const {id, name, image} = this.props.good

    return (
      <tr>
        <td>{this.props.number}</td>
        <td>
          <figure className="image is-24x24">
            <img src={image}/>
          </figure>
        </td>
        <td className={'good__name'}>{name}</td>
        <td>
          <GoodsActions id={id}/>
        </td>
      </tr>
    )
  }
}

GoodsTableRow.propTypes = {
  good: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  number: PropTypes.number.isRequired
}

export default GoodsTableRow
