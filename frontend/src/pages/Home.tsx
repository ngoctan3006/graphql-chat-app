import React from 'react';
import { AuthOverlay, ProfileSetting, Sidebar } from '../components';
import { MainLayout } from '../layouts';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <>
        <AuthOverlay />
        <ProfileSetting />
        <Sidebar />
        HOME PAGE
      </>
    </MainLayout>
  );
};

export default Home;
