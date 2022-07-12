import React, { useEffect, useState } from 'react';
import { createStyles, Container, UnstyledButton, Group, Text, Menu, Tabs } from '@mantine/core';
import { Logout, Settings, ChevronDown } from 'tabler-icons-react';
import { NextPage } from 'next';
import classnames, { borderRadius, padding, textColor } from 'tailwindcss-classnames';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  userActive: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
  },

  tabsList: {
    borderBottom: '0 !important',
    width: 1000,
  },

  tabControl: {
    fontWeight: 500,
    height: 38,
    color: `${theme.white} !important`,

    '&:hover': {
      backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
    },
  },

  tabControlActive: {
    color: `${theme.colorScheme === 'dark' ? theme.white : theme.black} !important`,
    borderColor: `${theme.colors[theme.primaryColor][6]} !important`,
  },
}));

const tabs = ['マイページ', '職務経歴書', 'メッセージ', '求人検索', 'ヘッドハンター検索', '公募・特集'];
const paths = [
  { id: 0, path: '' },
  { id: 1, path: 'career' },
  { id: 2, path: 'message' },
  { id: 3, path: 'offer' },
  { id: 4, path: 'headHunter' },
  { id: 5, path: 'demo' },
];
const userName = 'userA';

export const Header: NextPage = () => {
  const { classes, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => <Tabs.Tab label={tab} key={tab} />);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const path = router.pathname.split('/');
    const active = paths.find((p) => p.path === path[1]);
    setActiveTab(active!.id);
  }, []);

  const onChangeTab = (active: number) => {
    setActiveTab(active);

    const path = paths.find((p) => p.id === active);
    router.push(`/${path!.path}`);
    console.log('active', active);
  };

  return (
    <>
      <Container className='mx-12 my-2'>
        <Group position='apart'>
          <Text className='text-3xl'>EDOREACH</Text>

          <Menu
            size={260}
            placement='end'
            transition='pop-top-right'
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            control={
              <UnstyledButton
                // className={cx(classes.user, {
                //   [classes.userActive]: userMenuOpened,
                // })}
                className={classnames(textColor('hover:text-blue-400'), padding('p-2'), borderRadius('rounded-sm'), {
                  ['text-blue-400']: userMenuOpened,
                })}
              >
                <Group spacing={7}>
                  <Text weight={500} size='xl' sx={{ lineHeight: 1 }} mr={3}>
                    {userName}
                  </Text>
                  <ChevronDown size={20} />
                </Group>
              </UnstyledButton>
            }
          >
            <Menu.Item icon={<Settings size={14} />}>Account settings</Menu.Item>
            <Menu.Item icon={<Logout size={14} />}>Logout</Menu.Item>
          </Menu>
        </Group>
      </Container>
      <Container fluid className='bg-red-800 p-2'>
        <Tabs
          active={activeTab}
          grow
          position='center'
          variant='outline'
          className='mx-28'
          classNames={{
            tabsListWrapper: classes.tabsList,
            tabControl: classes.tabControl,
            tabActive: classes.tabControlActive,
          }}
          // classNames={cx(classes.tabsList, classes.tabControl, { [classes.tabControlActive]: activeTab })}
          onTabChange={onChangeTab}
        >
          {items}
        </Tabs>
      </Container>
    </>
  );
};
