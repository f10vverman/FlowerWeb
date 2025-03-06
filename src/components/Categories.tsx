import React from 'react';
type CategoriesProps = {
  value: number;
  onClickCategory: (index: number) => void;
};

function Categories({ value, onClickCategory }: CategoriesProps) {
  const categories = ['Все', 'Букеты', 'Подарочные наборы', 'Поштучно', 'Корзины с цветами', 'Настольные композиции'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoriesName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value == i ? 'active' : ''}>
            {categoriesName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
