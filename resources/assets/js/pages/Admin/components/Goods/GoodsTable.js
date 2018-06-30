import React from 'react'
import PropTypes from 'prop-types'
import GoodsTableRow from './GoodsTableRow'

class GoodsTable extends React.Component {

  render () {
    const {from, goods} = this.props

    return (
      <table className={'table is-fullwidth'}>
        <thead>
        <tr>
          <th>№</th>
          <th>Изображение</th>
          <th>Название</th>
          <th>Действия</th>
        </tr>
        </thead>

        <tbody>
          {goods.map((good, i) => (<GoodsTableRow key={good.id} good={good} number={from + i}/>))}
        </tbody>
      </table>
    )
  }
}

GoodsTable.propTypes = {
  goods: PropTypes.array.isRequired,
  from: PropTypes.number.isRequired
}

export default GoodsTable
