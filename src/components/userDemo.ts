import { ref } from "vue";

export default function(){
   const userName=ref("Tristan");
   const money=ref(9999);
   function addMoney(){
    money.value+=1000;
    console.log(money)
   }
   return{userName,money,addMoney}
}