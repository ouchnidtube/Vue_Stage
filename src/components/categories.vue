<template>
    <div class="categorie">
        <div class="all_tit_cate">
            <p class="tit_cate">WOODMART COLLECTIONS</p>
            <h3 class="pro_tit">FEATURED CATEGORIES</h3>
            <p class="tit_cate">WoodMart is a powerful eCommerce theme for WordPress.</p>
        </div>
        <div class="cateList container">
            <div class="cate">
                <div class="title_cate">
                   <h3>Furniture</h3>
                   <p>29 products</p>
               </div>
           </div>
           <div class="list_cate">
            <div class="categ">
                <div class="title_cate">
                   <h3>Clocks</h3>
                   <p>12 products</p>
               </div>
            </div>
            <div class="categ1">
                <div class="title_cate">
                   <h3>Accessories</h3>
                   <p>12 products</p>
               </div>
            </div>
            <div class="categ2">
                <div class="title_cate">
                   <h3>Lighting</h3>
                   <p>17 products</p>
               </div>
            </div>
            <div class="categ3">
                <div class="title_cate">
                   <h3>Toys</h3>
                   <p>12 products</p>
               </div>
            </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CategoriesPlac"
}
</script>
<style scoped>
    .all_tit_cate {
    text-align: center;
    padding: 86px 0 31px 0;
}

.cateList {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 45px;
}

.list_cate {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 45px;
}
    .cate{
        position: relative;
        background-image: url("https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/06/cat-23-860x860.jpg");
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        height: 867px;
        box-shadow: 1px 1px 2px rgb(0 0 0 / 12%);
    }
    .categ{
        position: relative;
        background-image: url("https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/06/cat-klock-430x430.jpg");
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        height: 411px;
        box-shadow: 1px 1px 2px rgb(0 0 0 / 12%);
    }
    .categ1{
        position: relative;
        background-image: url("https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/06/cat-clock-3-430x430.jpg");
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        height: 411px;
        box-shadow: 1px 1px 2px rgb(0 0 0 / 12%);
    }
    .categ2{
        position: relative;
        background-image: url("https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/06/light-cat-5-430x430.jpg");
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        height: 411px;
        box-shadow: 1px 1px 2px rgb(0 0 0 / 12%);
    }
    .categ3{
        position: relative;
        background-image: url("https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/06/Toys-cat-1-430x430.jpg");
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        height: 411px;
        box-shadow: 1px 1px 2px rgb(0 0 0 / 12%);
    }
    .title_cate {
        position: absolute;
        bottom: 27px;
        left: 42px;
     }
     .all_tit_cate {
        text-align: center;
        padding: 86px 0 31px 0;
    }
</style>