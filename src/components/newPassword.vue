<template>
    <div class="login-container">
      <div class="background-image"></div>
      <div class="login-box">
        <img src="@/assets/logo_orange.png" alt="Fayshing Hardware Logo" class="logo" />
  
        <form @submit.prevent="submitForm">
          <label for="password">New Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter new password"
            required
          />
  
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmedPassword"
            placeholder="Confirm new password"
            required
          />
  
          <button type="submit" class="login-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        password: '',
        confirmedPassword: '',
      };
    },
    methods: {
      submitForm() {
        if (this.password === this.confirmedPassword) {
          // Here you would typically handle the password change
          // e.g., make an API call to update the password
          console.log('New password submitted:', this.password);
          
          // Redirect to login page
          this.$router.push({ name: 'login' }); // Replace 'login' with the actual route name for the login page
        } else {
          alert('Passwords do not match!');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
  }
  
  body {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }
  
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: -1;
    background-image: url('~@/assets/bg.png');
    background-size: cover;
    background-position: center;
  }
  
  .login-box {
    background-color: white;
    padding: 30px 100px;
    border-radius: 20px;
    border: 3px solid #ff914d;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 550px;
    position: relative;
    z-index: 1;
  }
  
  .logo {
    width: 280px;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
    text-align: left;
  }
  
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 30px;
    margin-top: 15px;
    border: 2px solid #ff914d;
    border-radius: 10px;
    outline: none;
  }
  
  input[type="password"]::placeholder {
    color: #ebab83;
  }
  
  .login-btn {
    background-color: #ff914d;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    width: 25vh;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 15px;
    transition: background 0.3s ease;
  }
  
  .login-btn:hover {
    background-color: #e2600f;
  }
  
  @media (max-width: 768px) {
    .login-box {
      padding: 30px 20px;
      width: 90%;
    }
  
    .login-btn {
      width: 80%;
    }
  
    .logo {
      width: 70%;
      max-width: 200px;
    }
  }
  
  @media (max-width: 480px) {
    .login-box {
      padding: 20px;
      width: 95%;
    }
  
    .logo {
      width: 70%;
      max-width: 150px;
    }
  
    input[type="password"] {
      margin-bottom: 30px;
      padding: 8px;
    }
  
    .login-btn {
      width: 100%;
      padding: 10px;
    }
  }
  </style>
  
