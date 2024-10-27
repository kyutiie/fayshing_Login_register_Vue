
export function login(email, password) {
    if (email === 'admin@example.com' && password === 'password') {
      localStorage.setItem('token', 'your_auth_token');
      return true; 
    }
    return false;
  }
  
  export function logout() {
    localStorage.removeItem('token');
  }
  
  export function isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  