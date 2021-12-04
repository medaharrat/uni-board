const ROOT_URL = 'http://localhost:8080/comments'; // API Link

// Get all comments
export async function getComments(dispatch, payload) {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };
   
    try {
      dispatch({ type: 'REQUEST' });
      let response = await fetch(`${ROOT_URL}`, requestOptions);
      let data = await response.json();
   
      if (data.comments) {
        dispatch({ type: 'GEt_COMMENTS_SUCCESS', payload: data });
        return data
      }
   
      dispatch({ type: 'ERROR', error: data.errors });
      return;
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
    }
}

// Add a new comment
export async function addComment(dispatch, payload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };
 
  try {
    dispatch({ type: 'REQUEST' });
    let response = await fetch(`${ROOT_URL}/create`, requestOptions);
    let data = await response.json();
 
    if (data.course) {
      dispatch({ type: 'ADD_COMMENT_SUCCESS', payload: data });
      return data
    }
 
    dispatch({ type: 'ERROR', error: data.errors });
    return;
  } catch (error) {
    dispatch({ type: 'ERROR', error: error });
  }
}

// Delete a comment
export async function deleteComment(dispatch, payload) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };
   
    try {
      dispatch({ type: 'REQUEST' });
      let response = await fetch(`${ROOT_URL}/delete`, requestOptions);
      let data = await response.json();
   
      if (data) {
        dispatch({ type: 'DELETE_SUCCESS', payload: data });
        return data
      }
   
      dispatch({ type: 'ERROR', error: data.errors });
      return;
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
    }
  }