<template>
  <div
    v-if="mediaType === '0' "
    class="detail__video__preview"
  >
    <p>素材速览</p>
    <div class="dvp__box">
      <ul>
        <li
          v-for="(item,index) in medioInfo.snapShotUrl"
          :key="index"
        >
          <img :src="item">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPreview',
  components: {},
  props: {
    // eslint-disable-next-line vue/require-default-prop
    medioInfo: Object,
    // eslint-disable-next-line vue/require-default-prop
    mediaType: String
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.detail__video__preview{
  margin-top: 80px;
  p {
    font-size:24px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:33px;
    margin-bottom: 20px;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      width: 180px;
      height: 101px;
      margin-right: 20px;
      @media screen and (max-width: 1180px) {
        width: 150px;
        height: 83px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
