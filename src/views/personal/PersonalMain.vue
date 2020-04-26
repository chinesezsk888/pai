<template>
  <div class="personal__main__box">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'PersonalMain'
}
</script>
<style lang="scss" scoped>
.personal__main__box{
  width: 980px;
  @media screen and (max-width: 1197px) {
    width: 840px;
  }
}
</style>
