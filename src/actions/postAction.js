import { FETCH_POSTS, NEW_POSTS } from "./types";

export const fetchPost = () => async dispatch => {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allData = await fetchData.json();
  dispatch({
    type: FETCH_POSTS,
    payload: allData
  });
};

export const createPost = postData => async dispatch => {
  const fetchPost = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "Application/json"
    },
    body: JSON.stringify(postData)
  });
  const response = await fetchPost.json();
  dispatch({
    type: NEW_POSTS,
    payload: response
  });
};
