<template>
  <div class="page">
    <Nav />
    <!--nav-->
     <div id="content_box" class="container">
            <h1 >Publications and Papers</h1>
            <ul>
                <li><a href="#publications-subjects">   1.Publications by Subjects</a></li>
                <li><a href="#publications-news">    2.Pear Video News</a></li>
            </ul>
        <div class="publications-subjects" id="publications-subjects">
            <div class="panel">
                <div class="panel-heading">
                   Publications by Subjects
                </div>
                <div class="panel-body">
                    <p class="content-title"><i>The influence and thinking of artificial intelligence on journalism, Research on Transmission Competence</i> 2019（09）: 243</p>
                    <p style="text-indent: 2em;">I published a paper entitled The Influence and Thinking of Artificial Intelligence on Journalism after studying the Topic Selection and Writing of Thesis in my junior year. Nowadays, artificial intelligence has been widely used in various industries in society. Journalism is also further integrating with artificial intelligence technology. From my point of view, artificial intelligence can save us a lot of resources, especially in the digital media industry, which has a great prospect and potential shortly soon. In this paper, I explore more details about how AI influence Journalism and figure out the most critical factor.</p>
                    <div class="d-or-b">
                        <a href="/static/PDF/AI.pdf" target="blank" download="/static/PDF/AI.pdf">PDF</a>
                        <a href="/static/PDF/AI.pdf" target="blank">Slides</a>
                    </div>
                </div><!--panel-body -->
            </div><!--panel -->
        </div> <!--publications-subjects -->
        <div class="publications-news" id="publications-news">
            <div class="panel">
                <div class="panel-heading">
                    Pear Video News
                </div>
                <div class="panel-body">
                    <div class="news-videos">
                        <!-- <div> -->
                        <a href="https://video.pearvideo.com/mp4/adshort/20181224/cont-1496637-13402089_adpkg-ad_hd.mp4" target="_blank" class="videos-img">
                            <img class="img-responsive " src="https://image.pearvideo.com/cont/20181224/cont-1496637-11766372.png" alt="班宠！34个男生为全班唯一女生庆生">
                            <p>班宠！34个男生为全班唯一女生庆生</p>
                        </a>
                        <a href="https://video.pearvideo.com/mp4/adshort/20181220/cont-1485392-12596990-153425_adpkg-ad_hd.mp4" target="_blank" class="videos-img">
                            <img class="img-responsive " src="https://image.pearvideo.com/main/20181220/12596990-153530-0.png" alt="情侣二战考研：睡觉偷懒会被对方打">
                            <p>情侣二战考研：睡觉偷懒会被对方打</p>
                        </a>
                    <!-- </div> -->
                        <a href="https://video.pearvideo.com/mp4/adshort/20181113/cont-1475638-11966063-221921_adpkg-ad_hd.mp4" target="_blank" class="videos-img">
                            <img class="img-responsive " src="https://image1.pearvideo.com/main/20181113/11966063-221929-0.png" alt="她大学穷游14省:写稿送外卖挣路费">
                            <p>她大学穷游14省:写稿送外卖挣路费</p>
                        </a>
                        <a href="https://video.pearvideo.com/mp4/adshort/20181120/cont-1479172-11966063-135216_adpkg-ad_hd.mp4" target="_blank" class="videos-img">
                            <img class="img-responsive " src="https://image1.pearvideo.com/main/20181120/11966063-134200-0.png" alt="奶爸推婴儿车跑马：儿子中途睡着了">
                            <p>奶爸推婴儿车跑马：儿子中途睡着了</p>
                        </a>

                        <a href="https://video.pearvideo.com/mp4/adshort/20181107/cont-1471275-11966063-140629_adpkg-ad_hd.mp4" target="_blank" class="videos-img">
                            <img class="img-responsive " src="https://image1.pearvideo.com/main/20181107/11966063-140703-0.png" alt="奶爸推婴儿车跑马：儿子中途睡着了">
                            <p>货车运外卖进大学,学生:食堂人太多</p>
                        </a>
                        <a href="https://video.pearvideo.com/mp4/adshort/20181107/cont-1471150-11966063-114100_adpkg-ad_hd.mp4" target="_blank" class="videos-img">
                            <img class="img-responsive " src="https://image1.pearvideo.com/main/20181107/11966063-114123-0.png" alt="奶爸推婴儿车跑马：儿子中途睡着了">
                            <p>放不下心！阿姨花海拍照保安贴身跟</p>
                        </a>
                    </div><!-- news-videos -->
                </div><!-- panel-body -->
            </div><!--panel -->
        </div> <!--publications-news -->
    </div><!-- content_box -->
   <Footer />
  </div>
</template>

<script>
import Nav from '../components/nav'
import Footer from '../components/footer'
export default {
  name:'Pubilcations',
  components:{
    Nav,
    Footer
  }
};
</script>

<style>
.page{
    min-height: 100%;
    position: relative;
}
*{
    padding: 0;
    margin: 0;
}
.publications-subjects{
    margin-top: 20px;
}
.panel-heading{
    font-weight: bold;
    color: #00417c;
}
.content-title{
    /* font-weight: bold; */
}
.videos-img img{
    width: 300px;
    height: auto;
    cursor:default;
}
.news-videos  a{
    position: relative;
    display: inline-block;
    margin: 10px;
}
a[class="videos-img"]::before{
    content: "";
    width: 40px;
    height: 40px;
    background-image:url(/img/play_icon80.png);
    background-repeat:no-repeat;
    background-size: cover;
    z-index: 999;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-100%);
}
.news-videos  a > p{
    margin-top: 4px;
    color: #000;
}
    .news-videos  a > p:hover{
    color: #337ab7;
}
#content_box h1{
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    color: #337ab7
}
#content_box ul li{
    list-style: disc;
    margin-left: 30px;
}
</style>