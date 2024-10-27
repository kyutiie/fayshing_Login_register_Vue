<template>
    <div>
      <h1>404 - Page Not Found</h1>
      <router-link to="/">Go to Login</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
  h1 {
    color: red;
    text-align: center;
  }
  </style>
  