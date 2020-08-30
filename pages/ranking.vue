<template>
  <div class="mt-4">
    <h1 class="mb-4">ランキング</h1>
    <table class="table w-60 mx-auto">
        <tr v-for="i of 10" :key="i">
            <td>{{i}}位</td>
            <td>おれ</td>
            <td>999pt</td>
        </tr>
    </table>
    <div class="mt-5">
      <div>
        <router-link to ="/">
          <button type="button" class="btn btn-secondary mb-3">トップに戻る</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.image {
  width: 80%;
}
.h{
    height: 600px;
}
.btn{
  border-radius: 24px;
  color: white;
  background-color: #3B4043;
  width: 148px;
  height: 48px;
  padding: 12px 24px;
  margin-top: 40px;
  background-color: #004BB1;
}
</style>