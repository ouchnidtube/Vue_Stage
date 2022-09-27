<template>
    <transition>
        <div class="sliderShow">
            <div class="slider_select">
                    <div class="slider" v-for="(slider, index) in sliders" :key="index">
                     <div class="iFgbdf" v-if="visibleChange==slider.id">
                        <div class="left_slidershow">
                      <span style="font-weight:bold;color:#777;">{{ slider.subTitle }}</span>
                      <h2 class="title_pro">{{ slider.title }}</h2>
                       <div style="position:relative;margin-top:5px;;margin-bottom:5px;" v-html="slider.templateColor"></div>
                      <span class="details_pro">{{ slider.detailPro }}</span>
                      <div class="img_pros">
                         <img v-for="img in slider.imgs" :key="img" :src="img" alt="">
                      </div>
                         <span class="price_pro">{{ slider.price }}</span>
                      </div>
                      <div class="right_img">
                         <img :src="slider.productImg" alt="img pri">
                      </div>
                     </div>
                  </div>
                <div class="change">
                    <div class="right sameStylechange" @click="next()" style="cursor:pointer;"><i class="fa-solid fa-chevron-right"></i></div>
                    <div class="left sameStylechange" @click="prev()" style="cursor:pointer;"><i class="fa-solid fa-chevron-left"></i></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        const templateColor = `<span style="font-weight:bold;">COLOR: 
            <span class="color1" style="left: 75px;top: -3px;position: absolute;background-color:rgb(47, 147, 147);width:29px;height:29px;border-radius:50%;border-top-right-radius:0px;"></span>
            <span class="color1" style="left: 123px;top: -3px;position: absolute;background-color:rgb(205, 68, 65);width:29px;height:29px;border-radius:50%;border-top-right-radius:0px;"></span>
            <span class="color1" style="left: 179px;top: -3px;position: absolute;background-color:#ECA141;width:29px;height:29px;border-radius:50%;border-top-right-radius:0px;"></span>
        </span>`;
        return {
            sliders: [
                {
                    id: "1",
                    title: 'Simple - Rock Chair.',
                    detailPro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                    imgs: [
                        'https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/swatch-main-demo-1.jpg',
                        'https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/swatch-main-demo-1-2.jpg',
                        'https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/swatch-main-demo-1-3.jpg',
                        'https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/swatch-main-demo-1-3.jpg',
                    ],
                    price: "$199.00",
                    productImg: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/slider-main-demo-1.jpg"
                },
                {
                    id: "2",
                    title: 'Eames - Side Chair.',
                    detailPro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                    templateColor,
                    price: "Only $99.00",
                    productImg: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/slider-main-demo-2.jpg"
                },
                {
                    id: "3",
                    subTitle: "CAPPELLINI",
                    title: 'Wooden Lounge Chairs.',
                    detailPro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                    price: "$999.00",
                    productImg: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/slider-main-demo-3.jpg"
                },
            ],
            visibleChange: "1",
        }
    },
    methods: {
        next(){
            if(this.visibleChange == "3"){
                this.visibleChange == "1"
            }else{
                this.visibleChange++
            }
        },
        prev(){
            if(this.visibleChange == "1"){
                this.visibleChange == "3"
            }else{
                this.visibleChange--
            }
        },
    },
}
</script>

<style scoped>

    .img_pros{
        display:flex;
        width:100px;
    }
    .iFgbdf {
    display: flex;
} 
    .slider {
        display: flex;
        background-color: #F8F8F8;
        margin-left: 717px;
    }
    h2.title_pro {
        font-weight: bolder;
        font-size: 80px;
    }

    .sliderShow {
        background-color: #F8F8F8;
        position: relative;
    }

    .img_pros img {
        padding: 17px 0 17px 0;
     }
     span.price_pro {
        font-size: 53px;
    }
    .right_img {
    overflow: hidden;
    height: 589px;
    padding-right: 276px;
    }
    .right_img img {
       width: 670px;
       margin-top: 80px;
    }
    .left_slidershow {
       padding: 52px;
    }
    .sameStylechange {
       background-color: white;
       padding: 25px;
       position: absolute;
       transition:.5s;
       top: calc(50% - 25px);
    }
    .sameStylechange:hover{
        font-size: 25px;
        transition:.5s;
        top: calc(50% - 25px);
    }
    .right.sameStylechange {
       right: 0;
    }

    .left.sameStylechange {
       left: 0;
    }
</style>