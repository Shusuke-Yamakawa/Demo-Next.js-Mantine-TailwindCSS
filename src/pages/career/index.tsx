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
      <div className='container mx-auto py-10 px-60'>
        <CareerHead />
        <div className='mt-2 flex justify-center gap-4'>
          <CareerList />
          <section className='border-1 w-2/3 border-solid border-orange-200 p-4'>
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
            <Button onClick={basicInfoEdit} className='bg-slate-200 text-black'>
              編集
            </Button>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Career;
