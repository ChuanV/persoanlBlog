<template>
  <div class="all">
    <div class="head404"></div>
    <div class="txtbg404">
      <div class="txtbox">
        <p>对不起，您请求的页面不存在、或已被删除、或暂时不可用</p>
        <p class="paddingbox">请点击以下链接继续浏览网页</p>
        <p>》<a href="/">返回网站首页</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "error",
};
</script>

<style>
.all{
    width: 100%;
    height: 100%;
    background-color: #494949;
    position: absolute;
}
.head404 {
  width: 580px;
  height: 234px;
  margin: 50px auto 0 auto;
  background: url(/img/head404.png) no-repeat;
}

.txtbg404 {
  width: 499px;
  height: 169px;
  margin: 10px auto 0 auto;
  background: url(/img/txtbg404.png) no-repeat;
}

.txtbg404 .txtbox {
  width: 390px;
  position: relative;
  top: 30px;
  left: 60px;
  color: #eee;
  font-size: 13px;
}

.txtbg404 .txtbox p {
  margin: 5px 0;
  line-height: 18px;
}

.txtbg404 .txtbox .paddingbox {
  padding-top: 15px;
}

.txtbg404 .txtbox p a {
  color: #eee;
  text-decoration: none;
}

.txtbg404 .txtbox p a:hover {
  color: #fc9d1d;
  text-decoration: underline;
}
</style>