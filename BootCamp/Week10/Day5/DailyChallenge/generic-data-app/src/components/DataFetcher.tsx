// src/components/DataFetcher.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe } from '../features/dataSlice';
import { AppDispatch } from '../app/store';

const DataFetcher: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { data, status, error } = useSelector((state: any) => state.data);

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data?.recipes.map((recipe: any, index: number) => (
        <div key={index}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetcher;
