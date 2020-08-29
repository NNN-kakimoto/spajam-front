<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title" v-text="title"></h1>
      <div class="links">
        <p>降った回数</p>
        <p>{{ shake_count }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title : "shake",
      shake_count : 0
    }
  }, 
  mounted : function () {
    this.addDevicemotion();
  },
  methods : {
    addDevicemotion() {
      this.shake();
      // window.addEventListener('devicemotion', this.shake);
    },
    hoge(e) {
      alert("hoge"); 
      console.log(this.shake_count);
      console.log(e.acceleration.x) // x軸
      console.log(e.acceleration.y) // y軸
      console.log(e.acceleration.z)
    },
    shake() {
      var y; // 縦方向の加速度を取得するための変数
      var size = 35; // 振ったと認識するサイズ
      var shakeFlag = true; // trueであればcountをプラス、falseであればマイナスにするためのフラグ
      var count = 0; // 振ったらこれがたまる。たまった量に応じて何かする
      var self = this;
      window.addEventListener('devicemotion',  function (event) {
        // 加速度 Y軸
        y = event.acceleration.y;
        
        // 加速度が、sizeに指定した量より大きいもしくは-sizeより小さいときに、countを操作
        if (y < -size || y > size) {
          if (shakeFlag) {
            self.shake_count++;
          } else {
            self.shake_count--;
          }
        }
      });
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
