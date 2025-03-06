import React from 'react';
import Categories from '../Categories.tsx';
import Sort from '../Sort.tsx';
import FlowerBlock from '../FlowerBlock.tsx';
import Skeleton from '../Skeleton.jsx';

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoriesId, setCategoiresId] = React.useState(1); //categories.tsx

  const [sortType, setSortType] = React.useState({
    name: 'популярность',
    sort: 'rating',
  }); //sort.tsx

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.sort.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sort.replace('-', '');
    const categories = categoriesId > 0 ? `categories=${categoriesId}` : '';
    fetch(`https://6790a6e7af8442fd73771b53.mockapi.io/items?${categories}&sortBy=${sortBy}&order=${order}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoriesId, sortType]);
  return (
    <>
      <div className="content__top">
        <Categories value={categoriesId} onClickCategory={(i) => setCategoiresId(i)} />
        <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все цветы</h2>
      <div className="content__items">{isLoading ? [...new Array(8)].map(() => <Skeleton />) : items.map((obj) => <FlowerBlock key={obj.id} {...obj} />)}</div>
    </>
  );
};

export default Home;
