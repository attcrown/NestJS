<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>test</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  methods: {
    fetchData() {
      // ตัวอย่างการดึงข้อมูลจาก Backend ด้วย Axios
      axios.post('/api/All', { all: 'example data' }) // เพิ่ม field 'all' ใน request
        .then((response) => {
          this.data = response.data;
          this.loading = false;
          console.log(this.data[0].id ,response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          this.loading = false;
        });
    },
  },
  created() {
    this.fetchData();
  },

}
</script>
