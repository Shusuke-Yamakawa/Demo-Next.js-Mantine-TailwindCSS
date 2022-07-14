import { Space, Title } from '@mantine/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { CareerHead } from 'src/components/career/careerHead';
import { CareerList } from 'src/components/career/careerList';
import Layout from 'src/components/layout';
import { Button } from 'src/lib/mantine/Button';

const Career: NextPage = () => {
  const router = useRouter();
  const basicInfoEdit = () => {
    router.push('career/basicInfoEdit');
  };
  return (
    <Layout title='career'>
      <div className='container py-10 px-60 mx-auto'>
        <CareerHead />
        <div className='flex gap-4 justify-center mt-2'>
          <CareerList />
          <section className='p-4 w-2/3 border-2 border-orange-200 border-solid'>
            <Title order={2}>基本情報</Title>
            <Space h='md' />
            <table>
              <tbody>
                <tr>
                  <th>氏名</th>
                  <td>試験 太郎（シケン タロウ）</td>
                </tr>
                <tr>
                  <th>性別</th>
                  <td>男性</td>
                  <th>生年月日</th>
                  <td>1900年1月1日</td>
                </tr>
              </tbody>
            </table>
            <Space h='md' />
            <Button onClick={basicInfoEdit} className='text-black bg-slate-200'>
              編集
            </Button>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Career;
