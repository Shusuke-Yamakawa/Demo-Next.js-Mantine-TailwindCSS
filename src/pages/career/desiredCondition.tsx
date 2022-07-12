import { Checkbox, Modal, Title, useMantineTheme } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import type { DraggableProvided, DroppableProvided, DropResult } from 'react-beautiful-dnd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { CareerHead } from 'src/components/career/careerHead';
import { CareerList } from 'src/components/career/careerList';
import Layout from 'src/components/layout';
import { Button } from 'src/lib/mantine/Button';

const items = [
  {
    id: '1',
    content: 'フロントエンドエンジニア',
  },
  {
    id: '2',
    content: 'バックエンドエンジニア',
  },
  {
    id: '3',
    content: 'プロジェクトリーダー',
  },
];

const initialCheckValues = [
  { label: 'フロントエンドエンジニア', checked: true, key: '1' },
  { label: 'バックエンドエンジニア', checked: true, key: '2' },
  { label: 'プロジェクトリーダー', checked: true, key: '3' },
  { label: 'プロジェクトマネージャー', checked: false, key: '4' },
];

const DesiredCondition: NextPage = () => {
  const router = useRouter();
  const cancel = () => {
    router.push('/career');
  };

  const [isOpened, setOpened] = useState(false);
  const [values, handlers] = useListState(initialCheckValues);

  const checkItems = values.map((value, index) => {
    return (
      <Checkbox
        mt='xs'
        ml={33}
        label={value.label}
        key={value.key}
        checked={value.checked}
        onChange={(event) => {
          return handlers.setItemProp(index, 'checked', event.currentTarget.checked);
        }}
      />
    );
  });

  const [state, setState] = useState(items);

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }

      const newState = [...state];
      // 移動前のデータを消し、移動先のindexに置き換える
      const [removed] = newState.splice(result.source.index, 1);
      newState.splice(result.destination.index, 0, removed);
      setState(newState);
    },
    [state],
  );

  const theme = useMantineTheme();

  return (
    <Layout title='career'>
      <div className='container py-10 px-60 mx-auto'>
        <CareerHead />
        <div className='flex gap-4 justify-center mt-2'>
          <CareerList />
          <section className='p-4 w-2/3 border-2 border-orange-200 border-solid'>
            <Title order={2}>希望条件</Title>
            <Title className='mt-2' order={3}>
              希望職種
            </Title>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId='items'>
                {(provided: DroppableProvided) => {
                  return (
                    <ul {...provided.droppableProps} ref={provided.innerRef} className='p-0 list-none'>
                      {state.map(({ id, content }, index) => {
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided: DraggableProvided) => {
                              return (
                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <div className='flex justify-between w-full h-12 rounded border-2 border-orange-200 border-solid'>
                                    <div className='p-2'>{content}</div>
                                    <button
                                      className='p-2 mt-2 h-3/4 rounded-full'
                                      onClick={() => {
                                        const newState = [...state];
                                        const deletedState = newState.filter((d) => {
                                          return d.id !== id;
                                        });
                                        setState(deletedState);
                                      }}
                                    >
                                      x
                                    </button>
                                  </div>
                                </li>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                      <Modal
                        size='lg'
                        opened={isOpened}
                        overlayColor={theme.colors.gray[2]}
                        overlayOpacity={0.55}
                        onClose={() => {
                          return setOpened(false);
                        }}
                        title='職種を選択してください'
                        classNames={{
                          header: 'bg-red-500 text-white pl-2',
                          modal: 'pt-0 pl-0 pr-2 border-4 border-solid',
                        }}
                      >
                        <div className='flex'>
                          <section className='mt-2 ml-2 w-48 h-80 bg-gray-50 border-2 border-orange-200 border-solid'>
                            <ul className=' p-0 m-0 list-none'>
                              <li className='pl-4 my-2 list-inside hover:bg-blue-400 border-0 border-b border-orange-200 border-solid'>
                                IT・ゲーム・デザイン
                              </li>
                              <li className='pl-4 my-2 list-inside hover:bg-blue-400 border-0 border-b border-orange-200 border-solid'>
                                コンサルタント
                              </li>
                              <li className='pl-4 my-2 list-inside border-0 border-b border-orange-200 border-solid'>
                                金融
                              </li>
                            </ul>
                          </section>
                          <section className='mt-2 w-96 h-80 bg-gray-50 border-2 border-orange-200 border-solid'>
                            <h4 className='m-2'>IT技術職</h4>
                            {checkItems}
                          </section>
                        </div>
                        <button
                          onClick={() => {
                            console.log('values:', values);
                            const checkedItems = values
                              .filter((value) => {
                                return value.checked;
                              })
                              .map((d) => {
                                return {
                                  id: d.key,
                                  content: d.label,
                                };
                              });
                            setState(checkedItems);
                            setOpened(false);
                          }}
                          className='flex justify-center m-auto mt-2'
                        >
                          決定
                        </button>
                      </Modal>
                      <button
                        className='mt-2'
                        onClick={() => {
                          setOpened(true);
                        }}
                      >
                        +希望職種を追加する
                      </button>
                    </ul>
                  );
                }}
              </Droppable>
            </DragDropContext>
            <Button type='button' onClick={cancel} className='text-black bg-gray-200'>
              キャンセル
            </Button>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default DesiredCondition;
