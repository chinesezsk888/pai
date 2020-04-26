<template>
  <div class="modifier__box">
    <span>{{ changeIntegral }}</span>
    <span>{{ unit }}</span>
    <span @click="addChangeIntegral()" />
    <span @click="reduceChangeIntegral()" />
  </div>
</template>

<script>
export default {
  name: 'Modifier',
  props: {
    changeIntegral: {
      default () {
        return {}
      },
      type: String
    },
    unit: {
      default () {
        return {}
      },
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    addChangeIntegral () {
      this.$emit('addIntegral')
    },
    reduceChangeIntegral () {
      this.$emit('reduceIntegral')
    }
  }
}
</script>
<style lang="scss" scoped>
.modifier__box {
  height: 42px;
  border-radius:2px;
  border:1px solid rgba(243,243,244,1);
  padding-left: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-right: 25px;
  overflow: hidden;
  & span:nth-child(1) {
    font-size:24px;
    font-weight:400;
    color:rgba(0,0,0,1);
    font-family: RobotoCondensed-Regular;
    line-height:28px;
  }
  & span:nth-child(2) {
    font-size:14px;
    font-weight:300;
    color:rgba(0,0,0,1);
    line-height:28px;
  }
  & span:nth-last-child(2) {
    width: 17px;
    height: 21px;
    border-left: 1px solid rgba(243,243,244,1);
    border-top: 1px solid rgba(243,243,244,1);
    position: absolute;
    bottom: 0;
    right: 0;
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-top: 5px solid #333333;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);;
    }
  }
  & span:nth-last-child(1) {
    width: 17px;
    height: 21px;
    border-left: 1px solid rgba(243,243,244,1);
    position: absolute;
    top: 0;
    right: 0;
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 5px solid #333333;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);;
    }
  }
}
</style>
