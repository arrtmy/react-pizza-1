import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://66a1c0fa967c89168f1d8196.mockapi.io/pizzas/` + id,
        );
        setPizza(data);
      } catch {
        alert('error');
        navigate('/');
      }
    }
    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return 'Загрузка ...';
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h2>{pizza.price}</h2>
      <h2>Информация о пицце</h2>
      <Link to="/"><button className="button button--outline button--add">
        <span>Назад</span>
      </button></Link>
      
    </div>
  );
};

export default FullPizza;
