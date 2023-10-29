import React from 'react';
import ProtectedRoutes from '../components/ProtectedRoutes';
import Sidebar from '../components/Sidebar';
import MainLayout from '../layouts/MainLayout';
import AuthOverlay from '../components/AuthOverlay';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <>
        <AuthOverlay />
        <Sidebar />
        HOME PAGE
      </>
    </MainLayout>
  );
};

export default Home;
