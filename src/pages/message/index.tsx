import { Center } from '@mantine/core';
import type { NextPage } from 'next';

import React from 'react';
import Layout from 'src/components/layout';

const Message: NextPage = () => {
  return (
    <Layout title='message'>
      <Center>メッセージ</Center>
    </Layout>
  );
};

export default Message;
