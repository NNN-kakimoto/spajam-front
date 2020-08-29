<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        shake!
      </h1>
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
      size : 28, // 加速度で良さそうな数値 これを超えたら一回とする 
      start_time : 0,
      end_time : 0,
      shake_count : 0
    }
  }, 
  mounted : function () {
    this.addDevicemotion();
  },
  methods : {
    addDevicemotion() {
      window.addEventListener('devicemotion', this.shake);
    },
    shake(e) {
      const y = e.acceleration.y;
      
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
