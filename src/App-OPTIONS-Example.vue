
<!-- OPTIONS API EXAMPLE -->


<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script> -->

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is {{status}}</p>
  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">Click for google</a> -->
  <a :href="link">Click for google</a>
  <!-- <button v-on:click="toggleStatus">Change status</button> -->
  <button @click="toggleStatus">Change status</button>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>

<script>
  export default {
    data() {
      return {
        name: "John Doe",
        status: "something else",
        tasks: [
          'task 1','task 2', 'task 3'
        ],
        link: 'https://google.com'
      }
    },
    methods: {
      toggleStatus() {
        if (this.status==='active') {
          this.status='pending'
        } else if (this.status==='pending'){
          this.status='inactive'
        } else {
          this.status='active'
        }
      }
    }
  }
</script>
