const formReducer = (state, action) => {
  return {
    ...state,
    [action.type]: action.value,
  };
};

export default formReducer;
