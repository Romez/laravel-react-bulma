import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AddCategory extends React.Component {

  /**
   * Создать категорию
   */
  create = () => {
    const value = this.refs['input'].value

    if (value) {
      this.props.create(value)
      this.refs['input'].value = ''
    }
  }

  render () {
    return (
      <div className="field has-addons">
        <div className="control">
          <input ref={'input'} className="input" type="text" placeholder="Введите категорию..."/>
        </div>

        <div className="control">
          <input onClick={this.create} className="button" type="submit" value="Добавить"/>
        </div>
      </div>
    )
  }
}

AddCategory.propTypes = {
  create: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)
