<template>
  <div class="test">
    <h1>admin</h1>
    <v-btn @click="saveData()">send</v-btn>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'admin_index',
  dataToSend: [],
  components: {
    // HelloWorld
  },
  methods: {
    fetchData() {
      // ตัวอย่างการดึงข้อมูลจาก Backend ด้วย Axios
      axios.post('http://localhost:5000/api/All', { all: 'example data' }) // เพิ่ม field 'all' ใน request
        .then((response) => {
          this.data = response.data;
          this.loading = false;
          console.log(this.data[0].id, response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          this.loading = false;
        });
    },
    saveData() {
      const dataToSend = [
        {
          "firstName": "John", // Replace "John" with the desired first name
          "lastName": "Doe",
          "isActive": true,
          "email": "john@example.com",
          "location": "Some Location",
          "phone": "0123456789"
        }
      ];
      axios.post('http://localhost:5000/api/register/new', dataToSend)
        .then((response) => {
          // รับข้อมูลที่ Backend ตอบกลับ (ถ้ามี)
          console.log('Response from Backend:', response.data);
        })
        .catch((error) => {
          // จัดการข้อผิดพลาด (ถ้ามี)
          console.error('Error sending data to Backend:', error);
        });
    }
  },
  created() {
    this.fetchData();
  },

}
</script>