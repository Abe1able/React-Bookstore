import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categoryEl = useSelector((state) => state.Category);
  const dispatch = useDispatch();
  return (
    <div className="categoryEL">
      <button
        className="btnEL"
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status

      </button>
      <h2>{categoryEl}</h2>
    </div>
  );
};
export default Categories;
