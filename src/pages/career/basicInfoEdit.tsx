import { LoadingOverlay, Radio, RadioGroup, Select, Space, TextInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';
import { CareerHead } from 'src/components/career/careerHead';
import { CareerList } from 'src/components/career/careerList';
import Layout from 'src/components/layout';
import { Button } from 'src/lib/mantine/Button';
import { z } from 'zod';

const address = [
  { value: '', label: '選択してください' },
  { value: 'hokkaido', label: '北海道' },
  { value: 'tokyo', label: '東京' },
  { value: 'osaka', label: '大阪' },
  { value: 'hiroshima', label: '広島' },
];

const schema = z.object({
  nameFirst: z.string().min(2, { message: '名前を入力してください' }),
  nameSecond: z.string().min(2, { message: 'NameSecond should have at least 2 letters' }),
  nameFirstKana: z.string().min(2, { message: 'NameFirstKana should have at least 2 letters' }),
  nameSecondKana: z.string().min(2, { message: 'NameSecondKana should have at least 2 letters' }),
  address: z.string().min(1, { message: '住所を選択してください' }),
});

type SchemaType = z.infer<typeof schema>;

const BasicInfoEdit: NextPage = () => {
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      nameFirst: '試験',
      nameSecond: '太郎',
      nameFirstKana: 'シケン',
      nameSecondKana: 'タロウ',
      gender: 'female',
      address: 'tokyo',
    },
  });

  const submit = (values: SchemaType, e: FormEvent<Element>) => {
    e.preventDefault();
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      return setLoading(false);
    }, 2000);
  };

  useMemo(() => {
    return form.validate().hasErrors ? 'error' : null;
  }, [form.values]);

  const router = useRouter();
  const cancel = () => {
    router.push('/career');
  };

  const [isLoading, setLoading] = useState(false);

  return (
    <Layout title='career'>
      <div className='container py-10 px-60 mx-auto'>
        <CareerHead />
        <div className='flex gap-4 justify-center mt-2'>
          <CareerList />
          <section className='p-4 w-2/3 border-2 border-orange-200 border-solid'>
            <LoadingOverlay visible={isLoading} transitionDuration={5} />
            <Title order={2}>基本情報（編集中）</Title>
            <Space h='md' />
            <form
              onSubmit={form.onSubmit((values, e) => {
                return submit(values, e);
              })}
            >
              <div className='flex gap-3'>
                <label>名前</label>
                <TextInput
                  {...form.getInputProps('nameFirst')}
                  className='ml-16'
                  classNames={{
                    error: 'text-blue-400 text-xs',
                  }}
                />
                <TextInput {...form.getInputProps('nameSecond')} />
              </div>

              <div className='flex gap-3 mt-2'>
                <TextInput {...form.getInputProps('nameFirstKana')} label='名前（カナ）' className='flex gap-6' />
                <TextInput {...form.getInputProps('nameSecondKana')} />
              </div>
              <div className='flex gap-3 mt-2'>
                <label>性別</label>
                <RadioGroup className='ml-16' {...form.getInputProps('gender')}>
                  <Radio value='male' label='男性' />
                  <Radio value='female' label='女性' />
                  <Radio value='other' label='解答なし' />
                </RadioGroup>
              </div>
              <div className='flex gap-3 mt-2'>
                <label>現住所</label>
                <Select
                  {...form.getInputProps('address')}
                  className='ml-12'
                  data={address}
                  // onChange={(value) => {
                  //   form.setFieldValue('address', value!);
                  // }}
                />
              </div>
              <Space h='md' />
              <div className='flex gap-2'>
                <Button type='submit' className='text-black bg-amber-600'>
                  保存
                </Button>
                <Button type='button' onClick={cancel} className='text-black bg-gray-200'>
                  キャンセル
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default BasicInfoEdit;
