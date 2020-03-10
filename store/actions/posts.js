import Post from '../../models/post';

export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const SET_POST = 'SET_POST';
export const fetchPosts = () => {
    return async (dispatch, getState) => {
        // any async code you want!
        const userId = getState().auth.userId;
        try {
            const response = await fetch(
                'https://rn-shopping-594ef.firebaseio.com/posts.json'
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            const loadedPosts = [];

            for (const key in resData) {
                loadedPosts.push(
                    new Post(
                        key,
                        resData[key].ownerId,
                        resData[key].title,
                        resData[key].img,
                        resData[key].description

                    )
                );
            }

            dispatch({
                type: SET_POST,
                posts: loadedPosts,
                userPosts: loadedPosts.filter(pot => pot.ownerId === userId)
            });
        } catch (err) {
            // send to custom analytics server
            throw err;
        }
    };
};
export const deletePost = postId => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const response = await fetch(
            `https://rn-shopping-594ef.firebaseio.com/posts/${postId}.json?auth=${token}`,
            {
                method: 'DELETE'
            }
        );
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        dispatch({ type: DELETE_POST, poid: postId });
    };

};
export const createPost = (title, description, img) => {
    return async (dispatch, getState) => {
        // any async code you want!
        const token = getState().auth.token;
        const userId = getState().auth.userId;
        const response = await fetch(
            `https://rn-shopping-594ef.firebaseio.com/posts.json?auth=${token}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    description,
                    img,
                    ownerId: userId
                })
            }
        );

        const resData = await response.json();

        dispatch({
            type: CREATE_POST,
            postData: {
                id: resData.name,
                title,
                description,
                img,
                ownerId: userId
            }
        });
    };
};

export const updatePost = (id, title, description, img) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        console.log(getState)
        const response = await fetch(
            `https://rn-shopping-594ef.firebaseio.com/posts/${id}.json?auth=${token}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    description,
                    img,

                })
            }
        );
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        dispatch({
            type: UPDATE_POST,
            pid: id,
            postData: {
                title,
                description,
                imageUrl
            }
        });
    };

};
