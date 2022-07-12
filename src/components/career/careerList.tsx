import Link from 'next/link';
import type { FC } from 'react';

export const CareerList: FC = () => {
  return (
    <section className='w-48 h-80 bg-gray-50 border-2 border-orange-200 border-solid'>
      <ul className='p-0 m-0 list-none'>
        <Link href='/career'>
          <li className='pl-4 my-2 list-inside hover:bg-blue-400 border-0 border-b border-orange-200 border-solid'>
            基本情報
          </li>
        </Link>
        <Link href='/career/desiredCondition'>
          <li className='pl-4 my-2 list-inside hover:bg-blue-400 border-0 border-b border-orange-200 border-solid'>
            希望条件
          </li>
        </Link>
        <li className='pl-4 my-2 list-inside border-0 border-b border-orange-200 border-solid'>職務要約・スキル</li>
        <li className='pl-4 my-2 list-inside border-0 border-b border-orange-200 border-solid'>職務経歴</li>
        <li className='pl-4 my-2 list-inside border-0 border-b border-orange-200 border-solid'>学歴</li>
        <li className='pl-4 my-2'>表彰</li>
      </ul>
    </section>
  );
};
