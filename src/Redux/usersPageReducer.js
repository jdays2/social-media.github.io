const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: "Dmitry",
      status: "I am a boss",
      location: { city: "Brest", country: "Belarus" },
    },
    {
      id: 2,
      followed: true,
      ffullName: "Micky",
      status: "I am a boss",
      location: { city: "Zabolottye", country: "Urkain" },
    },
    {
      id: 3,
      followed: true,
      fullName: "Kizya",
      status: "I am a boss",
      location: { city: "Kobrin", country: "Belarus" },
    },
    {
      id: 4,
      followed: false,
      fullName: "Pedro",
      status: "I am a boss",
      location: { city: "Brest", country: "Belarus" },
    },
    {
      id: 5,
      followed: true,
      fullName: "TheLastOne",
      status: "im lastest laster",
      location: { city: "Derevnya", country: "Belarus" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
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
      return { ...state, users: [...state.users, ...action.users] };
  }
};

export const followAC = (userId) => {
  {
    type: FOLLOW;
    userId;
  }
};

export const unfollowAC = (userId) => {
  {
    type: UNFOLLOW;
    userId;
  }
};

export const setUsersAC = (users) => {
  {
    type: SET_USERS, users;
  }
};
