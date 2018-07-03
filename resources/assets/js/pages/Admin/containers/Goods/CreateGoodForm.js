import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'
import { updateFormValue, updateFormError } from '../../actions/goodActions'

class CreateGoodForm extends React.Component {
  submit = (e) => {
    e.preventDefault()

    // todo submit
  }

  /**
   * Обработчик изменения изображения
   * @param e
   */
  fileChange = (e) => {
    this.props.updateFormValue('file', e.target.files[0])
  }

  /**
   * Обработчик изменения input полей
   * @param e
   */
  inputChange = (e) => {
    const {name, value} = e.target

    this.props.updateFormValue(name, value)
  }

  render () {
    const {form, errors} = this.props

    return (
      <div className={'card section'}>

        <form onSubmit={this.submit}>
          <div className="field">
            <div className="file has-name">
              <label className="file-label">
                <input
                  onChange={this.fileChange}
                  className={cn('file-input', {'is-danger': errors.description})}
                  type="file"
                  name="resume"
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fa fa-upload"/>
                  </span>
                  <span className="file-label">
                      Выберете изображение…
                  </span>
                </span>
                {form.file && <span className="file-name">
                  {form.file.name}
                </span>}
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                name={'name'}
                onChange={this.inputChange}
                className={cn('input', {'is-danger': errors.name})}
                type="text"
                placeholder="Название"
                value={form.name}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                name={'description'}
                onChange={this.inputChange}
                className={cn('input', {'is-danger': errors.description})}
                type="text"
                placeholder="Описание"
                value={form.description}
              />
            </div>
          </div>

          <input className="button" type="submit" value="Создать"/>
        </form>

      </div>
    )
  }
}

CreateGoodForm.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    file: PropTypes.object
  }).isRequired,

  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
  }).isRequired
}

const mapStateToProps = (state) => ({
  form: state.admin.goodsReducer.form,
  errors: state.admin.goodsReducer.errors
})

const mapDispatchToProps = {
  updateFormValue,
  updateFormError
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGoodForm)
