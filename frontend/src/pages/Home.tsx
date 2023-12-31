import { Flex } from '@mantine/core';
import React from 'react';
import {
  AddChatroom,
  AuthOverlay,
  JoinRoomOrChatwindow,
  ProfileSetting,
  ProtectedRoutes,
  RoomList,
  Sidebar,
} from '../components';
import { MainLayout } from '../layouts';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <>
        <AuthOverlay />
        <ProfileSetting />
        <Sidebar />
        <ProtectedRoutes>
          <AddChatroom />
          <Flex direction={{ base: 'column', md: 'row' }}>
            <RoomList />
            <JoinRoomOrChatwindow />
          </Flex>
        </ProtectedRoutes>
      </>
    </MainLayout>
  );
};

export default Home;
