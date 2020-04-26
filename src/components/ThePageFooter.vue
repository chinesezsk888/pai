<template>
  <div class="page__footer">
    Copyright © 2020 The Paper All rights reserved.上海东方报业有限公司 | 沪ICP证：沪B2-20170116 | 沪ICP备14003370号 | 互联网新闻信息服务许可证：3112014002
    <div
      style="width: 100%; margin: 0px auto; padding: 0px;"
      class="copyright"
    >
      <a
        ref="nofollow"
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602000299"
        style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
      >
        <img src="http://139.196.248.235:8089/www/v3/img/ghs.png" style="float:left;">
        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#FFFFFF;">沪公网安备 31010602000299号
        </p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ThePageFooter'
}
</script>
<style lang="scss" scoped>
  .page__footer {
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    background: #222;
    color: #fff;
    padding: 20px 0;
  }
</style>
