import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const statusCheck = useSelector((state) => state.Categories);
  const dispatch = useDispatch();

  const statusChecker = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={statusChecker}>Check status</button>
      <h1>{statusCheck }</h1>
    </div>
  );
}

export default Categories;
