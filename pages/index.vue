<template>
  <div>
    <Nav />
    <!--nav-->
    <div id="content_box">
      <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-4">
          <ul class="content-nav">
            <!-- <li> <img src="https://s2.ax1x.com/2019/11/08/MV9Ese.png" alt="头像" style="width: 160px;" class="img-responsive"></li> -->
            <li>
              <img
                src="https://xie-picture.oss-cn-shenzhen.aliyuncs.com/%E7%BD%91%E7%AB%99%E5%9B%BE%E7%89%87/avatar.png"
                alt="头像"
                style="width: 160px"
                class="img-responsive"
              />
            </li>
            <li><a href="/cv">CV</a></li>
            <li><a href="/photograph">Photograph</a></li>
            <!-- <li><a href="#">Contact</a></li> -->
          </ul>
        </div>
        <div class="col-xs-12 col-sm-8 col-md-8">
          <div class="content-details">
            <p>Welcome to my personal webpage.</p>

            <p style="text-indent: 2em">
              I am a senior from Guangdong Ocean University and majoring Editing
              and Publishing at School of literature and News Communication.
            </p>

            <p style="text-indent: 2em">
              First of all, my major teaches me how to make great use of digital
              media. What's more, in the fantastic world of Editing and
              Publishing, there is no doubt that the advanced technology and
              creative attitude enrich my mind, enhance my skills and improve my
              abilities. Moreover, I believe in that "no pains, no gains". With
              my best efforts, I finally find my goals in this field that I want
              to become a journalist.
            </p>

            <p style="text-indent: 2em">
              And then, on the leisure time, I take good advantages of enjoying
              my free time, especially on the holidays, every minute counts!
              Keeping fit, playing Chinese Zheng as well as taking photos are my
              favourite. Carrying my bag packs to travel through the misery
              nature and to taste various culture also make me lighthearted!
            </p>

            <p style="text-indent: 2em">
              Next year I want to study aboard and learn more about digital
              media.
            </p>

            <p style="margin-top: 40px">Contact information:</p>

            <p>E-mail: 584620880@qq.com</p>

            <p>QQ:584620880</p>

            <p>Wechat: Sunduring</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/nav'
import Footer from '../components/footer'
export default {
  name:'Index',
  components:{
    Nav,
    Footer
  }
};
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
