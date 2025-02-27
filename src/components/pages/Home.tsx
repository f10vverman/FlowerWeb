import React from 'react';
import Categories from '../Categories.tsx';
import Sort from '../Sort.tsx';
import FlowerBlock from '../FlowerBlock.tsx';
import Skeleton from '../Skeleton.jsx';

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://6790a6e7af8442fd73771b53.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все цветы</h2>
      <div className="content__items">{isLoading ? [...new Array(8)].map(() => <Skeleton />) : items.map((obj) => <FlowerBlock key={obj.id} {...obj} />)}</div>
    </>
  );
}
  

export default Home;
