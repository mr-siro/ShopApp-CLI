import PRODUCTS from '../../data/dummy-data';
import {
    DELETE_POST,
    CREATE_POST,
    UPDATE_POST,
    SET_POST
} from '../actions/posts';
import Post from '../../models/post';

const initialState = {
    availablePosts: [],
    userPosts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:
            return {
                availablePosts: action.posts,
                userPosts: action.userPosts
            };
        case CREATE_POST:
            const newPost = new Post(
                action.postData.id,
                action.postData.ownerId,
                action.postData.title,
                action.postData.img,
                action.postData.description,

            );
            return {
                ...state,
                availablePosts: state.availablePosts.concat(newPost),
                userPosts: state.userPosts.concat(newPost)
            };
        case UPDATE_POST:
            const postIndex = state.userPosts.findIndex(
                pot => pot.id === action.poid
            );
            const updatedPost = new Post(
                action.poid,
                state.userPosts[postIndex].ownerId,
                action.postData.title,
                action.postData.img,
                action.postData.description,

            );
            const updatedUserPosts = [...state.userPosts];
            updatedUserPosts[postIndex] = updatedPost;
            const availablePostIndex = state.availablePosts.findIndex(
                pot => pot.id === action.poid
            );
            const updatedAvailablePosts = [...state.availablePosts];
            updatedAvailablePosts[availablePostIndex] = updatedPost;
            return {
                ...state,
                availablePosts: updatedAvailablePosts,
                userPosts: updatedUserPosts
            };
        case DELETE_POST:
            return {
                ...state,
                userPosts: state.userPosts.filter(
                    post => post.id !== action.poid
                ),
                availablePosts: state.availablePosts.filter(
                    post => post.id !== action.poid
                )
            };
    }
    return state;
};
