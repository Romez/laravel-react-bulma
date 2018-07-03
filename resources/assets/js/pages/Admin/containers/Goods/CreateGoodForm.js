import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'
import { updateFormValue, updateFormError, skipFormError, createGood } from '../../actions/goodActions'

class CreateGoodForm extends React.Component {

  /**
   * Проверка полей формы
   * @return {boolean}
   */
  validate = () => {
    let valid = true
    const {name, description, file} = this.props.form

    if (name === '') {
      this.props.updateFormError('name', 'Обязательное поле')
      valid = false
    }

    if (description === '') {
      this.props.updateFormError('description', 'Обязательное поле')
      valid = false
    }

    if (file === null) {
      this.props.updateFormError('file', 'Обязательное поле')
      valid = false
    }

    // todo проверка размера файла, расширения

    return valid
  }

  submit = (e) => {
    e.preventDefault()

    if (this.validate()) {

      this.props.createGood({...this.props.form})

    // todo submit
    }
  }

  /**
   * Обработчик изменения изображения
   * @param e
   */
  fileChange = (e) => {
    this.props.updateFormValue('image', e.target.files[0])
    this.props.skipFormError('image')
  }

  /**
   * Обработчик изменения input полей
   * @param e
   */
  inputChange = (e) => {
    const {name, value} = e.target

    this.props.updateFormValue(name, value)
    this.props.skipFormError(name)
  }

  render () {
    const {form, errors} = this.props

    return (
      <div className={'card section'}>

        <form onSubmit={this.submit}>
          <div className="field">
            <div className={cn('file', 'has-name', {'is-danger': errors.image})}>
              <label className="file-label">
                <input
                  onChange={this.fileChange}
                  className={'file-input'}
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
    image: PropTypes.object
  }).isRequired,

  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,

  updateFormValue: PropTypes.func.isRequired,
  updateFormError: PropTypes.func.isRequired,
  skipFormError: PropTypes.func.isRequired,
  createGood: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  form: state.admin.goodsReducer.form,
  errors: state.admin.goodsReducer.errors
})

const mapDispatchToProps = {
  updateFormValue,
  updateFormError,
  skipFormError,
  createGood
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGoodForm)
