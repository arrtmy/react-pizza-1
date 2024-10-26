import React, { FC, memo } from 'react';

type CategoriesProps = {
  categoryId: number;
  onClickCategory: (index: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острая', 'Закрытые'];

const Categories: FC<CategoriesProps> = memo(({ categoryId, onClickCategory }) => {

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={categoryId === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
})

export default Categories;
