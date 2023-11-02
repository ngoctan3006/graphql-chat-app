import { Modal } from '@mantine/core';
import React, { useState } from 'react';
import { Login, Register } from '.';
import { useGeneralStore } from '../stores';

const AuthOverlay: React.FC = () => {
  const isLoginModalOpen = useGeneralStore((state) => state.isLoginModalOpen);
  const toggleLoginModal = useGeneralStore((state) => state.toggleLoginModal);

  const [isRegister, setIsRegister] = useState(true);
  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Modal centered opened={isLoginModalOpen} onClose={toggleLoginModal}>
      {isRegister ? (
        <Register toggleForm={toggleForm} />
      ) : (
        <Login toggleForm={toggleForm} />
      )}
    </Modal>
  );
};

export default AuthOverlay;
