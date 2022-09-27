<template>
    <div class="allProduct">
        <div class="all_tit_products">
            <p class="tit_cate">WOODMART COLLECTIONS</p>
            <h3 class="pro_tit">FEATURED CATEGORIES</h3>
            <p class="tit_cate">WoodMart is a powerful eCommerce theme for WordPress.</p>
        </div>
        <div class="list_bestS">
            <ul>
                <li class="cftc best_seller"><a @click="activeTibs= '1'" :class="[activeTibs==='1'?'active_link':'']" href="#1">BEST SELLERS</a></li>
                <li class="cftc featured"><a @click="activeTibs= '2'" :class="[activeTibs==='2'?'active_link':'']" href="#2">FEATURED</a></li>
                <li class="cftc sales"><a @click="activeTibs= '3'" :class="[activeTibs==='3'?'active_link':'']" href="#3">SALES</a></li>
            </ul>
        </div>
        <div class="listprod container">
            <div class="product" v-if="activeTibs==='1'">
                <div class="bestSeller pro" v-for="(seller,index) in sellers" :key="index">
                    <div class="img_prod">
                    <img :src="seller.img" alt="">
                    <div class="colors_icone">
                        <div class="colors">Color: </div>
                        <div class="iconComp">
                            <i class="fa-solid fa-code-compare" title="Compare" style="cursor:pointer;"></i>
                        </div>
                    </div>
                </div>
                <div class="details_prod">
                    <div class="content_top">
                        <h3><router-link :to="seller.Link">{{ seller.title }}</router-link></h3>
                        <p class="cate_name">{{ seller.categery }}</p>
                        <p class="price_produ">{{ seller.price }}</p>
                    </div>
                    <div class="more_details_pro">
                        <div class="chic">
                            <p class="more_detai">{{ seller.description }}</p>
                            <div class="more_xdrx">
                                <span>...</span>
                            </div>
                        </div>
                        <div class="addtocard_view">
                            <div class="icone_favorit">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div class="add_tocard">
                                <router-link :to="seller.Link"><button type="submit">View products</button></router-link>
                            </div>
                            <div class="icone_search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="product" v-if="activeTibs==='2'">
                <div class="featureds pro" v-for="(featured,index) in featureds" :key="index">
                    <div class="img_prod">
                    <img :src="featured.img" alt="">
                    <div class="colors_icone">
                        <div class="colors">Color: </div>
                        <div class="iconComp">
                            <i class="fa-solid fa-code-compare" title="Compare" style="cursor:pointer;"></i>
                        </div>
                    </div>
                </div>
                <div class="details_prod">
                    <div class="content_top">
                        <h3><a href="#">{{ featured.title }}</a></h3>
                        <p class="cate_name">{{ featured.categery }}</p>
                        <p class="price_produ">{{ featured.price }}</p>
                    </div>
                    <div class="more_details_pro">
                        <div class="chic">
                            <p class="more_detai">{{ featured.description }}</p>
                            <div class="more_xdrx">
                                <span>...</span>
                            </div>
                        </div>
                        <div class="addtocard_view">
                            <div class="icone_favorit">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div class="add_tocard">
                                <button type="submit">View products</button>
                            </div>
                            <div class="icone_search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="product" v-if="activeTibs==='3'">
                <div class="sales pro"  v-for="(sale,index) in sales" :key="index">
                    <div class="img_prod">
                    <img :src="sale.img" alt="">
                    <div class="colors_icone">
                        <div class="colors">Color: </div>
                        <div class="iconComp">
                            <i class="fa-solid fa-code-compare" title="Compare" style="cursor:pointer;"></i>
                        </div>
                    </div>
                </div>
                <div class="details_prod">
                    <div class="content_top">
                        <h3><a href="#">{{ sale.title }}</a></h3>
                        <p class="cate_name">{{ sale.categery }}</p>
                        <p class="price_produ">{{ sale.price }}</p>
                    </div>
                    <div class="more_details_pro">
                        <div class="chic">
                            <p class="more_detai">{{ sale.description }}</p>
                            <div class="more_xdrx">
                                <span>...</span>
                            </div>
                        </div>
                        <div class="addtocard_view">
                            <div class="icone_favorit">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div class="add_tocard">
                                <button type="submit">View products</button>
                            </div>
                            <div class="icone_search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            sellers: [
                {
                    id: "1",
                    title: 'Wooden single drawer',
                    categery: "Furniture",
                    description:"Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur.",
                    img: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/product-furniture-4-2.jpg",
                    price: "$299.00 - $399.00",
                    Link: "/shop/furniture/wooden-single-drawer/",
                },
                {
                    id: "2",
                    title: 'Smart watches wood edition',
                    categery: "Accessories, Clock",
                    description:"Himenaeos parturient nam a justo placerat lorem erat pretium a fusce pharetra pretium enim sagittis ut nunc neque torquent sem a leo. Dictumst himenaeos primis torquent ridiculus",
                    img: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-accessories-8-430x491.jpg",
                    price: "$599.00",
                    Link: "/shop/accessories/smart-watches-wood-edition",
                },
                {
                    id: "3",
                    title: 'Panton tunior chair',
                    categery: "Furniture",
                    description:"Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum.",
                    img: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/product-furniture-19-3.jpg",
                    price: "$199.00",
                    Link: "/shop/furniture/panton-оunior-chair",
                },
                {
                    id: "4",
                    title: 'Decoration wooden present',
                    categery: "Accessories",
                    description:"Nam gravida vulputate est venenatis eu at ullamcorper consectetur parturient suspendisse a elit lobortis ut convallis vestibulum vulputate nunc praesent mattis sem faucibus risus sociosqu.Dapibus curae a ac vestibulum a magnis ullamcorper orci a iaculis adipiscing augue a massa a torquent feugiat a.Scelerisque vestibulum.",
                    img: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-accessories-10.jpg",
                    price: "$89.00",
                    Link: "/shop/accessories/decoration-wooden-present/",
                },
                {
                    id: "5",
                    title: 'Wine bottle lantern',
                    categery: "Accessories",
                    description:"Consequat a scelerisque suspendisse vel et eget eu vitae adipiscing nibh scelerisque semper cum adipiscing facilisis adipiscing est accumsan lorem vestibulum. Aliquet mus a aptent ullam corper metus accumsan. Habitasse a purus nec ipsum a urna ac ullamcorper varius metus blandit posuere.",
                    img: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-11.jpg",
                    price: "$399.00",
                    Link: "/shop/accessories/ridiculus-massa-ac-nullam",
                },
                {
                    id: "6",
                    title: 'Eames lounge chair',
                    categery: "Furniture",
                    description:"Consequat a scelerisque suspendisse vel et eget eu vitae adipiscing nibh scelerisque semper cum adipiscing facilisis adipiscing est accumsan lorem vestibulum.",
                    img: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/product-furniture-8.jpg",
                    price: "$399.00",
                    Link: "/",
                },
                {
                    id: "7",
                    title: 'Decoration for table pen',
                    categery: "Accessories",
                    description:"Adipiscing neque a a montes parturient scelerisque molestie magnis adipiscing mus porta parturient est a blandit fusce adipiscing augue per magnis venenatis ullamcorper.",
                    img: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-14.jpg",
                    price: "$359.00",
                    Link: "/shop/accessories/ridiculus-massa-ac-nullam",
                },
                {
                    id: "8",
                    title: 'iPhone Dock',
                    categery: "Accessories",
                    description:"Adipiscing neque a a montes parturient scelerisque molestie magnis adipiscing mus porta parturient est a blandit fusce adipiscing augue per magnis venenatis ullamcorper.",
                    img: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/04/dock-black-walnut-ip6-grid-A4_7.jpg",
                    price: "$399.00",
                    Link: "/shop/accessories/iphone-dock",
                },
            ],
            featureds: [
                {
                    id: "1",
                    title: 'Penatibus parturient orci morbi',
                    categery: "Toys",
                    description:"Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-18.jpg",
                    price: "$449.00",
                    Link: "/",

                },
                {
                    id: "2",
                    title: 'Wooden bow tie man',
                    categery: "Accessories",
                    description:"Himenaeos parturient nam a justo placerat lorem erat pretium a fusce pharetra pretium enim sagittis ut nunc neque torquent sem a leo. Dictumst himenaeos primis torquent ridiculus",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/08/product-accessories-1-263x300.jpg",
                    price: "$395.00",
                    Link: "/",
                },
                {
                    id: "3",
                    title: 'Nerd wooden chair',
                    categery: "Furniture",
                    description:"Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-1.jpg",
                    price: "$599.00",
                    Link: "/",
                },
                {
                    id: "4",
                    title: 'Panton tunior chair',
                    categery: "Furniture",
                    description:"Nam gravida vulputate est venenatis eu at ullamcorper consectetur parturient suspendisse a elit lobortis ut convallis vestibulum vulputate nunc praesent mattis sem faucibus risus sociosqu.Dapibus curae a ac vestibulum a magnis ullamcorper orci a iaculis adipiscing augue a massa a torquent feugiat a.Scelerisque vestibulum.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-clock-1-2.jpg",
                    price: "$199.00",
                    Link: "/",
                },
                {
                    id: "5",
                    title: 'Wine bottle lantern',
                    categery: "Accessories",
                    description:"Consequat a scelerisque suspendisse vel et eget eu vitae adipiscing nibh scelerisque semper cum adipiscing facilisis adipiscing est accumsan lorem vestibulum. Aliquet mus a aptent ullam corper metus accumsan. Habitasse a purus nec ipsum a urna ac ullamcorper varius metus blandit posuere.",
                    img: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-11.jpg",
                    price: "$399.00",
                    Link: "/",
                },
                {
                    id: "6",
                    title: 'Eames lounge chair',
                    categery: "Furniture",
                    description:"Consequat a scelerisque suspendisse vel et eget eu vitae adipiscing nibh scelerisque semper cum adipiscing facilisis adipiscing est accumsan lorem vestibulum.",
                    img: "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/product-furniture-8.jpg",
                    price: "$399.00",
                    Link: "/",
                },
                {
                    id: "7",
                    title: 'Wooden naïve chair',
                    categery: "Accessories",
                    description:"Adipiscing neque a a montes parturient scelerisque molestie magnis adipiscing mus porta parturient est a blandit fusce adipiscing augue per magnis venenatis ullamcorper.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-3-2.jpg",
                    price: "$119.00",
                    Link: "/",
                },
                {
                    id: "8",
                    title: 'Wine bottle lantern',
                    categery: "Accessories",
                    description:"Adipiscing neque a a montes parturient scelerisque molestie magnis adipiscing mus porta parturient est a blandit fusce adipiscing augue per magnis venenatis ullamcorper.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/08/product-furniture-11.jpg",
                    price: "$399.00",
                    Link: "/",
                },
            ],
            sales: [
                {
                    id: "1",
                    title: 'Best clock parallels',
                    categery: "Furniture",
                    description:"Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-clock-1-2.jpg",
                    price: "$555.00",
                    Link: "/",
                },
                {
                    id: "2",
                    title: 'Euismod adipiscing egestas',
                    categery: "Cooking",
                    description:"Himenaeos parturient nam a justo placerat lorem erat pretium a fusce pharetra pretium enim sagittis ut nunc neque torquent sem a leo. Dictumst himenaeos primis torquent ridiculus",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/cooking11.jpg",
                    price: "$199.00",
                    Link: "/",
                },
                {
                    id: "3",
                    title: 'Nerd wooden chair',
                    categery: "Furniture",
                    description:"Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-1.jpg",
                    price: "$599.00",
                    Link: "/",
                },
                {
                    id: "4",
                    title: 'Classic wooden chair',
                    categery: "Furniture",
                    description:"Nam gravida vulputate est venenatis eu at ullamcorper consectetur parturient suspendisse a elit lobortis ut convallis vestibulum vulputate nunc praesent mattis sem faucibus risus sociosqu.Dapibus curae a ac vestibulum a magnis ullamcorper orci a iaculis adipiscing augue a massa a torquent feugiat a.Scelerisque vestibulum.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/furniture10-768x878.jpg",
                    price: "$5.00",
                    Link: "/",
                },
                {
                    id: "5",
                    title: 'Wooden single drawer',
                    categery: "Accessories",
                    description:"Consequat a scelerisque suspendisse vel et eget eu vitae adipiscing nibh scelerisque semper cum adipiscing facilisis adipiscing est accumsan lorem vestibulum. Aliquet mus a aptent ullam corper metus accumsan. Habitasse a purus nec ipsum a urna ac ullamcorper varius metus blandit posuere.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-4-2.jpg",
                    price: "$249.00 – $399.00",
                    Link: "/",
                },
                {
                    id: "6",
                    title: 'Augue adipiscing euismod',
                    categery: "Toys",
                    description:"Consequat a scelerisque suspendisse vel et eget eu vitae adipiscing nibh scelerisque semper cum adipiscing facilisis adipiscing est accumsan lorem vestibulum.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-15.jpg",
                    price: "$99.00",
                    Link: "/",
                },
                {
                    id: "7",
                    title: 'Penatibus parturient orci morbi',
                    categery: "Toys",
                    description:"Adipiscing neque a a montes parturient scelerisque molestie magnis adipiscing mus porta parturient est a blandit fusce adipiscing augue per magnis venenatis ullamcorper.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-18.jpg",
                    price: "$599.00",
                    Link: "/",
                },
                {
                    id: "8",
                    title: 'Wine bottle lantern',
                    categery: "Accessories",
                    description:"Adipiscing neque a a montes parturient scelerisque molestie magnis adipiscing mus porta parturient est a blandit fusce adipiscing augue per magnis venenatis ullamcorper.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/08/product-furniture-11.jpg",
                    price: "$359.00",
                    Link: "/",
                },
            ],
            activeTibs: "1",
        }
    },   
}
</script>
<style scoped>
    .product {
    display: contents;
}
.active_listP{
    display: block !important;
}
    .colors_icone {
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 14px;
    transform: translateY(0);
    transition:.5s;
}
p.more_detai {
    margin: 0;
}
.pro{
    transition:.5s;
}
.pro:hover{
    padding: 10px;
    transition:.5s;
}
.pro:hover .colors_icone{
    transform: translateY(-54px);
    transition:.5s;
}
p.more_detai {
    margin: 0;
}
.addtocard_view {
    display: flex;
    justify-content: space-around;
    padding-top: 11px;
}
.more_details_pro{
    display:none;
    position: absolute;
    transition:.5s;
    background-color: white;
    z-index: 1000;

}
.pro:hover .more_details_pro{
    transition:.5s;
    display:block;
    padding: 7px;
    padding-bottom: 28px;
}
.icone_favorit {
    font-size: 23px;
    margin: auto 0;
    cursor:pointer;
}

.add_tocard button {
    padding: 10px 29px;
    border-radius: 5px;
    border: 0;
    background-color: #83b735;
    color: white;
    font-weight: bold;
}

.icone_search {
    font-size: 23px;
    margin: auto 0;
    cursor:pointer;

}
.more_xdrx {
    background-color: white;
    transition:.5s;
}

.chic {
    position: relative;
    overflow: hidden;
    height: 53px;
}
.chic:hover .more_xdrx {
    transition:.5s;
    opacity: 0.8;
}
    .listprod{
        display:grid;
        grid-template-columns: auto auto auto auto;
        grid-gap:25px;
    }
    .all_tit_products{
        text-align: center;
        padding: 86px 0 31px 0;
    }
    .img_prod img {
        position: relative;
    width: 300px;
    cursor:pointer;
}
.img_prod img::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.details_prod h3 a {
    color: black;
    text-decoration: none;
    font-size: 18px;
}

.details_prod {
    text-align: center;
    position: relative;
}

.img_prod {
    text-align: center;
    position: relative;
    overflow: hidden;
    height: 343px;
}

p.price_produ {
    color: #83b735;
    font-weight: bolder;
}

p.cate_name {
    margin-bottom: 8px;
}
.list_bestS ul {
    display: flex;
}
li.cftc {
    display: block;
}
.list_bestS {
    display: flex;
    justify-content: center;
}
.cftc a {
    color: rgba(51,51,51,.7);
    text-decoration: none;
    margin: 15px;
    position: relative;
}
.active_link{
    color: black !important;
    font-weight: bold;
}
.active_link::before{
    content: "";
    position: absolute;
    background-color: #83b735;
    width: 100% !important;
    height: 2px;
    bottom: -2px;
}
.cftc a:hover{
    color: black !important;
}
.cftc a::before{
    content: "";
    position: absolute;
    background-color: #83b735;
    width: 0%;
    height: 2px;
    bottom: -2px;
    transition:.5s;
}
.cftc a:hover::before{
    width: 100%;
    transition:.5s;
}
</style>