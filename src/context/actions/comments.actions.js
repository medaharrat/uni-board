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
export async function addComment(payload, dispatch) {
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
      dispatch({ type: 'ADD_COMMENT_SUCCESS', payload: data });
      return data
    }*/
    let courses = JSON.parse(localStorage.getItem('courses'))
    courses.map((course) => {
      if (course.id === payload.course_id) {
        course.discussions.map((discussion) => {
          if (discussion.id === payload.discussion_id) {
            discussion.comments.push(payload)
          }
        })
        localStorage.setItem('courses', JSON.stringify(courses));
        dispatch({ type: 'ADD_COMMENT_SUCCESS' });
        return;
      }
    })
 
    dispatch({ type: 'ERROR', error: 'Something went wrong' });
    return;
  } catch (error) {
    dispatch({ type: 'ERROR', error: error });
  }
}

// Delete a comment
export async function deleteComment(payload, dispatch) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };
   
    try {
      dispatch({ type: 'REQUEST' });
      /*let response = await fetch(`${ROOT_URL}/delete`, requestOptions);
      let data = await response.json();
   
      if (data) {
        dispatch({ type: 'DELETE_SUCCESS', payload: data });
        return data
      }*/
      let courses = JSON.parse(localStorage.getItem('courses'))
      courses.map((course) => {
        if (course.id === payload.course_id) {
          course.discussions.map((discussion) => {
            if (discussion.id === payload.discussion_id) {
              discussion.comments = discussion.comments.filter((com) => com.id !== payload.id)
            }
          })
          localStorage.setItem('courses', JSON.stringify(courses));
          dispatch({ type: 'DELETE_COMMENT_SUCCESS' });
          return;
        }
      })
   
      dispatch({ type: 'ERROR', error: data.errors });
      return;
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
    }
  }