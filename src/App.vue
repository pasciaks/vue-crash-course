<!-- COMPOSITION API EXAMPLE -->

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is {{ status }}</p>
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

<script setup>

import {ref} from 'vue';

    const name = ref('John Doe');
    const status = ref('active');
    const tasks = ref(['one', 'two', 'three']);
    
    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value= 'pending'
      } else if (status.value=== 'pending') {
        status.value= 'inactive'
      } else {
        status.value= 'active'
      }
    };

</script>
