import { Select } from '@mantine/core';
import type { NextPage } from 'next';
import Layout from 'src/components/layout';
import { Button } from 'src/lib/mantine/Button';
import { useMediaQuery } from 'src/lib/mantine/useMediaQuery';
import { useViewportSize } from 'src/lib/mantine/useViewportSize';

const handleClick = () => {
  console.log('Hello!');
};

const Demo: NextPage = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery('xs');
  const largerThanSm = useMediaQuery('sm');
  const largerThanMd = useMediaQuery('md');
  const largerThanLg = useMediaQuery('lg');
  const largerThanXl = useMediaQuery('xl');

  return (
    <Layout title='demo'>
      <div className='p-20'>
        <div className='bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200'>
          <div>{`width: ${width}`}</div>
          <div>{`largerThanXs: ${largerThanXs}`}</div>
          <div>{`largerThanSm: ${largerThanSm}`}</div>
          <div>{`largerThanMd: ${largerThanMd}`}</div>
          <div>{`largerThanLg: ${largerThanLg}`}</div>
          <div>{`largerThanXl: ${largerThanXl}`}</div>
        </div>
        {largerThanXs ? (
          <Button dent onClick={handleClick} className='mt-4 block'>
            Click me!
          </Button>
        ) : null}
        <Button onClick={handleClick} className='mt-4 block'>
          Click me!
        </Button>
        <Select
          label='Your favorite framework/library'
          placeholder='Pick one'
          className='mt-10'
          classNames={{ input: 'bg-red-400' }}
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
          ]}
        />
      </div>
    </Layout>
  );
};

export default Demo;
