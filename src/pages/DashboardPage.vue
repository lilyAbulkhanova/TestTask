<template>
    <div class="container">
     <div class="filter">
      <el-input type="text" v-model="authorFilter" placeholder="Фильтр по автору"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="filterPosts">Search</el-button>
     </div>
      <div class="post-container">
        <md-content v-for="(post, index) in filteredPosts" :key="index" class="md-elevation-2 md-layout-item post-item">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-body">{{ post.body }}</div>
          <div class="post-author">{{ getAuthorName(post.userId) }}</div>
        </md-content>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [],
        users: [],
        authorFilter: '',
        filteredPosts: [],
      };
    },
    methods: {
      getPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            this.posts = response.data;
            this.filteredPosts = response.data;
          })
          .catch(error => {
            console.error('Ошибка при получении постов:', error);
          });
      },
      getUsers() {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            this.users = response.data;
          })
          .catch(error => {
            console.error('Ошибка при получении пользователей:', error);
          });
      },
      getAuthorName(userId) {
        const user = this.users.find(user => user.id === userId);
        return user ? user.name : '';
      },
      filterPosts() {
      if (!this.authorFilter.trim()) {
        this.filteredPosts = this.posts; // Если фильтр пуст, показать все посты
      } else {
        this.filteredPosts = this.posts.filter(post => {
          const authorName = this.getAuthorName(post.userId).toLowerCase();
          return authorName.includes(this.authorFilter.toLowerCase().trim());
        });
      }
    }
    },
    mounted() {
      this.getPosts();
      this.getUsers();
    }
  };
  </script>
  
  <style scoped>
  .filter{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
  }
  .el-input {
    margin-right: 20px; 
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .post-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
  }
  .md-input {
    margin-bottom: 20px;
  }
  .md-elevation-2 {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    max-width: 300px;
    background-color: white;
  }
  .post-title {
    color: deepskyblue;
    font-weight: bold;
    margin-bottom: 5px;  
  }
  .post-author {
    margin-top: 10px;
    font-style: italic;
    color: #888;
  }
  </style>
  