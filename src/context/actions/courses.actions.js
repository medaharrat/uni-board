const ROOT_URL = 'http://localhost:8080/courses';

// Get all courses
export async function getCourses(dispatch) {
    const requestOptions = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json'
      },
    };
   
    try {
      dispatch({ type: 'REQUEST' });
      /****
      * Get courses
      ****
      let response = await fetch(`${ROOT_URL}`, requestOptions);
      let data = await response.json();
   
      if (data.courses) {
        let discussions_list = [];
        // Get discussions
        data.courses.map(async (course) => {
          let res_descussions = await fetch(`${ROOT_URL}/${course.id}/discussions_list`, requestOptions);
          let discussions = res_descussions.discussions;
          discussions_list.push( discussions )
        })
        data.discussions = discussions_list;
        // Dispatch
        dispatch({ type: 'GET_COURSES_SUCCESS', payload: data });
        return data
      }
   
      dispatch({ type: 'ERROR', error: data.errors });
      */
      let courses = [
        {
          id: 1,
          name: "Interactive Media Design",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          discussions: [
            {
              id: 1,
              title: "Course teachers",
              comments: [
                { id: 1, comment: "Teachers are awesome!", student_id: 1, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
                { id: 2, comment: "Awesome!", student_id: 1, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
              ],
              date: "01/01/2018"
            },
            {
              id: 2,
              title: "Course material",
              comments: [
                { id: 1, comment: "Material is really interesting!", student_id: 1, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
                { id: 2, comment: "Meeh!", student_id: 1, course_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
              ],
              date: "01/01/2018"
            }
          ],
        },
        {
          id: 2,
          name: "Software Technology",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          discussions: [
            {
              id: 1,
              title: "Course teachers",
              comments: [
                { id: 1, comment: "Teachers are awesome!", student_id: 1, course_id: 2, date: "01/09/2021", color: "#f5f5dc", size: [40, 40] },
                { id: 2, comment: "Awesome!", student_id: 1, course_id: 2, date: "01/09/2021", color: "#f5f5dc", size: [40, 40] },
              ],
              date: "01/01/2018"
            }
          ],
        },
        {
          id: 3,
          name: "Interactive Media Design",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          discussions: [
            {
              id: 1,
              title: "Course teachers",
              comments: [
                { id: 1, comment: "Teachers are awesome!", student_id: 1, course_id: 3, date: "10/09/2021", color: "#f5f5dc", size: [40, 40] },
                { id: 2, comment: "Awesome!", student_id: 1, course_id: 3, date: "16/09/2021", color: "#f5f5dc", size: [40, 40] },
              ],
              date: "01/01/2018"
            }
          ],
        },
        {
          id: 4,
          name: "Software Technology",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          discussions: [
            {
              id: 1,
              title: "Course teachers",
              comments: [
                { id: 1, comment: "Teachers are awesome!", student_id: 1, course_id: 4, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
                { id: 2, comment: "Awesome!", student_id: 1, course_id: 4, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
              ],
              date: "01/01/2018"
            }
          ],
        }
      ]
      if (courses.length > 0){
        dispatch({ type: 'GET_COURSES_SUCCESS', payload: courses });
        return courses
      }
      dispatch({ type: 'ERROR', error: data.errors });
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
    }
}

// Register to a course
export async function register(dispatch, payload) {
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
      dispatch({ type: 'REGISTER_SUCCESS', payload: data });
      return data
    }
 
    dispatch({ type: 'ERROR', error: data.errors });
    return;
  } catch (error) {
    dispatch({ type: 'ERROR', error: error });
  }
}

// unregister to a course
export async function unregister(dispatch, payload) {
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