import React from 'react';
import { AuthOverlay, Sidebar } from '../components';
import { MainLayout } from '../layouts';

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
