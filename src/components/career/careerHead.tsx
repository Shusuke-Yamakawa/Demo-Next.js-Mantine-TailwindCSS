import { Anchor, Breadcrumbs, Button } from '@mantine/core';
import Link from 'next/link';
import type { FC } from 'react';

const pdfButton = [
  { key: 'resume', name: '履歴書PDF' },
  { key: 'career', name: '職務経歴書PDF' },
  { key: 'resumeEng', name: '英文レジュメPDF' },
];

export const CareerHead: FC = () => {
  return (
    <>
      <Breadcrumbs separator='>' className='mb-6 ml-12'>
        <Link href='/'>
          <Anchor>転職サイト ビズリーチ</Anchor>
        </Link>
        <div>
          <div className='leading-relaxed'>職務経歴書</div>
        </div>
      </Breadcrumbs>
      <div className='flex gap-2 justify-end'>
        {pdfButton.map((item) => {
          return (
            <Button
              key={item.key}
              compact
              color='gray'
              onClick={() => {
                return console.log(item.name);
              }}
            >
              {item.name}
            </Button>
          );
        })}
      </div>
    </>
  );
};
