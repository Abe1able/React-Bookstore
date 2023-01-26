import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.categories);

  const showStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={showStatus}>Check Status</button>
      <h4>{currentStatus}</h4>
    </div>
  );
};

export default Categories;
