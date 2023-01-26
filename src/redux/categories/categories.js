const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case CHECK_STATUS:
      return 'Under Construction';

    default:
      return state;
  }
};

export default categoriesReducer;
