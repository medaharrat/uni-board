const ROOT_URL = 'http://localhost:8080/course/'; // API Link

// Get all discussions
export async function getDiscussions(id, dispatch) {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };
   
    try {
      dispatch({ type: 'REQUEST' });
      let response = await fetch(`${ROOT_URL}/${id}/discussions_list`, requestOptions);
      let data = await response.json();
   
      if (data.discussions) {
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
export async function addDiscussion(courseId, payload, dispatch) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };
 
  try {
    dispatch({ type: 'REQUEST' });
    /*let response = await fetch(`${ROOT_URL}/create`, requestOptions);
    let data = await response.json();
 
    if (data.course) {
      dispatch({ type: 'ADD_DISCUSSION_SUCCESS', payload: data });
      return data
    }*/
    let courses = JSON.parse(localStorage.getItem('courses'))
    courses.map((course) => {
      if (course.id === courseId) {
        course.discussions.push(payload);
        localStorage.setItem('courses', JSON.stringify(courses));
        dispatch({ type: 'ADD_DISCUSSION_SUCCESS' });
        return;
      }
    })
 
    dispatch({ type: 'ERROR', error: 'Something went wrong.' });
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