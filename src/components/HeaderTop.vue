<template>
    <header id="header">
        <div class="header-top">
            <div class="header container">
            <div class="headertop">
                <div class="left-header-top">
                    <div class="langue">
                        <select class="select_option" name="langue" id="langue">
                            <option style="color:white;" value="English">English</option>
                            <option value="Deutsch">Deutsch</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                    <div class="country">
                        <select class="select_option" name="country" id="country">
                            <option style="color:white;" value="Country">Country</option>
                            <option value="Nethrland">Nethrland</option>
                            <option value="France">France</option>
                            <option value="United States">United States</option>
                        </select>
                    </div>
                    <div class="shipping-offer">
                        <p class="parag">FREE SHIPPING FOR ALL ORDERS OF $150</p>
                    </div>
                </div>
                <div class="right-header-top">
                    <div class="socialmedia">
                        <i class="fa-brands fa-facebook paddingright"></i>
                        <i class="fa-brands fa-instagram paddingright"></i>
                        <i class="fa-brands fa-twitter paddingright"></i>
                        <i class="fa-brands fa-pinterest paddingright"></i>
                        <i class="fa-brands fa-youtube paddingright"></i>
                    </div>
                    <div class="list_link">
                        <ul>
                            <li><a href="#"><i class="fa-solid fa-envelope paddingright"></i>Newsletter</a></li>
                            <li  style="border:none;"><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="headercenter container">
              <div class="logo">
                   <img src="../assets/logo.svg" alt="logo">
              </div>
              <div class="search">
                <form method="GET">
                    <input type="text" class="input_search" name="name_product" placeholder="search">
                    <select class="category">
                         <option value="Select category">Select category</option>
                         <option value="Clocks">Clocks</option>
                         <option value="Lighting">Lighting</option>
                         <option value="Furniture">Furniture</option>
                         <option value="Accessories">Accessories</option>
                         <option value="Cooking">Cooking</option>
                         <option value="Toys">Toys</option>
                         <option value="Other">Other</option>
                    </select>
                    <button type="submit" class="search_btn" name="search"><i class="fa-solid fa-magnifying-glass sizeFont"></i></button>
                </form>
              </div>
              <div class="login_cart">
                <div class="login_sign" style="margin: auto;margin-right: 37px;">
                    <a href="#" class="login">LOGIN / REGISTER</a>
                </div>
                <div class="favorit" style="cursor:pointer;transition:.5s;margin: auto;margin-right: 37px;cursor: pointer;font-size: 21px;">
                    <i class="fa-regular fa-heart"></i>                
                </div>
                <div class="shipping_cart" style="cursor:pointer;transition:.5s;margin: auto;margin-right: 37px;">
                    <p class="total"><i class="fa-solid fa-cart-shopping paddingright"></i>0.00$</p>
                </div>
              </div>
         </div>
         <div class="headerBottom">
            <div class="container gridTwo">
                <div class="allcategory">
                    <div class="two_onl">
                        <i class="fa-solid fa-bars paddingright"></i>
                        <p class="category_tit">BROWSE CATEGORIES</p>
                    </div>
                    <i class="fa-solid fa-chevron-down mrgauto"></i>
                </div>
                <div class="navBar">
                    <nav class="navbar">
      <ul class="navbar-links">
        <li class="navbar-dropdown">
          <a href="#">SHOP</a>
            <div class="dropdown gridTwo">
                <div class="two">
                    <span class="tit_list">Shop pages</span>
                    <a href="#">Hidden sidebar</a>
                    <a href="#">Filters area</a>
                    <a href="#">No page heading</a>
                    <div class="before_list">
                        <span class="comment_before_green text_edit">HOT</span>
                        <a href="#">Small categories menu</a>
                    </div>
                    <a href="#">Masonry grid</a>
                    <a href="#">Bordered grid</a>
                    <a href="#">With background</a>
                </div>
                <div class="two">
                    <div class="before_list">
                        <span class="comment_before_yellow text_edit">effects</span>
                        <span class="tit_list">Shop pages 1</span>
                    </div>
                    <a href="#">Hidden sidebar 1</a>
                    <a href="#">Filters area 1</a>
                    <a href="#">No page heading 1</a>
                    <div class="before_list">
                        <span class="comment_before_red text_edit">Unlimited</span>
                        <a href="#">Small categories menu 1</a>
                    </div>
                    <a href="#">Masonry grid 1</a>
                    <a href="#">Bordered grid 1</a>
                    <div class="before_list">
                        <span class="comment_before_red text_edit">New</span>
                        <a href="#">With background 1</a>
                    </div>
                </div>
                <div class="two">
                    <span class="tit_list">Shop pages 2</span>
                    <a href="#">Hidden sidebar 2</a>
                    <a href="#">Filters area 2</a>
                    <div class="before_list">
                        <span class="comment_before_yellow text_edit">effects</span>
                        <a href="#">No page heading 2</a>
                    </div>
                    <a href="#">Small categories menu 2</a>
                    <a href="#">Masonry grid 2</a>
                    <div class="before_list">
                        <span class="comment_before_red text_edit">New</span>
                        <a href="#">Bordered grid 2</a>
                    </div>
                    <a href="#">With background 2</a>
                </div>
          </div>    
        </li>
        <li class="navbar-dropdown">
          <a href="#">BLOG</a>
          <div class="dropdown gridTwo">
                <div class="two">
                    <span class="tit_list">Blog types</span>
                    <a href="#">Alternative</a>
                    <a href="#">Small images</a>
                    <a href="#">Blog chess</a>
                    <a href="#">Masonry grid</a>
                    <a href="#">Meta on image</a>
                    <div class="before_list">
                        <span class="comment_before_red text_edit">FEATURE</span>
                        <a href="#">Infinit scrolling</a>
                    </div>
                    <a href="#">Blog flat</a>
                    <a href="#">Default flat</a>
                    <a href="#">Blog mask</a>
                </div>
                <div class="two">
                    <span class="tit_list">Single posts</span>
                    <a href="#">Post example #1</a>
                    <a href="#">Post example #2</a>
                    <a href="#">Post example #3</a>
                    <a href="#">Post example #4</a>
                    <a href="#">Post example #5</a>
                    <a href="#">Post example #6</a>
                    <a href="#">Post example #7</a>
                </div>
          </div> 
        </li>
        <li class="navbar-dropdown">
          <a href="#">Breads</a>
          <div class="dropdown">
            <a href="#">Lachha Paratha</a>
            <a href="#">Rumali Roti</a>
            <a href="#">Tandoori Roti</a>
            <a href="#">Butter Roti</a>
            <a href="#">Plain Naan</a>
            <a href="#">Butter Naan</a>
          </div>
        </li>
        <li class="navbar-dropdown">
          <a href="#">Rice</a>
          <div class="dropdown">
            <a href="#">Plain Rice</a>
            <a href="#">Veg Pulao</a>
            <a href="#">Veg Biryani</a>
            <a href="#">Paneer Biryani</a>
            <a href="#">Lemon Rice</a>
            <a href="#">Veg Kashmiri Pulao</a>
          </div>
        </li>
        <li class="navbar-dropdown">
          <a href="#">Chinese</a>
          <div class="dropdown">
            <a href="#">Paneer Chill Dry</a>
            <a href="#">Paneer Garlic</a>
            <a href="#">Veg Garlic</a>
            <a href="#">Veg Chilli</a>
          </div>
        </li>
      </ul>
    </nav>
                </div>
            </div>
         </div>
    </header>
</template>
<script>
   export default {
    name : 'HeaderTop'
   }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
*{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
.header-top {
    background-color: rgba(131, 183, 53, 1);
}
.header {
    display: block;
    margin: auto;
}
.headertop{
    color: white;
    display: grid;
    grid-template-columns: auto auto;
}
a{
    text-decoration: none;
}
select#country {
    border-left: 0;
}
.left-header-top {
    display: flex;
    font-size:14px;
}
select.select_option {
    padding: 9px;
    outline: none;
    border: none;
    background: none;
    color: white;
    border-right: 1px solid white;
    border-left: 1px solid white;
}
p.parag {
    margin-bottom: 0;
}
.shipping-offer {
    margin: auto 17px;
}
.list_link ul li {
    display: block;
    padding: 9px;
    border-right: 1px solid white;
    border-left: 1px solid white;
    font-size:14px;
}
.list_link ul {
    display: flex;
    margin: auto;
}
.list_link a {
    color: white;
    text-decoration: none;
    transition: .5s;
}
.list_link a:hover {
    opacity: 0.7;
    color: white;
    transition: .5s;
}
.right-header-top {
    display: flex;
    margin: auto;
}
.socialmedia {
    margin: auto;
}
.paddingright{
    padding-right: 11px;
}
.headercenter.container {
    margin: 39px auto;
    display: grid;
    grid-template-columns: auto auto auto;
}
.logo img {
    width: 259px;
}
.logo {
    margin: auto;
}
input.input_search {
    padding: 15px;
    width: 323px;
    outline: none;
    border: 1px solid #777;
}

select.category {
    padding: 16.5px 28px;
    padding-bottom: 17px;
    border-left: 0;
    outline: none;
    color: #777;
}
.sizeFont {
    font-size: 22px;
    color: #777;
}
.login_cart {
    display: flex;
    margin: auto;
}
a.login {
    color: black;
    transition:.5s;
}
a.login:hover {
    color:black;
    opacity: .7;
    transition:.5s;
}
button.search_btn {
    padding: 14px;
    padding-top: 13px;
    background:none;
    border-left:0;
    outline:none;
}
.favorit:hover{
    color:black;
    opacity:.7;
    transition:.5s;
}

.shipping_cart:hover{
    color:black;
    opacity:.7;
    transition:.5s;
}
.headerBottom{
    border-top:.3px solid #cdcdcd;
    border-bottom:.3px solid #cdcdcd;
}
.mrgauto{
    margin:auto;
}
.paddingright {
    margin: auto;
}
.allcategory {
    display: flex;
    background-color: #83b735;
    color: white;
    padding: 21px;
    width: 373px;
}
.two_onl {
    display: flex;
}
.container{
    margin: auto;
}
/*---------navbar-----------*/
.navbar {
  align-items: center;
  position: relative;
}
.navbar-logo {
  color: #ff3f34;
  text-decoration: none;
  font-size: 25px;
  padding: 0px 20px;
}

.navbar-links {
  list-style-type: none;
  display: flex;
}
.navbar-links li a {
  display: block;
  text-decoration: none;
  color: #444;
  padding: 20px 20px;
  font-weight: 700;
  transition: 0.4s all;
}

.navbar-links li.navbar-dropdown {
  position: relative;
}

.navbar-links li.navbar-dropdown:hover .dropdown {
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);
}

.navbar-links li.navbar-dropdown .dropdown {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  padding: 20px 0;
  top: 104%;
  transform: translateY(50px);
  left: 0;
  width: 850px;
  background-color: #fff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: 111;
  transition: 0.4s all;
}
.navbar-links li.navbar-dropdown .dropdown a {
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 400;
}
.navbar-dropdown .dropdown a:hover {
  padding-left: 30px;
}
.navbar-links li a:hover {
  color: #83b735;
}
/*---------navbar-----------*/
.comment_before_green::before {
    content: "";
    background: #83b735;
    width: 72px;
    height: 20px;
    position: absolute;
    z-index: -1;
    border-top-right-radius: 67px;
    right: -15px;
}
.comment_before_red::before {
    content: "";
    background: red;
    width: 72px;
    height: 20px;
    position: absolute;
    z-index: -1;
    border-top-right-radius: 67px;
    right: -15px;
}
.comment_before_yellow::before {
    content: "";
    background: #FBBC34;
    width: 72px;
    height: 20px;
    position: absolute;
    z-index: -1;
    border-top-right-radius: 67px;
    right: -15px;
}
span.text_edit {
    position: absolute;
    right: 80px;
    top: -8px;
    color: white;
    font-weight: bold;
    font-size: 14px;
}
.gridTwo {
    display: flex;
}
.twoList{
    display: flex;
}
.tit_list{
    font-weight:bold;
}
.two {
    position: relative;
}
.before_list{
    position:relative;
}
</style>