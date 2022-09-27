<template>
    <div class="product_page">
      <div class="productI_Q container">
        <div class="product_Images">
          <div class="img_prin">
            <span class="seles">Sale</span>
            <img class="pricipal_img" src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-14.jpg" alt="">
            <i class="fa-solid fa-up-down-left-right abs"><span class="tit_icon_p">Click to enlarge</span></i>
          </div>
          <div class="sub_imgs">
            <img class="opacity_in" src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-14.jpg" alt="">
            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-14-2.jpg" alt="">
            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-14-44.jpg" alt="">
            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-14-35.jpg" alt="">
          </div>
        </div>
        <div class="details_prod">
          <div class="category_product">
            <nav class="cate_navB">
              <a href='#' class="breadcrumb-link">Home</a>
              <a href='#' class="breadcrumb-link">Shop</a>
              <a href='#' class="breadcrumb-link">Accessories</a>
              <span style="margin-left: 10px;">Decoration for table pen</span>
            </nav>
            <div class="tit_imgPro">
              <h1>Decoration for table pen</h1>
              <img src='https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/brand-alessi.png.webp' alt='' >
            </div>
            <div class="price_descri">
              <h3>$599.00</h3>
              <p>Adipiscing neque a a montes parturient scelerisque molestie magnis adipiscing mus porta parturient est a blandit fusce adipiscing augue per magnis venenatis ullamcorper.</p>
            </div>
            <div class="addandQ">
                <div class="plus_moin"><i class="fa-solid fa-minus padd chicH" @click="minus1" style="cursor:pointer;"></i><span id="resultQunt" class="padd">{{ prod1 }}</span><i @click="plus1" style="cursor:pointer;" class="fa-solid fa-plus padd chicH"></i></div>
                <a href="#"><button class="addTcartP">ADD TO CART</button></a>
            </div>
            <div class="bhubC">
              <p class="padSize"><i class="fa-solid fa-code-compare paddingRi"></i>Compare</p>
              <p class="padSize"><i class="fa-regular fa-heart paddingRi"></i>Add to wishlist</p>
              <p class="padSize"><i class="fa-solid fa-ruler paddingRi"></i>Size Guide</p>
            </div>
            <div class="category_share">
                <p class="cateFhy">SKU: <a href="#" style="color:#777;text-decoration: none;"> N/A</a></p>
              <p class="cateFhy">Category: <a href="#" style="color:#777;text-decoration: none;">Accessories, Clocks</a></p>
              <p class="sharefhy">Share: <i class="fa-brands fa-facebook-f paddingRi"></i><i class="fa-brands fa-instagram paddingRi"></i><i class="fa-brands fa-linkedin paddingRi"></i><i class="fa-brands fa-twitter paddingRi"></i></p>
            </div>
          </div>
        </div>
      </div>
      <div class="prod_Description">
        <div class="bgrdf_gdf container">
          <div class="listDesc">
          <ul>
            <li><a @click="ActiveLinkB='1'" :class="[ActiveLinkB==='1' ? 'aLinkB' : '']" href="#1">DESCRIPTION</a></li>
            <li><a @click="ActiveLinkB='2'" :class="[ActiveLinkB==='2' ? 'aLinkB' : '']" href="#2">ADDITIONAL INFORMATION</a></li>
            <li><a @click="ActiveLinkB='3'" :class="[ActiveLinkB==='3' ? 'aLinkB' : '']" href="#3">REVIEWS (0)</a></li>
            <li><a @click="ActiveLinkB='4'" :class="[ActiveLinkB==='4' ? 'aLinkB' : '']" href="#4">ABOUT BRAND</a></li>
            <li><a @click="ActiveLinkB='5'" :class="[ActiveLinkB==='5' ? 'aLinkB' : '']" href="#5">SHIPPING & DELIVERY</a></li>
          </ul>
         </div>
         <div class="DescriList" v-if="ActiveLinkB==='1'">
          <div class="LeftDscL">
            <h3 class="tit_LeftDscL">IMPERDIET HIMENAEOS MATTIS</h3>
            <p class="descLP bhtSF">A a at habitasse inceptos a quisque nibh ut arcu et dictum laoreet elit ante scelerisque libero consectetur erat non a suspendisse ad phasellus phasellus suspendisse gravida eu. Dapibus congue libero sem at dis a a adipiscing parturient eros diam parturient sodales consectetur quis.</p>
            <blockquote class="bhtSF"><p class="pddBGD">Consequat blandit a ullamcorper vestibulum feugiat eu a parturient ante at facilisi suscipit quis gravida tempor fringilla etiam dolor id suspendisse adipiscing natoque scelerisque es vivamus sed massa.</p></blockquote>
            <p class="descLP bhtSF">A sodales hac dolor parturient tincidunt dictumst a condimentum nunc auctor parturient a nibh dis a vestibulum arcu a a. Urna rhoncus eleifend parturient condimentum et vulputate nunc. Ut dolor condimentum hendrerit non mattis a commodo sociis mi nec rutrum parturient litora.</p>
          </div>
          <div class="rightDscL">
            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-14.jpg" alt="">
          </div>
         </div>
         <div class="addioInfo" v-if="ActiveLinkB==='2'">
           <div class="brand_BGS">
            <p class="add_Name">Color</p>
            <span>Beige, Brown</span>
           </div>
           <div class="brand_BGS">
            <p class="add_Name">Brand</p>
            <span>Alessi</span>
           </div>
           <div class="brand_BGS">
            <p class="add_Name">Radius</p>
            <span>1.7"</span>
           </div>
           <div class="brand_BGS">
            <p class="add_Name">Weight</p>
            <span>4.6 oz</span>
           </div>
           <div class="brand_BGS">
            <p class="add_Name">Material</p>
            <span>Aluminum Lining, Natural Cork Base</span>
           </div>
         </div>
         <div class="reviewPart" v-if="ActiveLinkB==='3'">
          <div class="reviewLeft">
            <h4>REVIEWS</h4>
            <span>There are no reviews yet.</span>
          </div>
          <div class="reviewRight">
            <h3>BE THE FIRST TO REVIEW “WOODEN SINGLE DRAWER”</h3>
            <span style="padding-bottom: 43px;">Your email address will not be published. Required fields are marked <span style="color:red;">*</span></span>
            <p class="raiting">Your rating <span style="color:red;">*</span>: <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
            <form method="get">
              <p>Your review <span style="color:red;">*</span></p>
              <textarea class="textareaInp" rows="9" cols="100%"></textarea><br>
              <div class="nameEmail">
                <div class="inName">
                <label>Name <span  style="color:red;">*</span></label><br><br>
                <input  class="inputNs" type="text" name="FullName" id="FullName">
               </div>
               <div class="inEmail">
                <label>Email <span  style="color:red;">*</span></label><br><br>
                <input class="inputNs" type="email" name="Email" id="Email">
               </div>
              </div>
              <input type="checkbox" name="CheckB" id="CheckB">
              <label> Save my name, email, and website in this browser for the next time I comment.</label><br>
              <button type="submit" class="btnSubmiT">SUBMIT</button>
            </form>
          </div>
         </div>
         <div class="BrandAbouT" v-if="ActiveLinkB==='4'">
          <div class="leftBrandAbT">
            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/brand-alessi-100x35.png" alt="BrandAbouT">
            <p class="BranAT">Parturient ut id tellus vulputatre ac ultrlices a part ouriesnt sapien dignissim partu rient a a inter drum vehicula. Ornare metus laoreet tincidunt eros rolem tristique pretium malada.</p>
            <p class="BranDetil">Cras rhoncus vivamus luctus platea arcu laoreet selm. Curae est condenectus sed hac a parturient vestibulum.</p>
            <a href="#8">MORE PRODUCTS</a>
          </div>
          <div class="rightBrandAbT">
            <div class="ProDABt cgyct">
              <span class="salesL">SALE</span>
              <div class="DeTProd">
                <h3 class="Title_Prod"><a href="#">Panton tunior chair</a></h3>
                <p class="cate_Prod"><a href="#">Furniture</a></p>
                <span class="PriceProd">$199.00</span>
                <button type="submit" class="btnBtL">VIEW PRODUCT</button>
              </div>
            </div>
            <div class="ProDABt1 cgyct">
              <span class="salesh">HOT</span>
              <div class="DeTProd">
                <h3 class="Title_Prod"><a href="#">Eames lounge chair</a></h3>
                <p class="cate_Prod"><a href="#">Cooking</a></p>
                <span class="PriceProd"><span style="text-decoration: line-through;font-size: 12px;">$799.00</span> $399.00</span>
                <button type="submit" class="btnBtL">ADD TO CART</button>
              </div>
            </div>
            <div class="ProDABt2 cgyct">
              <span class="salesL">SALE</span>
              <div class="DeTProd">
                <h3 class="Title_Prod"><a href="#">Eames Plastic Side Chair</a></h3>
                <p class="cate_Prod"><a href="#">Furniture</a></p>
                <span class="PriceProd">$99.00</span>
                <button type="submit" class="btnBtL">VIEW PRODUCT</button>
              </div>
            </div>
          </div>
         </div>
         <div class="shipping_Dele" v-if="ActiveLinkB==='5'">
          <div class="eightPrtSD">
            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/wood-ship-1.jpg.webp" alt="">
            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/wood-ship-3.jpg.webp" alt="">
          </div>
          <div class="LeftPrtSD">
            <h3 class="Stbg">MAECENAS IACULIS</h3>
            <p>Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames nunc natoque dui.</p>
            <span>ADIPISCING CONVALLIS BULUM</span>
            <ul class="listProdSD">
              <li>Vestibulum penatibus nunc dui adipiscing convallis bulum parturient suspendisse.</li>
              <li>Abitur parturient praesent lectus quam a natoque adipiscing a vestibulum hendre.</li>
              <li>Diam parturient dictumst parturient scelerisque nibh lectus.</li>
            </ul>
            <p>Scelerisque adipiscing bibendum sem vestibulum et in a a a purus lectus faucibus lobortis tincidunt purus lectus nisl class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam inceptos hac parturient scelerisque vestibulum amet elit ut volutpat.</p>
          </div>
         </div>
        </div>
      </div>
      <div class="auterProdu">
        <div class="products container">
          <h3 class="titAuterPro">YOU MAY ALSO LIKE…</h3>
          <div class="product">
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
        <div class="products container bgtf">
          <h3 class="titAuterPro">RELATED PRODUCTS</h3>
          <div class="product">
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
        </div>
      </div>
    </div>
    <footer-section></footer-section>
</template>
  
<script>
    import FooterSection from '../FooterSection.vue';

export default {
  components: {
        FooterSection,
  },
  data() {
  return {
    sales: [
                {
                    id: "1",
                    title: 'Best clock parallels',
                    categery: "Furniture",
                    description:"Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-clock-1-2.jpg",
                    price: "$555.00",
                },
                {
                    id: "2",
                    title: 'Euismod adipiscing egestas',
                    categery: "Cooking",
                    description:"Himenaeos parturient nam a justo placerat lorem erat pretium a fusce pharetra pretium enim sagittis ut nunc neque torquent sem a leo. Dictumst himenaeos primis torquent ridiculus",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/cooking11.jpg",
                    price: "$199.00",
                },
                {
                    id: "3",
                    title: 'Nerd wooden chair',
                    categery: "Furniture",
                    description:"Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-1.jpg",
                    price: "$599.00",
                },
                {
                    id: "4",
                    title: 'Classic wooden chair',
                    categery: "Furniture",
                    description:"Nam gravida vulputate est venenatis eu at ullamcorper consectetur parturient suspendisse a elit lobortis ut convallis vestibulum vulputate nunc praesent mattis sem faucibus risus sociosqu.Dapibus curae a ac vestibulum a magnis ullamcorper orci a iaculis adipiscing augue a massa a torquent feugiat a.Scelerisque vestibulum.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/furniture10-768x878.jpg",
                    price: "$5.00",
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
                },
                {
                    id: "2",
                    title: 'Wooden bow tie man',
                    categery: "Accessories",
                    description:"Himenaeos parturient nam a justo placerat lorem erat pretium a fusce pharetra pretium enim sagittis ut nunc neque torquent sem a leo. Dictumst himenaeos primis torquent ridiculus",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/08/product-accessories-1-263x300.jpg",
                    price: "$395.00",
                },
                {
                    id: "3",
                    title: 'Nerd wooden chair',
                    categery: "Furniture",
                    description:"Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-1.jpg",
                    price: "$599.00",
                },
                {
                    id: "4",
                    title: 'Panton tunior chair',
                    categery: "Furniture",
                    description:"Nam gravida vulputate est venenatis eu at ullamcorper consectetur parturient suspendisse a elit lobortis ut convallis vestibulum vulputate nunc praesent mattis sem faucibus risus sociosqu.Dapibus curae a ac vestibulum a magnis ullamcorper orci a iaculis adipiscing augue a massa a torquent feugiat a.Scelerisque vestibulum.",
                    img: "https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-clock-1-2.jpg",
                    price: "$199.00",
                },
    ], 
    prod1: '1',
    ActiveLinkB: '1',
  }
},
methods: {
  plus1(){
    this.prod1++
},
  minus1(){
    if(this.prod1 == '1'){
      return '1'
    }else{
      return this.prod1--
    }
},
},
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
body{
  overflow-x: hidden;
}
.addandQ{
    display: flex;
}
.paddingRi{
  padding-right: 19px;
}
.padSize{
  padding: 0 10px;
}
.img_prin{
  position: relative;
}
.breadcrumb-link{
  margin-left: 10px;
}
.breadcrumb-link::after{
  content: "/";
  margin-left: 10px;
}
.cate_navB a {
  color:#777;
  text-decoration: none;
}
.tit_imgPro {
    display: flex;
    justify-content: space-between;
    margin-top: 21px;
}
.price_descri h3{
  color: #83b735;
  margin-top: 23px;
}
.price_descri p{
  color: #777;
  font-size: 17px;
  margin-top: 32px;
}
.productI_Q {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 36px;
    margin: auto;
}
.tit_imgPro img {
    width: 160px;
    padding: 0 10px;
    cursor: pointer;
    transition: .5s;
}
.tit_imgPro img:hover {
  border: 1px solid #777;
  transition: .5s;
}
.padd {
    padding: 17px 9px;
}

i.fa-solid.fa-minus.padd {
    border-right: 1px solid #d7d7d7;
}

span#resultQunt {
    border-right: 1px solid #d7d7d7;
}
span.seles {
    position: absolute;
    background-color: #83b735;
    color: white;
    padding: 15px;
    top: 11px;
    right: 17px;
    border-radius: 50px;
}
.abs {
    position: absolute;
    left: 22px;
    bottom: 20px;
    background-color: white;
    padding: 19px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 39px;
    transition: .5s;
}
.abs span {
    font-size: 13px;
    padding-left: 15px;
    display: none;
}
.abs:hover .tit_icon_p {
  display: initial;
  transition: .5s;
}
.product_page {
    margin: auto;
    margin-top: 55px;
} 
.opacity_in{
  opacity:.4;
}
.sub_imgs img {
    width: 160px;
    padding-right: 16px;
    cursor: pointer;
    transition: .5s;
    margin-top: 15px;
}
.sub_imgs img:hover {
  opacity:.4;
  transition: .5s;
}
img.pricipal_img {
    width: 624px;
}
.fex-cgy img {
    width: 100px;
}

.fex-cgy a {
    color: black;
    text-decoration: none;
    font-size: 15px;
}

.fex-cgy {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 34px;
}

.quantity_pric {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-top: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
}
.list_produ{
  margin-top: 20px;
}
.plus_moin {
    margin: auto 0;
    margin-right: 15px;
    margin-top: 20px;
    border: 1px solid #d7d7d7;
}

.fex-cgy h4 {
    margin: auto;
}

.priceTo {
    margin: auto;
}
.chicH{
  transition: .5s;
}
.chicH:hover{
  background-color: #83b735;
  color: white;
  transition: .5s;
}
button.addTcartP {
    margin-top: 24px;
    padding: 12px 28px;
    font-weight: bold;
    font-size: 13px;
    background-color: #83b735;
    color: white;
    border: none;
    border-radius: 5px;
    transition: .5s;
}
button.addTcartP:hover{
  transition: .5s;
  background-color: #6ca300;
}
.bhubC {
    display: flex;
    padding-bottom: 17px;
    margin-top: 17px;
    border-bottom: 1px solid #d1d1d1;
}
.category_share {
    margin-top: 17px;
}

p.cateFhy {
    margin-bottom: 15px;
}
.listDesc ul {
  display: flex;
  justify-content: center;
}

.listDesc li {
    padding: 27px;
    display: block;
}

.listDesc ul li a {
    padding: 27px 0;
    position: relative;
    color: black;
    text-decoration: none;
    font-weight: bold;
    opacity: .6;
    transition: .5s;
}
.listDesc ul li a:hover {
  opacity: 1;
  transition: .5s;
}
.aLinkB{
  opacity: 1 !important;
  transition: .5s !important;
}
.aLinkB::before {
  content: "" !important;
  background-color: #83b735 !important;
  width: 100% !important;
  height: 1px !important;
  position: absolute !important;
  top:0 !important;
  transition: .5s !important;
}
.listDesc ul li a::before {
  content: "";
  background-color: #83b735;
  width: 0%;
  height: 1px;
  position: absolute;
  top:0;
  transition: .5s;
}
.listDesc ul li a:hover::before {
  width: 100%;
  transition: .5s;
}
.prod_Description {
    margin-top: 44px;
    border-top: 1px solid #d7d7d7;
}
.bgrdf_gdf.container {
    margin: auto;
}
h3.tit_LeftDscL {
    font-size: 20px;
    font-weight: bold;
    margin-top: 26px;
    padding-bottom: 19px;
}
.LeftDscL blockquote {
    border-left: 1px solid #83b735;
}
p.pddBGD {
    margin-left: 56px;
}
.bhtSF {
    margin-bottom: 37px;
}
.DescriList {
    display: flex;
}
.brand_BGS {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid #d7d7d7;
    padding: 15px;
}

p.add_Name {
    font-weight: bold;
}
button.btnSubmiT {
    padding: 13px 50px;
    background-color: #83b735;
    color: white;
    border: none;
    font-weight: bold;
}
button.btnSubmiT {
    padding: 13px 50px;
    background-color: #83b735;
    color: white;
    border: none;
    font-weight: bold;
    margin-top: 27px;
}

.reviewPart {
    display: flex;
    justify-content: space-between;
}

.reviewLeft {
    padding-top: 43px;
}

.reviewLeft h4 {
    padding-bottom: 33px;
}

.reviewRight {
    padding-top: 43px;
}

.reviewRight h3 {
    font-size: 28px;
    padding-bottom: 20px;
}
p.raiting {
    padding: 25px 0;
}
textarea.textareaInp {
    width: 100%;
    margin-top: 15px;
    border: 1px solid #c3c3c3;
    outline: none;
    padding: 0 9px;
}
.inputNs {
    width: 322px;
    padding: 6px 9px;
    outline: none;
    border: 1px solid #c3c3c3;
}
.nameEmail {
    display: flex;
    justify-content: space-between;
    padding: 17px 0;
}
p.BranAT {
    padding: 21px 0px;
    border-bottom: 1px solid #d7d7d7;
}
.BranDetil{
  padding: 21px 0px;
}
.ProDABt{
    background-image: url("https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/product-furniture-19-3-430x490.jpg.webp");
    height: 284px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 249px;
    position: relative;
    cursor: pointer;
    transition:.5s;
}
.ProDABt1{
    background-image: url("https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/product-furniture-8.jpg.webp");
    height: 284px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 249px;
    position: relative;
    cursor: pointer;
    transition:.5s;
}
.ProDABt2{
    background-image: url("https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/product-furniture-2.jpg.webp");
    height: 284px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 249px;
    position: relative;
    cursor: pointer;
    transition:.5s;
}
.salesL {
    position: absolute;
    background-color: #83b735;
    padding: 8px;
    font-size: 13px;
    border-radius: 50%;
    top: 24px;
    left: 13px;
    color: white;
    font-weight: bold;
}
.salesh {
    position: absolute;
    background-color: red;
    padding: 8px;
    font-size: 13px;
    border-radius: 50%;
    top: 24px;
    left: 13px;
    color: white;
    font-weight: bold;
}
.btnBtL{
  padding: 15px 15px;
  background: none;
  border: 1px solid white;
  color: white;
}
h3.Title_Prod {
    font-size: 15px;
}

.Title_Prod a {
    color: white;
    text-decoration: none;
    padding-bottom: 9px;
}

.cate_Prod a {
    font-size: 15px;
    color: white;
    text-decoration: none;
    padding-bottom: 9px;
}
span.PriceProd {
    color: white;
    padding-bottom: 9px;
}
.DeTProd {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;
    opacity: 0;
    transition:.5s;
}
.cgyct:hover .DeTProd{
  opacity: .5;
  transition:.5s;
}
.rightBrandAbT {
    display: flex;
}

.BrandAbouT {
    display: flex;
}
.shipping_Dele {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 46px;
}

.eightPrtSD {
    display: flex;
}

h3.Stbg {
    padding-bottom: 21px;
}

.LeftPrtSD p {
    padding-bottom: 22px;
}

.LeftPrtSD span {
    font-weight: bold;
    font-size: 18px;
}

ul.listProdSD {
    padding-top: 17px;
    margin-left: 24px;
    padding-bottom: 19px;
}
/*-------product-----*/
.titAuterPro{
  position: relative;
  margin-bottom: 44px;
  padding-bottom: 15px;
}
.titAuterPro::before{
  content: "";
  position: absolute;
  background-color: #83b735;
  width: 90px;
  height: 3px;
  bottom: 0;
  left: 0;
}
.products.container {
    margin: auto;
}
.bgtf{
  margin-top: 104px !important;
}
.auterProdu {
    border-top: 1px solid #cbcaca;
    margin-top: 36px;
    padding-top: 51px;
}
.product {
    display: grid;
    grid-template-columns: auto auto auto auto;
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