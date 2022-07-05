import React from 'react'

const AlertComponent = ({message, variant = 'primary'}) => {
  return (
    <div className={`alert alert-${variant}`} role="alert">
        {message}
    </div>
  )
}

export default AlertComponent