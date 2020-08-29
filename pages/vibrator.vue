<template>
  <div class="container">
    <div>
      <h1 class="title">
        バイブレータ
      </h1>
      <div class="links">
        <button @click="viberate(shakeScore)">振動!w</button>
        <p>{{text}}</p>
        <p>{{countDown}}</p>
        <p>shakeScore: {{shakeScore}}</p>
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
    text: ''
  }),
  computed: {
    ...mapState({
      // messageData: state => state.message.data,
      shakeScore: state => parseInt(state.score.data)
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
      
      navigator.vibrate([shakeScore])
      this.countDown = shakeScore
      this.countDownTimer()
      // 内部のスコアをゼロ値で保存する
      this.$store.dispatch('score/remove')
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
</style>
