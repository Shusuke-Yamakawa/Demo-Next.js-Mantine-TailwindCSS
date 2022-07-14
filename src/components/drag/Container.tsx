import update from 'immutability-helper';
import type { FC } from 'react';
import { useCallback, useState } from 'react';

import { Card } from './Card';

export type Item = {
  id: number;
  text: string;
};

export type ContainerState = {
  cards: Item[];
};

export const Container: FC = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'フロントエンドエンジニア',
      },
      {
        id: 2,
        text: 'バックエンドエンジニア',
      },
      {
        id: 3,
        text: 'プロジェクトリーダー',
      },
      {
        id: 4,
        text: 'インフラエンジニア',
      },
    ]);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        }),
      );
    }, []);

    const renderCard = useCallback((card: { id: number; text: string }, index: number) => {
      return <Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard} />;
    }, []);

    return (
      <>
        <div className='w-1/2'>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};
