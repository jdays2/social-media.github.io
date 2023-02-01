import { usersAPI } from "../DAL/api";
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  Id: null,
  email: null,
  login: null,
  isLogin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isLogin: true,
      };

    default:
      return state;
  }
};

export const setUserDataAC = (id, login, email) => {
  return {
    type: SET_USER_DATA,
    data: {
      id,
      login,
      email,
    },
  };
};

export const getAuthTC = () => {
  return (dispatch) => {
    usersAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setUserDataAC(id, login, email));
      }
    });
  };
};

export default authReducer;
