<template>
  <div class="container">
    <div v-if="isInisialView">
      <p>{{countDown}}</p>
      <img class="women_image" src="~/static/massage_machine_woman.png" alt="シェイカーの画像"><br>
      <button class="btn" @click="viberate(shakeScore)">ブルブルする！</button>
    </div>
    <div v-else>
      <img class="women_image" src="~/static/massage_machine_woman.png" alt="シェイカーの画像"><br>
      <div>
        <n-link class="btn" to="/register">スコアを登録する</n-link>
      </div>
      <div>
        <n-link class="btn" to="/">トップへ戻る</n-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    // shakeScore: 1000,
    // shakeScore: null,
    countDown: 0,
    text: '',
    isInisialView: true
  }),
  computed: {
    ...mapState({
      // messageData: state => state.message.data,
      shakeScore: state => parseInt(state.totalScore.data)
    })
  },
  mounted : function () {
    console.log(this.$store, this.shakeScore)
  },
  methods: {
    viberate(shakeScore) {
      // ここだけイジる
      // とりあえず 300 渡して 渡されたintの値 * ミリ秒 振動するのを目指す。
      this.text = 'バイブ実行中！'
      console.log(shakeScore)
      this.isInisialView=false
      
      navigator.vibrate([shakeScore])
      this.countDown = shakeScore
      this.countDownTimer()
      // 内部のスコアをゼロ値で保存する
      this.$store.dispatch('totalScore/remove')
      // 編集が終わったらターミナルで
      // npm run generate
    },
    countDownTimer() {
      if(this.countDown > 0) {
        setTimeout(() => {
            this.countDown -= 5
            this.countDownTimer()
        }, 1)
      }
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
.women_image{
  max-width: 100%;
}

.btn{
  border-radius: 24px;
  color: white;
  background-color: #3B4043;
  width: 158px;
  height: 48px;
  padding: 12px 22px;
  margin-top: 40px;
  background-color: #004BB1;
}
</style>
