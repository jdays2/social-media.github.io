export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const ADD_POST = "ADD-POST";

let initialState = {
  postsData: [
    { id: 1, message: "Hi! Thats my 1st post", likeCount: 12 },
    { id: 2, message: "Hi! Thats my 2st post", likeCount: 1 },
    { id: 3, message: "Hi! Thats my 3st post", likeCount: 2 },
    { id: 4, message: "Hi! Thats my 4st post", likeCount: 112 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };

      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }

    default:
      let stateCopy = { ...state };
      return stateCopy;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
