import { React } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Мексиканская" price={500} />
            <PizzaBlock title="Пепперони" price={350} />
            <PizzaBlock title="Ветчина и грибы" price={400} />
            <PizzaBlock title="Цезарь пицца" price={550} />
            <PizzaBlock title="4 сыра" price={600} />
            <PizzaBlock title="Грибная" price={400} />
            <PizzaBlock title="Мясная" price={700} />
            <PizzaBlock title="Гавайская" price={700} />
            <PizzaBlock title="Маргарита" price={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
