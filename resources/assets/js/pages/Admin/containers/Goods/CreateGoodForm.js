import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'
import { updateFormValue, updateFormError, skipFormError, uploadGoodsRequest, closeModalAction } from '../../actions/goodActions'
import { createRequestGood} from '../../helpers'

class CreateGoodForm extends React.Component {

  /**
   * Проверка полей формы
   * @return {boolean}
   */
  validate = () => {
    let valid = true
    const {name, description, image, category} = this.props.form

    if (name === '') {
      this.props.updateFormError('name', 'Обязательное поле')
      valid = false
    }

    if (description === '') {
      this.props.updateFormError('description', 'Обязательное поле')
      valid = false
    }

    if (image === null) {
      this.props.updateFormError('image', 'Обязательное поле')
      valid = false
    }

    if (category === '') {
      this.props.updateFormError('category', 'Обязательное поле')
      valid = false
    }

    return valid
  }

  /**
   * Оправка формы
   * @param e
   * @returns {Promise<void>}
   */
  submit = async (e) => {
    e.preventDefault()

    if (this.validate()) {
      try {
        const formData = new FormData()

        Object.keys(this.props.form).forEach((key) => {
          formData.append(key, this.props.form[key])
        })

        await createRequestGood(formData)

        this.props.closeModalAction()

        this.props.uploadGoodsRequest(this.props.currentPage)
      } catch (e) {
        const validateErrorStatus = 422
        if (e.status === validateErrorStatus) {
          Object.keys(e.data.errors).forEach((key) => {
            e.data.errors[key].forEach(err => {
              this.props.updateFormError(key, err)
            })
          })
        }
      }
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
    const {form, errors, categories} = this.props

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
                {form.image && <span className="file-name">
                  {form.image.name}
                </span>}
              </label>
            </div>
            <p className="help is-danger">{errors.image}</p>
          </div>

          <div className="field">
            <div className="control">
              <div className={cn('select', {'is-danger': errors.category})}>
                <select name={'category'} onChange={this.inputChange}>
                  <option value={''}>Выберите категорию...</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <p className="help is-danger">{errors.category}</p>
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
            <p className="help is-danger">{errors.name}</p>
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
            <p className="help is-danger">{errors.description}</p>
          </div>

          <input className="button is-success" type="submit" value="Создать"/>
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
  uploadGoodsRequest: PropTypes.func.isRequired,
  closeModalAction: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  const {form, errors, pagination, categories} = state.admin.goodsReducer
  return {
    form,
    errors,
    currentPage: pagination.currentPage,
    categories
  }
}

const mapDispatchToProps = {
  uploadGoodsRequest,
  closeModalAction,
  updateFormValue,
  updateFormError,
  skipFormError
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGoodForm)
