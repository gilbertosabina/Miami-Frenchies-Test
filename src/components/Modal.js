import React, { useEffect } from 'react'

const Modal = ({open, handleOpen, handleClose}) => {

  useEffect(() => {
    if(window.innerHeight > window.innerWidth) {
      handleOpen();
    }
  }, [handleOpen])
  
  return (
      <>
        {open && (
            <div className="modal">
                <p>try to rotate your mobile for a better experience</p>
                <button onClick={() => handleClose()}>
                    close
                </button>
            </div>
        )}
      </>
  )
}

export default Modal