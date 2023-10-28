import React from 'react';
import ProtectedRoutes from '../components/ProtectedRoutes';
import Sidebar from '../components/Sidebar';
import MainLayout from '../layouts/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <ProtectedRoutes>
        <Sidebar />
        HOME PAGE
      </ProtectedRoutes>
    </MainLayout>
  );
};

export default Home;
