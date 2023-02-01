import { usersAPI } from "../DAL/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  profile: {},
  pageSize: 4,
  totalUserCount: 30, //Беру из головы, вместо api, потому как там totalUserCount > 22k (T_T)
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_USER_PROFILE:
      return { ...state, profile: action.userProfile };
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setToggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const setUserProfileAC = (userProfile) => {
  return {
    type: SET_USER_PROFILE,
    userProfile,
  };
};

export const setToggleFollowingInProgressAC = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId,
  };
};

export const getUsersTC = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(setCurrentPageAC(currentPage));
    dispatch(setToggleIsFetchingAC(true));
    usersAPI.getUsers(pageSize, currentPage).then((data) => {
      dispatch(setToggleIsFetchingAC(false));
      dispatch(setUsersAC(data.items));
    });
  };
};

export const unfollowTC = (userId) => {
  return (dispatch) => {
    dispatch(setToggleFollowingInProgressAC(true, userId));
    usersAPI.unfollowUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowAC(userId));
      }
      dispatch(setToggleFollowingInProgressAC(false, userId));
    });
  };
};

export const followTC = (userId) => {
  return (dispatch) => {
    dispatch(setToggleFollowingInProgressAC(true, userId));
    usersAPI.followUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followAC(userId));
      }
      dispatch(setToggleFollowingInProgressAC(false, userId));
    });
  };
};

export const getProfileTC = (id) => {
  return (dispatch) => {
    usersAPI.getProfile(id).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};

export default usersPageReducer;
