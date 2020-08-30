<template>
  <div class="container">
    <div>
      <h1 class="h1">スコア</h1>
      <h1 class="h1">表示名</h1>
      <td><input type="text" name="name" placeholder="キーワードを入力" size="size" maxlength="20"></td>
      <div>
        <p class="btn register">登録</p>
      </div>
      <div>
        <n-link class="btn" to="/">トップに戻る</n-link>
      </div>
    </div>
  </div>
</template>
<script>


</script>
<style>
.h1{
    text-align: left;
    font: normal normal normal 20px/34px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
}
.btn{
  border-radius: 24px;
  color: white;
  background-color: #3B4043;
  width: 180px;
  height: 48px;
  padding: 12px 24px;
  margin-top: 40px;
}
.btn.register {
  background-color: #004BB1;
}
</style>