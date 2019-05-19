import jsonPlaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts = () => {
//     return async dispatch => {
//         const response = await jsonPlaceholder.get('/post')

//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         })
//     }
// }

const loadPosts = posts => ({
    type: 'FETCH_POSTS',
    payload: posts
})

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts')
    
    dispatch(loadPosts(response.data))
}

const loadUser = user => ({
    type: 'FETCH_USER',
    payload: user
})

export const fetchUser = userId => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`)
    
    dispatch(loadUser(response.data))
}

//user memoize function from lodash library
// import _ from 'lodash';
// export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch)

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${userId}`)
    
//     dispatch(loadUser(response.data))
// })