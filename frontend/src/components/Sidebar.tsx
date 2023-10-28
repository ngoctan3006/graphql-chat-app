import { useMutation } from '@apollo/client';
import { Center, Navbar, Stack, rem } from '@mantine/core';
import {
  IconBrandMessenger,
  IconBrandWechat,
  IconLogin,
  IconLogout,
  IconUser,
} from '@tabler/icons-react';
import React, { useState } from 'react';
import { LOGOUT_USER } from '../graphql/mutations/Logout';
import { useGeneralStore } from '../stores/generalStore';
import { useUserStore } from '../stores/userStore';
import NavbarLink from './NavLink';

const mockdata = [{ icon: IconBrandWechat, label: 'Chatrooms' }];

const Sidebar: React.FC = () => {
  const toggleProfileSettingsModal = useGeneralStore((state) => state.toggleProfileSettingsModal);
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  const userId = useUserStore((state) => state.id);
  const user = useUserStore((state) => state);
  const setUser = useUserStore((state) => state.setUser);

  const toggleLoginModal = useGeneralStore((state) => state.toggleLoginModal);
  const [logoutUser] = useMutation(LOGOUT_USER, {
    onCompleted: () => {
      toggleLoginModal();
    },
  });

  const handleLogout = async () => {
    await logoutUser();
    setUser({
      id: undefined as any,
      fullname: '',
      avatarUrl: null,
      email: '',
    });
  };

  return (
    <Navbar fixed zIndex={100} w={rem(100)} p='md'>
      <Center>
        <IconBrandMessenger type='mark' size={30} />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify='center' spacing={0}>
          {userId && links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify='center' spacing={0}>
          {userId && (
            <NavbarLink
              icon={IconUser}
              label={'Profile(' + user.fullname + ')'}
              onClick={toggleProfileSettingsModal}
            />
          )}

          {userId ? (
            <NavbarLink icon={IconLogout} label='Logout' onClick={handleLogout} />
          ) : (
            <NavbarLink icon={IconLogin} label='Login' onClick={toggleLoginModal} />
          )}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
