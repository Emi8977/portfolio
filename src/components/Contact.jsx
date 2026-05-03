import { useEffect, useState } from 'react'

export default function Contact({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [dialogState, setDialogState] = useState('form')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isOpen) {
      setDialogState('form')
      setFormData({ name: '', email: '', message: '' })
    }
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      const response = await fetch('https://formspree.io/f/xlgzdyyj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      })
      if (response.ok) {
        setDialogState('success')
      } else {
        throw new Error('Error al enviar')
      }
    } catch (err) {
      setError('Error al enviar el mensaje. Inténtalo de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setDialogState('cancelled')
  }

  const handleClose = () => {
    setDialogState('form')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {dialogState === 'form' && (
          <>
            <div className="modal-header">
              <p className="section-tag">// CONTACTO</p>
              <h2 className="section-title">Envía tu Mensaje</h2>
              <p className="contact-text">
                Hablame sobre tu proyecto y te contacto lo antes posible.
              </p>
            </div>
            <form className="contact-form" action="https://formspree.io/f/xlgzdyyj" method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Juan Pérez"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="hola@tuempresa.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Escribe los detalles de tu proyecto aquí..."
                ></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-cancel" onClick={handleCancel}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
            {error && <p className="error-message">{error}</p>}
          </>
        )}

        {dialogState === 'success' && (
          <div className="modal-result">
            <h2 className="modal-result-title success">Formulario Enviado con éxito</h2>
            <p>¡Gracias! Tu mensaje ha sido enviado correctamente.</p>
            <button type="button" className="btn btn-back" onClick={handleClose}>
              Volver al inicio
            </button>
          </div>
        )}

        {dialogState === 'cancelled' && (
          <div className="modal-result">
            <h2 className="modal-result-title cancelled">Formulario Cancelado</h2>
            <p>No hay problema, puedes volver cuando quieras. Hasta pronto.</p>
            <button type="button" className="btn btn-back" onClick={handleClose}>
              Volver al inicio
            </button>
          </div>
        )}
      </div>
    </div>
  )
}