import React, { useEffect } from 'react';
import { useGeneralStore } from '../stores/generalStore';
import { useUserStore } from '../stores/userStore';

interface Props {
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<Props> = ({ children }) => {
  const userId = useUserStore((state) => state.id);
  const toggleLoginModal = useGeneralStore((state) => state.toggleLoginModal);

  useEffect(() => {
    if (!userId) toggleLoginModal();
  }, [userId, toggleLoginModal]);

  if (userId) return children;

  return <>Protected</>;
};

export default ProtectedRoutes;
