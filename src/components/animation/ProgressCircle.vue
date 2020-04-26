<template>
  <div>
    <div class="rect-box" :style="{'width':size+'px','height':size+'px'}">
      <div class="rect left" :style="{'width':size/2+'px','height':size+'px'}">
        <div ref="leftCircle" class="circle" :style="{'width':size+'px','height':size+'px'}" />
      </div>
      <div class="rect right" :style="{'width':size/2+'px','height':size+'px'}">
        <div ref="rightCircle" class="circle" :style="{'width':size+'px','height':size+'px'}" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProgressCircle',
  props: {
    bl: {
      default: 0,
      type: Number
    },
    size: {
      default: 150,
      type: Number
    },
    color: {
      default: '#C10000',
      type: String
    }
  },
  data () {
    return {
      baseValue: 3.6 // 每1% 对应 3.6deg
    }
  },
  watch: {
    bl () {
      this.drawCir()
    }
  },
  mounted () {
    this.drawCir()
  },
  methods: {
    drawCir () {
      let value = this.bl * 3.6
      if (this.bl <= 50 && this.bl > 0) {
        this.$refs.rightCircle.style.transform = 'rotate(' + (45 + value) + 'deg)'
        this.$refs.rightCircle.style.borderLeft = '4px solid ' + this.color
        this.$refs.rightCircle.style.borderBottom = '4px solid ' + this.color
      } else if (this.bl > 50) {
        this.$refs.rightCircle.style.borderLeft = '4px solid ' + this.color
        this.$refs.rightCircle.style.borderBottom = '4px solid ' + this.color
        this.$refs.rightCircle.style.transform = 'rotate(225deg)'
        setTimeout(() => {
          this.$refs.leftCircle.style.transform = 'rotate(' + (45 + value) + 'deg)'
          this.$refs.leftCircle.style.borderLeft = '4px solid ' + this.color
          this.$refs.leftCircle.style.borderBottom = '4px solid ' + this.color
        }, 200)
      } else {
        this.$refs.rightCircle.style.transform = ''
        this.$refs.rightCircle.style.borderLeft = ''
        this.$refs.rightCircle.style.borderBottom = ''
        this.$refs.leftCircle.style.transform = ''
        this.$refs.leftCircle.style.borderLeft = ''
        this.$refs.leftCircle.style.borderBottom = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.rect-box{
  box-sizing: border-box;
  position: relative;
}
.rect{
  box-sizing: border-box;
  position: absolute;
  overflow:hidden;
  top: 0;
}
.left{
  left: 0;
  .circle{
    left:0;
  }
}
.right{
  right: 0;
   .circle{
    right:0;
  }
}
.rect > div{
  border:4px solid transparent;
  border-radius: 50%;
  box-sizing: border-box;
  position: absolute;
  top:0;
  z-index: 3;
  transform: rotate(45deg);
  transition: all 0.4s ease-in-out;
}
</style>
