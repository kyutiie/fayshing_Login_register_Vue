<template>
    <div class="register-container">
      <div class="background-image"></div>
      <div class="register-box">
        <img src="@/assets/logo_orange.png" alt="Fayshing Hardware Logo" class="logo" />
  
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
          <div class="form-container">
            <div class="form-row">
              <div class="form-column">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" placeholder="Enter your full name" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-column">
                <label for="contact-number">Contact Number:</label>
                <input type="tel" id="contact-number" v-model="contactNumber" placeholder="Enter your contact number" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-column">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-column">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" placeholder="Create a password" required />
              </div>
              <div class="form-column">
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" v-model="confirmPassword" placeholder="Re-enter your password" required />
              </div>
            </div>
          </div>
  
          <button type="submit" class="register-btn">Register</button>
        </form>
  
        <p class="link">Already have an account? <a href="/" style="color:#ff914d;">Login here</a></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        contactNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSubmit() {
        console.log({
          name: this.name,
          contactNumber: this.contactNumber,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
      }
    }
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
    min-height: 100vh;
    position: relative; 
  }
  
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    width: 100%;
    height: 100vh; 
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    z-index: -1; 
    background-image: url('@/assets/bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }
  
  .register-box {
    background-color: white;
    padding: 30px 50px;
    border-radius: 20px;
    border: 3px solid #ff914d;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 600px;
    margin-top: 50px;
  }
  
  .logo {
    width: 280px;
    margin-bottom: 20px;
  }
  
  h1 {
    color: #d86925;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: left;
    font-size: 2em;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
  }
  
  .form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  
  .form-column {
    flex: 1;
    padding: 0 10px;
    text-align: left;
  }
  
  label {
    margin-bottom: 5px;
    text-align: left;
    display: block;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"] {
    width: 100%;
    padding: 10px;
    border: 2px solid #ff914d;
    border-radius: 10px;
    outline: none;
  }
  
  input::placeholder {
    color: #ebab83;
  }
  
  .register-btn {
    background-color: #ff914d;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    width: 40%;
    margin-top: 10px;
    transition: background 0.3s ease;
  }
  
  .register-btn:hover {
    background-color: #e2600f;
  }
  
  .link {
    margin-top: 25px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    .register-box {
      width: 90%;
      padding: 20px;
      margin-top: 50px;
    }
    .form-row {
      flex-direction: column;
    }
    .form-column {
      padding: 0;
      margin-bottom: 15px;
    }
    .register-btn {
      width: 100%;
    }
  }
  </style>
  