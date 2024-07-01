import { useState } from 'react';

export const useModal = (initState=false) => {
  const [isOpen, setIsOpen] = useState(initState);

  const toggleModal = () => setIsOpen(!isOpen);

  const modalOff = () => setIsOpen(false)

  const modalOn = () => setIsOpen(true)

  const modalStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 12,
    background: 'white',
    border: '1px solid #ccc',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const overlayStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 11,
  };

  return {
    isOpen,
    toggleModal,
    modalStyles,
    overlayStyles,
    modalOff,
    modalOn
  };
};
