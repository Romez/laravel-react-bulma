import React from 'react'
import PropTypes from 'prop-types'
import { GoodsActions } from '../../containers'

class GoodsTableRow extends React.Component {
  render () {
    const {id, name} = this.props.good

    return (
      <tr>
        <td>{id}</td>
        <td></td>
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
    id: PropTypes.number.isRequired
  }).isRequired
}

export default GoodsTableRow
