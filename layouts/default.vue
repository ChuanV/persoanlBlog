<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
    font-family: "PT Serif", serif;
    font-size: 18px;
    font-weight: 550;
    color: #111;
    -webkit-text-size-adjust: 100%;
    -webkit-font-feature-settings: "kern" 1;
    -moz-font-feature-settings: "kern" 1;
    -o-font-feature-settings: "kern" 1;
    font-feature-settings: "kern" 1;
    font-kerning: normal;
    font-variant-ligatures: common-ligatures contextual;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "alt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    overflow-x: hidden;
}

p{
    letter-spacing:0.4px;
    word-spacing:-1px;
}
li{
    list-style: none;
}
body{
  width: 100%;
  height: 100%;
}
.page{
    min-height: 100%;
    position: relative;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.content-details{
    margin-left: 50px;
    margin-top: 50px;
    margin-right: 150px;
}
@media (max-width: 768px) {
  .h1 ,h1{
    font-size: 30px;
  }
  .h2,h2 {
    font-size: 24px;
  }
  .content-details{
    margin: 20px 20px;
  }
}
</style>
