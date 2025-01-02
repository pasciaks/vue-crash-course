<!-- COMPOSITION API EXAMPLE -->

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is {{ status }}</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input v-model="newTask" type="text" name="newTask" id="newTask" />
    <button type="submit">Submit</button>
  </form>


  <h3>Tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
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

import { onMounted } from 'vue';
import { ref } from 'vue';

const name = ref('John Doe');
const status = ref('active');
const tasks = ref(['one', 'two', 'three']);
const link = ref('https://google.com');

const newTask = ref('');

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
};

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch('https:/jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (err) {
    console.log("Error fetching tasks:", err);
  }
});

</script>
