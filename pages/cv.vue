<template>
<div class="page">
    <Nav />
    <div id="content_box">
        <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 leftnav">
                <ul class="content-nav">
                    <li><a href="/cv">CV</a></li>
                    <li><a href="/photograph">Photograph</a></li>
                    <!-- <li><a href="#">Contact</a></li> -->
                </ul>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-8 pic">
                <div class="content-details">
                  <h2 class="mycv">My CV</h2>
                  <p>A PDF version of my CV can be downloaded <ins><a href="/PDF/XIE Yuxiang-CV.pdf" download="/static/PDF/XIE Yuxiang-CV.pdf" >HERE</a></ins></p>
                  <div class="cv-details">
                        <iframe src="/pdf-html/XIEYuxiang_CV.pdf.html" border="0" width="100%" height="1056px" frameborder="no" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>


                  </div><!--cv-->
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
  
</template>

<script>
import Nav from "../components/nav";
import Footer from "../components/footer";
export default {
  name: "Cv",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>

</style>