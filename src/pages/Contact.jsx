import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const { t } = useTranslation()

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.errors.nameRequired')
    } else if (formData.name.length < 2) {
      newErrors.name = t('contact.errors.nameLength')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = t('contact.errors.emailRequired')
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('contact.errors.emailInvalid')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.messageRequired')
    } else if (formData.message.length < 10) {
      newErrors.message = t('contact.errors.messageLength')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          })
        })

        const data = await response.json()
        
        if (data.success) {
          setStatus(t('contact.success'))
          setFormData({
            name: '',
            email: '',
            subject: 'general',
            message: ''
          })
          setErrors({})
        } else {
          setStatus(t('contact.error'))
        }
      } catch (error) {
        setStatus(t('contact.error'))
        console.error('Submit error:', error)
      }
    }
  }

  return (
    <div className="contact-container">
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
          <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
            <label htmlFor="name">{t('contact.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="validation-message error">{errors.name}</span>}
          </div>

          <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">{t('contact.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="validation-message error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">{t('contact.subject')}</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="general">{t('contact.options.general')}</option>
              <option value="support">{t('contact.options.support')}</option>
              <option value="feedback">{t('contact.options.feedback')}</option>
            </select>
          </div>

          <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            {errors.message && <span className="validation-message error">{errors.message}</span>}
          </div>

          {status && (
            <div className={`message ${status.includes('success') ? 'success' : 'error'}`}>
              {status}
            </div>
          )}

          <button type="submit" className="submit-button">
            {t('contact.send')}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact