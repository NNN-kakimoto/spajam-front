<template>
  <div class="container">
    <div>
      <h1 class="h1">癒しポイント確認</h1>
      <p class="calc">現在、{{totalScore}}ポイント持っています!</p>
      <div>
        <n-link class="btn primary" to="/vibrator">ブルブルする</n-link>
      </div>
      <div>
        <n-link class="btn" to="/">トップに戻る</n-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  // data: () => ({
  // }),
  computed: {
    ...mapState({
      totalScore: state => parseInt(state.totalScore.data)
    })
  },
}
</script>
<style scoped>
.container{
  text-align: center;
}
h1{
  margin-top: 210px;
  font-weight: bold;
}
.calc{
  margin-top: 2em;
  font-size:  20px;
}
.btn{
  border-radius: 24px;
  color: white;
  background-color: #3B4043;
  width: 148px;
  height: 48px;
  padding: 12px 24px;
  margin-top: 40px;
}
.btn.primary {
  background-color: #004BB1;
}
</style>