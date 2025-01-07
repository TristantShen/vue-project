<template>
    <div>
        姓名:<input v-model="userName" />{{ userName }}<br />
        薪水:<input v-model="money" type="number" /> {{ money }}<br />
        <button v-on:click="addMoney">添加薪水</button>
    </div>

</template>

<script setup lang="ts">
import userDemo from './components/userDemo';
const { userName, money, addMoney } = userDemo()
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