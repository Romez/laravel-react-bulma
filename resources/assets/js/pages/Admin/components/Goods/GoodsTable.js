import React from 'react'
import PropTypes from 'prop-types'
import GoodsTableRow from './GoodsTableRow'

class GoodsTable extends React.Component {

  render () {
    return (
      <table className={'table is-fullwidth'}>
        <thead>
        <tr>
          <th>id</th>
          <th>Изображение</th>
          <th>Название</th>
          <th>Действия</th>
        </tr>
        </thead>

        <tbody>
          {this.props.goods.map((good) => (<GoodsTableRow key={good.id} good={good}/>))}
        </tbody>
      </table>
    )
  }
}

GoodsTable.propTypes = {
  goods: PropTypes.array.isRequired
}

export default GoodsTable
