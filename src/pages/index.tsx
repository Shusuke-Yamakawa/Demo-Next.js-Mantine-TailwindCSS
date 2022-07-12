import { Badge, Container, Grid, Popover, Table, Text, Title } from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import Layout from 'src/components/layout';
import { Button } from 'src/lib/mantine/Button';

const elements = [
  { sender: 'xxxxxxxxx会社', title: 'どうしてもお会いしたい', date: '2022/05/03' },
  { sender: 'aaaaaaaaa会社', title: 'xxxxxxxxxxxxxxxxxxx', date: '2022/05/02' },
  { sender: 'bbbbbbbbb会社', title: 'wwwwwwwwwwwwwwwwwww', date: '2022/05/01' },
  { sender: 'ccccccccc会社', title: 'wwwwwwwwwwwwwwwwwww', date: '2022/04/23' },
  { sender: 'ddddddddd会社', title: 'wwwwwwwwwwwwwwwwwww', date: '2022/04/21' },
];

const rows = elements.map((element) => {
  return (
    <tr key={element.sender}>
      <td>{element.sender}</td>
      <td>{element.title}</td>
      <td>{element.date}</td>
    </tr>
  );
});

const HeaderTabsColored: NextPage = () => {
  const [isOpened, setOpened] = useState(false);
  return (
    <Layout title='マイページ'>
      <Container className='mt-12 ml-32'>
        <Grid columns={25}>
          <Grid.Col span={18} className='mr-6 '>
            <Title order={2} className='p-2 border-2 border-orange-200 border-solid'>
              新着メッセージ
            </Title>
            <div className='h-96 border-2 border-t-0 border-orange-200 border-solid'>
              <Grid className={'p-6'}>
                <Text size='xs' className={'p-1'}>
                  プレミアムステージの無料体験に申し込むと、1週間は無料でスカウトの閲覧・返信ができます
                </Text>
                <Button
                  compact
                  onClick={() => {
                    return console.log('button');
                  }}
                  className='ml-6'
                >
                  無料体験
                </Button>
                <Table className='mt-4'>
                  <thead>
                    <tr>
                      <th>差出人</th>
                      <th>件名</th>
                      <th>受信日時</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </Table>
              </Grid>
            </div>
          </Grid.Col>
          <Grid.Col span={6} className='bg-blue-300'>
            <div className='flex gap-2'>
              <h3>プレミアムチケット</h3>
              <Popover
                opened={isOpened}
                onClose={() => {
                  return setOpened(false);
                }}
                position='right'
                placement='center'
                trapFocus={false}
                closeOnEscape={false}
                transition='pop-top-left'
                width={300}
                styles={{ body: { pointerEvents: 'none' } }}
                target={
                  <Badge
                    className='mt-6 w-8 h-5 bg-slate-200'
                    size='xs'
                    radius='xs'
                    onMouseEnter={() => {
                      return setOpened(true);
                    }}
                    onMouseLeave={() => {
                      return setOpened(false);
                    }}
                  >
                    <Image src='/questionMarkIcon.svg' alt='question' width={20} height={20} />
                  </Badge>
                }
              >
                <div style={{ display: 'flex' }}>
                  <Text size='sm'>プレミアムチケットをご利用いただくとプレミアムプランが適用されます。</Text>
                </div>
              </Popover>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  );
};

export default HeaderTabsColored;
