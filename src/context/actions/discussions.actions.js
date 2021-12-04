const ROOT_URL = 'https://localhost:8080/discussions'; // API Link

// Get all discussions
export async function getDiscussions(dispatch, payload) {
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
        dispatch({ type: 'GEt_DISCUSSIONS_SUCCESS', payload: data });
        return data
      }
   
      dispatch({ type: 'ERROR', error: data.errors });
      return;
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
    }
}

// Add a new discussion
export async function addDiscussions(dispatch, payload) {
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
      dispatch({ type: 'ADD_DISCUSSION_SUCCESS', payload: data });
      return data
    }
 
    dispatch({ type: 'ERROR', error: data.errors });
    return;
  } catch (error) {
    dispatch({ type: 'ERROR', error: error });
  }
}

// Delete a discussion
export async function deleteDiscussions(dispatch, payload) {
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