<template>
  <div class="mt-4">
    <img src="~/static/icon.png" class="image">
    <p>プロテインを作りますか?</p>
    <div>
      <router-link to ="/shake">
        <button type="button" class="btn btn-primary">作る</button>
      </router-link>
    </div>
    <div class="mt-5">
      <div>
        <router-link to ="/ranking">
          <button type="button" class="btn btn-secondary">ランキング</button>
        </router-link>
      </div>
      <div class="mt-2">
        <router-link to="/stock">
          <button type="button" class="btn btn-light">癒しポイント確認</button>
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
  width: 35%;
}
.btn{
  border-radius: 24px;
  color: white;
  background-color: #3B4043;
  width: 180px;
  height: 48px;
  padding: 12px 24px;
  margin-top: 40px;
  background-color: #004BB1;
}
</style>