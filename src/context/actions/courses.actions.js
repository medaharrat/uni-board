const ROOT_URL = 'http://localhost:8080/courses';
var COURSES = [
  {
    id: 1,
    name: "Interactive Media Design",
    registered: false,
    description: "This course allows students to gain enough knowledge and hands-on practice in designing and developing interactive media applications.",
    discussions: [
      {
        id: 1,
        course_id: 1,
        title: "Course teachers",
        comments: [
          { id: 1, comment: "Teachers are awesome!", student: {name: 'Josh Doe'}, course_id: 1, discussion_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
          { id: 2, comment: "Awesome!", student: {name: 'Ahmed Khalfaoui'}, course_id: 1, discussion_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
        ],
        date: "10/07/2019"
      },
      {
        id: 2,
        course_id: 1,
        title: "Course material",
        comments: [
          { id: 1, comment: "Material is really interesting!", student: {name: 'Josh Doe'}, course_id: 1, discussion_id: 2, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
          { id: 2, comment: "Meeh!", student: {name: 'Adam Nagy'}, course_id: 1, discussion_id: 2, date: "05/10/2019", color: "#f5f5dc", size: [40, 40] },
        ],
        date: "29/11/2021"
      }
    ],
  },
  {
    id: 2,
    registered: false,
    name: "Software Technology",
    description: "The course has been around for a decade and is considered essential for first year students. Students are expected to learn about project management and project design theory. Students are also expected to develop a scalable application and defend it by the end of the semester.",
    discussions: [
      {
        id: 1,
        course_id: 2,
        title: "Course teachers",
        comments: [
          { id: 1, comment: "Teachers are awesome!", student: {name: 'Thomas Johnson'}, course_id: 2, discussion_id: 1, date: "01/09/2021", color: "#f5f5dc", size: [40, 40] },
          { id: 2, comment: "Awesome!", student: {name: 'Justin Cooper'}, course_id: 2, discussion_id: 1, date: "01/09/2021", color: "#f5f5dc", size: [40, 40] },
        ],
        date: "01/01/2018"
      }
    ],
  },
  {
    id: 3,
    registered: false,
    name: "Introduction to Data Science",
    description: "The course is compulsory for all computer science specializations. Students are expected to learn the fundamentals of data analytics and data mining. By the end of the semester, everyone has to participate in a semester project and take an oral exam.",
    discussions: [
      {
        id: 1,
        course_id: 3,
        title: "Course teachers",
        comments: [
          { id: 1, comment: "Extremely strict teacher but I leaned a lot!", student: {name: 'Emaa Johnson'}, course_id: 3, discussion_id: 1, date: "10/09/2021", color: "#f5f5dc", size: [40, 40] },
        ],
        date: "11/02/2020"
      }
    ],
  },
  {
    id: 4,
    registered: false,
    name: "Principals of Artifical Intelligence",
    description: "This course introduces the fundamental theory of artificial intelligence, from the history of AI to the search algorithms theory. Students are expected to solve and defend mini-assignments of solving AI tasks.",
    discussions: [
      {
        id: 1,
        course_id: 4,
        title: "Course material",
        comments: [
          { id: 1, comment: "The material is realy up to date and very useful!", student: {name: 'Josh Doe'}, course_id: 4, discussion_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
          { id: 2, comment: "Great!", student: {name: 'David gun'}, course_id: 4, discussion_id: 1, date: "25/01/2018", color: "#f5f5dc", size: [40, 40] },
        ],
        date: "02/01/2021"
      }
    ],
  }
];

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
      let courses = [];

      if (JSON.parse(localStorage.getItem("courses"))){
        courses = JSON.parse(localStorage.getItem("courses"));
      } else {
        courses = COURSES
      }

      if (courses.length > 0){
        dispatch({ type: 'GET_COURSES_SUCCESS', payload: courses });
        localStorage.setItem('courses', JSON.stringify(courses));
        return courses
      }
      dispatch({ type: 'ERROR', error: 'Something is wrong!' });
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
    }
}

// Register to a course
export async function register(courseId, dispatch) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(courseId),
  };
 
  try {
    dispatch({ type: 'REQUEST' });
    // let response = await fetch(`${ROOT_URL}/create`, requestOptions);
    // let data = await response.json();
 
    /* if (data.course) {
      dispatch({ type: 'REGISTER_SUCCESS', payload: data });
      return data
    }*/
    let courses = JSON.parse(localStorage.getItem("courses")) || COURSES;
    courses.map((course) =>  {
      if (course.id === courseId){
        course.registered = true;
        dispatch({ type: 'REGISTER_SUCCESS', payload: courses });
        localStorage.setItem('courses', JSON.stringify(courses));
        return;
      }
    })
    
    dispatch({ type: 'ERROR', error: 'Something is wrong!' });
    return;
  } catch (error) {
    dispatch({ type: 'ERROR', error: error });
  }
}

// unregister to a course
export async function unregister(courseId, dispatch) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(courseId),
    };
   
    try {
      dispatch({ type: 'REQUEST' });
      /*let response = await fetch(`${ROOT_URL}/delete`, requestOptions);
      let data = await response.json();
   
      if (data) {
        dispatch({ type: 'DELETE_SUCCESS', payload: data });
        return data
      }*/
      let courses = JSON.parse(localStorage.getItem("courses")) || COURSES;
      courses.map((course) =>  {
        if (course.id === courseId){
          course.registered = false;
          dispatch({ type: 'REGISTER_SUCCESS', payload: courses });
          console.log(courses)
          localStorage.setItem('courses', JSON.stringify(courses));
          return;
        }
      })
   
      dispatch({ type: 'ERROR', error: 'Something is wrong!' });
      return;
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
    }
  }