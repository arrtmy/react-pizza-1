import React from 'react';
const Categories = ({categoryId, onClickCategory}) => {
  console.log(categoryId)
  
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острая', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={categoryId === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
