<template>
  <div class="mt-4">
    <h1 class="h1">Shaker</h1>
    <img src="~/static/sports_protein_man.png" class="image">
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
        <router-link to ="/">
          <button type="button" class="btn btn-light">癒しポイント確認</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.image {
  width: 80%;
}
</style>