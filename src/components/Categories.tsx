import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['Все', 'Букеты', 'Подарочные наборы', 'Поштучно', 'Корзины с цветами', 'Настольные композиции'];
  const onClickCategory = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={activeIndex == i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
