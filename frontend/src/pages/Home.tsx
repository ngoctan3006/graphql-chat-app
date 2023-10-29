import React from 'react';
import AuthOverlay from '../components/AuthOverlay';
import Sidebar from '../components/Sidebar';
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
