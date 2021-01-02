export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const LOAD_USER = 'LOAD_USER';
export const TOGGLE_AUTH_LOADING = 'TOGGLE_AUTH_LOADING';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  name: null,
  email: null,
  userId: null,
  token: '',
  role: null,
  createdAt: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
    case REGISTER:
    case LOAD_USER:
      return {
        ...state,
        ...payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    case TOGGLE_AUTH_LOADING:
      const currentIsLoading = state.isLoading;
      return {
        ...state,
        isLoading: !currentIsLoading,
      };
    default:
      return state;
  }
};
