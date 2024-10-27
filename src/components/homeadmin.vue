<template>
    <div>
      <header class="header">
        <div class="logo">
          <img src="@/assets/logo_white.png" alt="Logo" />
        </div>
        <nav class="nav" v-bind:class="{ show: isNavVisible }">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">User</a></li>
          </ul>
        </nav>
        <div style="display: flex; justify-content: flex-end; position: relative;">
          <div style="width: 50px; height: 50px; border-radius: 50%; overflow: hidden; cursor: pointer; position: relative; margin: 10px;" @click="toggleDropdown">
            <img src="@/assets/profile.png" alt="Profile Picture" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div v-if="isDropdownVisible" class="dropdown-menu" @click.outside="closeDropdown">
            <a href="/logout" @click.prevent="logout">Logout</a>
          </div>
        </div>
        <div class="hamburger" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </header>
  
      <h2 style="text-align: left; color: #ff914d; margin-left: 50px; margin-top: 50px; margin-bottom: 50px; font-size: 30px;">ADD ADMIN</h2>
      <div class="form-container" style="margin-bottom: 30px;">
        <form @submit.prevent="addAdmin">
          <div class="form-group">
            <label for="admin-id">Admin ID:</label>
            <input type="text" id="admin-id" v-model="adminId" placeholder="Enter ID" required />
          </div>
          <div class="form-group">
            <label for="admin-name">Admin Name:</label>
            <input type="text" id="admin-name" v-model="adminName" placeholder="Enter Name" required />
          </div>
          <div class="form-group">
            <label for="contact-number">Contact Number:</label>
            <input type="tel" id="contact-number" v-model="contactNumber" placeholder="Contact Number" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" placeholder="Enter MPIN" required />
          </div>
          <div class="form-group">
            <label for="confirmpassword">Confirm Password:</label>
            <input type="password" id="confirmpassword" v-model="confirmPassword" placeholder="Confirm MPIN" required />
          </div>
          <div style="margin-left: 15px; margin-top: 30px; display: flex; justify-content: center;">
            <input type="submit" value="Add Admin" style="padding: 10px 20px; background-color: #ff914d; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer;" />
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        adminId: '',
        adminName: '',
        contactNumber: '',
        password: '',
        confirmPassword: '',
        isNavVisible: false,
        isDropdownVisible: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isNavVisible = !this.isNavVisible;
      },
      toggleDropdown(event) {
        event.stopPropagation();
        this.isDropdownVisible = !this.isDropdownVisible;
      },
      closeDropdown() {
        this.isDropdownVisible = false;
      },
      logout() {
        alert('You have been logged out.');
        if (this.$router) {
          this.$router.push('/'); 
        } else {
          window.location.href = '/'; 
        }
      },
      addAdmin() {
        alert('Admin added: ' + this.adminName);
      }
    },
    directives: {
      outside: {
        bind(el, binding) {
          el.clickOutsideEvent = function (event) {
            if (!(el == event.target || el.contains(event.target))) {
              binding.value(event);
            }
          };
          document.addEventListener('click', el.clickOutsideEvent);
        },
        unbind(el) {
          document.removeEventListener('click', el.clickOutsideEvent);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ff914c;
    padding: 10px 20px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    position: relative;
  }
  
  .logo img {
    height: 50px;
    max-width: 25%;
    height: auto;
  }
  
  .nav {
    display: flex;
    margin-left: auto;
  }
  
  .nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  .nav li {
    margin: 0 30px;
  }
  
  .nav a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 23px;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 65px;
    right: 0;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
    border: 2px solid rgb(221, 141, 37);
    display: block;
  }
  
  .dropdown-menu a {
    text-decoration: none;
    display: block;
    color: #ff914c;
    padding: 10px;
    font-weight: bold;
  }
  
  .dropdown-menu a:hover {
    background-color: #ff914c;
    color: white;
    border-radius: 10px;
  }
  
  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .bar {
    height: 4px;
    width: 30px;
    background-color: white;
    margin: 4px 0;
    transition: 0.4s;
  }
  
  @media (max-width: 768px) {
    .nav {
      display: none;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 95px;
      background-color: #ff914c;
      width: 30%;
      z-index: 1000;
      text-align: center;
      border-radius: 20px;
    }
  
    .nav ul {
      display: block;
      padding: 5;
      margin: 0;
    }
  
    .nav li {
      margin: 15px 0;
    }
  
    .nav a {
      font-size: 20px;
    }
  
    .hamburger {
      display: flex;
    }
  
    .show {
      display: flex;
    }
  
    .logo img {
      margin-left: 10px;
      max-width: 50%;
    }
  }
  
  input::placeholder {
    color: #ff914c;
    font-weight: bold;
  }
  
  .form-container {
    max-width: 500px;
    margin: auto;
    padding: 15px;
    border: 3px solid orange;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
    margin-right: 75px;
    margin-left: 50px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #000000;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 2px solid orange;
    border-radius: 5px;
  }
  
  @media (max-width: 768px) {
    .form-container {
      margin-left: 10%;
      margin-right: 10%;
    }
  }
  </style>