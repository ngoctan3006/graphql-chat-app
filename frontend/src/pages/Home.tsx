import React from 'react';
import { AuthOverlay, ProfileSetting, ProtectedRoutes, RoomList, Sidebar } from '../components';
import { MainLayout } from '../layouts';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <>
        <AuthOverlay />
        <ProfileSetting />
        <Sidebar />
        <ProtectedRoutes>
          <RoomList />
        </ProtectedRoutes>
      </>
    </MainLayout>
  );
};

export default Home;
