<template>
    <slider-show></slider-show>
    <carousel-slide></carousel-slide>
    <main-content></main-content>
    <footer-section></footer-section>
</template>
  
<script>
    import SliderShow from './SliderShow.vue';
    import CarouselSlide from './CarouselSlide.vue';
    import MainContent from './mainContent.vue';
    import FooterSection from './FooterSection.vue';
    
export default {
      name: 'HomePage',
      components: {
        SliderShow,
        CarouselSlide,
        MainContent,
        FooterSection,
      }
}
</script>
  
<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    overflow-x: hidden;
  }  
</style>