<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        shake!
      </h1>
      <div v-if="status === 'init'">
        <button v-on:click="startShake">シェイク開始!</button>
      </div>
      <div v-else-if="status === 'shake'" class="links">
        <p>振った回数</p>
        <p>{{ shake_count }}</p>
        <p>{{ total_time / 1000 }}秒</p>
      </div>
      <div v-else>
        <button v-on:click="goVibrator">ブルブルする</button>
      </div> 
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      status : "init",
      // message: ''
      size : 28, // 加速度で良さそうな数値 これを超えたら一回とする 
      start_time : 0,
      total_time : 0,
      shake_count : 0
    }
  },
  // computed: {
  //   ...mapState({
  //     messageData: state => state.message.data
  //   })
  // },
  methods : {
    addDevicemotion() {
      window.addEventListener('devicemotion', this.shake, false);
    },
    removeDevicemotion() {
      window.removeEventListener('devicemotion', this.shake, false);
    },
    shake(e) {
      const y = e.acceleration.y;
      const end_time = performance.now();
      this.total_time = end_time - this.start_time;
      
      if (0 < this.size) { 
        if (this.size < y) { 
          this.shake_count++;
          this.size = -this.size;
        }
      } else {
        if (y < this.size) {
          this.size = -this.size;
        }
      }

      if (30 <= this.shake_count) {
        this.removeDevicemotion();
        this.status = "hoge"; // 終了後のステータス
      }
    },
    startShake() {
      this.status = "shake";
      this.start_time = performance.now();
      this.addDevicemotion();
    },
    // regist() {
    //   if (this.message) {
    //     this.$store.dispatch('message/regist', this.message);
    //     this.message = '';
    //   }
    // },
    // remove(payload) {
    //   if (window.confirm('削除しますか？')) {
    //     this.$store.dispatch('message/remove', payload);
    //   }
    // },
    calcIyashiPoint() {
      // ミリ秒でバイブさせる長さを生成する
      // 基準値　time(s)
      // 振り切る時間と基準値が同じ 8sバイブ
      // min 0s, max 15s
      const standardTime = 10
      const calc = standardTime - this.total_time / 1000
      return parseInt(15 / (1 + 1.2**-(calc - 8)))
    },
    goVibrator() {
      // 内部的に保存する
      // this.message = '保存したよ'
      this.$store.dispatch('score/regist', this.calcIyashiPoint());
      // this.regist()
      // vibratior.vueに移動
      this.$router.push('/vibrator');
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
