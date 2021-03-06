<template>
  <div>
    <footer class="footer">
      <p class="footer-p">
        Copyright © 2019 - {{ year }} <a href="/">{{host}}</a> All Rights
        Reserved.
        <!-- <a href="http://www.beian.miit.gov.cn/" target="_blank"
          >粤ICP备19142068号</a
        > -->
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      host:'/'
    };
  },
  mounted(){
    this.host = window.location.host
  }
};
</script>

<style scoped>
.footer {
  margin-top: 20px;
  /* position: fixed; */
  /* bottom: 0;
  left: 50%;
  transform: translateX(-50%); */
  display: flex;
  justify-content: center;
}
.footer-p {
  font-size: 0.4rem;
}
.footer a {
  color: #111;
}
</style>
