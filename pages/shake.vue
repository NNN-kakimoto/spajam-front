<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title" v-text="title"></h1>
      <div class="links">
        <p>降った回数</p>
        <p>{{ shake_count }}</p>
        <button @click="goVibrator">ブルブルする</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      title : "shake",
      shake_count : 0,
      // message: ''
    }
  },
  // computed: {
  //   ...mapState({
  //     messageData: state => state.message.data
  //   })
  // },
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
    },
    // regist() {
    //   if (this.message) {
    //     this.$store.dispatch('message/regist', this.message)
    //     this.message = ''
    //   }
    // },
    // remove(payload) {
    //   if (window.confirm('削除しますか？')) {
    //     this.$store.dispatch('message/remove', payload)
    //   }
    // },
    calcIyashiPoint(){
      // ミリ秒でバイブさせる長さを生成する
      return this.shake_count * 100 // 時間取得されたタイミングで式は変える
    },
    goVibrator(){
      // 内部的に保存する
      // this.message = '保存したよ'
      this.$store.dispatch('score/regist', this.calcIyashiPoint())
      // this.regist()
      // vibratior.vueに移動
      this.$router.push('/vibrator')
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
