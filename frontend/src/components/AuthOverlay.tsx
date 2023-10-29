import { Modal } from '@mantine/core';
import React from 'react';
import { useGeneralStore } from '../stores';

const AuthOverlay: React.FC = () => {
  const isLoginModalOpen = useGeneralStore((state) => state.isLoginModalOpen);
  const toggleLoginModal = useGeneralStore((state) => state.toggleLoginModal);

  return (
    <Modal centered opened={isLoginModalOpen} onClose={toggleLoginModal}>
      AuthOverlay
    </Modal>
  );
};

export default AuthOverlay;
