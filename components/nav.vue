<template>
  <div>
    <div class="nav navbar-default navbar-fixed-top navbar-inverse">
      <div class="navbar-header">
        <a href="/" class="navbar-brand">
          <span>XIE Yuxiang</span>
        </a>
        <button
          class="navbar-toggle"
          data-toggle="collapse"
          data-target="#navc"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <!-- navbar-header -->
      <div class="collapse navbar-collapse navbar-right" id="navc">
        <ul class="nav navbar-nav" id="nav">
          <li :class="$nuxt.$route.name == 'index' ? 'navActive' : ''"><a href="/">About me</a></li>
          <!-- <li><a href="/awards">Awards</a></li> -->
          <li :class="$nuxt.$route.name == 'publications' ? 'navActive' : ''"><a href="/publications">Publications and Papers</a></li>
          <li :class="$nuxt.$route.name == 'portfolio' ? 'navActive' : ''"><a href="/portfolio">Portfolio</a></li>
        </ul>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
  <!--nav-->
</template>

<script>
export default {};
</script>

<style scoped>
#nav{
    position: relative;
}
#nav > .navActive::after{
    content: "";
    width: 100%;
    height: 3px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
}
.navbar-default{
    background-color: #00417c;
}
.navbar-default .navbar-nav>li>a{
    color: #fff;
    font-weight: bold
}
.navbar-default .navbar-brand{
    font-size: 20px;
    color: #fff !important
}
.nav{
    padding-left: 20px;
    padding-right: 20px
}
.navbar-default .navbar-nav>li>a:hover{
    color: #d4d0d0
}
</style>