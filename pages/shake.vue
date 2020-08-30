<template>
  <div class="container">
    <div>
      <button @click="goVibrator_test">test</button>
      <strong>{{ total_time_min }} : {{ total_time_s }} : {{ total_time_ms }}</strong><br>
      <strong>{{ shake_count }}回</strong><br>
      <img src="~/static/sports_protein_shaker.png" alt="シェイカーの画像">

      <div v-if="status === 'init'">
        <button class="btn" v-on:click="startShake">シェイク開始!</button>
      </div>
      <div v-else-if="status === 'shake'">
        
      </div>
      <div v-else>
        <button class="btn" v-on:click="goVibrator">ブルブルする</button>
        <button class="btn" v-on:click="saving">貯蓄する</button>
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
  computed: {
    ...mapState({
      totalScore: state => parseInt(state.totalScore.data)
    }),
    total_time_min : function () {
      return ("00" + Math.floor(Math.floor(this.total_time / 1000) / 60)).slice(-2);
    },
    total_time_s : function () {
      return ("00" + Math.floor(this.total_time / 1000) % 60).slice(-2);
    },
    total_time_ms : function () {
      // return ("00" + (this.total_time / 1000 - Math.floor(this.total_time / 1000)));
      return ("00" + String(this.total_time / 1000 - Math.floor(this.total_time / 1000)).substr(2,2)).slice(-2);
    }
  },
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
        // シェイク終了のお知らせ
        navigator.vibrate([500])
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
      // min 0s, max 15s
      const standardTime = 10
      const calc = parseInt(standardTime - this.total_time / 1000)
      return parseInt(15 / (1 + 1.2**-calc)) * 1000
    },

    goVibrator_test(){
      this.total_time = 10000
      this.$store.dispatch('score/regist', this.total_time)
      this.$store.dispatch('totalScore/regist', this.calcIyashiPoint())
      // this.$store.dispatch('score/regist', this.calcIyashiPoint());
      // this.regist()
      // vibratior.vueに移動
      this.$router.push('/vibrator');
    },
    goVibrator() {
      
      // 内部的に保存する
      // this.message = '保存したよ'
      this.$store.dispatch('score/regist', this.total_time)
      this.$store.dispatch('totalScore/regist', this.calcIyashiPoint())
      // this.$store.dispatch('score/regist', this.calcIyashiPoint());
      // this.regist()
      // vibratior.vueに移動
      this.$router.push('/vibrator');
    },
    saving() { 
      this.$store.dispatch('totalScore/regist', this.totalScore + this.calcIyashiPoint())
      this.$router.push('/stock');
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
strong {
  font-size : 170%;
}
img {
  width : 70%;
  height : 50%;
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
