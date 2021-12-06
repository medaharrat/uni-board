const AUTH = {
  neptun: 'ABCDE',
  password: 'admin123'
}
// Log in
export async function loginUser(dispatch, payload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };
 
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    /*let response = await fetch(`${ROOT_URL}/login`, requestOptions);
    let data = await response.json();
 
    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('user', JSON.stringify(data));
      return data
    }*/
    if (payload.neptun === AUTH.neptun && payload.password === AUTH.password) {
      console.log("verified")
      let user = {
        neptun: payload.neptun,
        name: 'Justin Atlas',
        courses: [1, 3]
      }
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      return user;
    }

    dispatch({ type: 'LOGIN_ERROR', error: 'Error signing in.' });
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

// Log out
export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('user');
}