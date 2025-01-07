<template>
  <div>
    姓名:<input v-model="userName" />{{ userName }}<br />
    薪水:<input v-model="money" type="number" /> {{ money }}<br />
    <button v-on:click="addMoney">提交</button><button @click="changeShowUserInfo">查看个人信息</button>
  </div>
  <div class="userInfo" v-if="showUserInfo">
    <h2>个人信息</h2>
    <p>年龄:<input v-model="userInfo.age" type="number" /></p>
    <p>性别:<input type="radio" value="1" v-model="userInfo.sex" te />男<input v-model="userInfo.sex" type="radio"
        value="2" />女</p>
    <p>岗位:<select v-model="userInfo.job">
        <option value="dev">开发</option>
        <option value="test">测试</option>
        <option value="mp">项目经理</option>
      </select></p>
    <p><span v-for="demo in userInfo.skills" :key="demo">{{ demo }}</span></p>
    <p>新技术:<input v-model="newSkill" /><button v-on:click="addNewSkill">新技术</button></p>
    <p>个人信息汇总:{{ userInfo }}</p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      userName: "Tristan",
      money: 9999,
      userInfo: {
        age: 19,
        sex: 1,
        job: "",
        skills: ["java", "js", "android"]
      },
      newSkill: "",
      showUserInfo: false,
    }
  },
  methods: {
    addMoney() {
      this.money += 1000
    },
    addNewSkill() {
      if (this.newSkill) {
        this.userInfo.skills.push(this.newSkill)
      }
    },
    changeShowUserInfo() {
      this.showUserInfo = !this.showUserInfo
    }
  }
}
</script>


<style scoped>
.userInfo {
  background-color: aqua;
  width: 80%;
}

.userInfo span {
  background-color: #00bb00;
  margin-left: 10px;
}
</style>
