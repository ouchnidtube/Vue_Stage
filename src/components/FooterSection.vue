<template>
    <footer class="footer">
        <div class="listFooters">
           <div class="list_footer container">
            <div class="info_siteweb">
                <img src="http://localhost:8080/img/logo.f637102a.svg" alt="Logo">
                <p>Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.</p>
                <span><i class="fa-solid fa-location-arrow paddingright"></i> 451 Wall Street, UK, London</span>
                <span><i class="fa-solid fa-phone paddingright"></i>Phone: (064) 332-1233</span>
                <span><i class="fa-solid fa-envelope paddingright"></i> Fax: (099) 453-1357</span>
            </div>
            <div class="vgyv our_story">
                <span class="tit_ListFo">OUR STORES</span>
                <ul>
                    <li><a href="#4">New York</a></li>
                    <li><a href="#5">London SF</a></li>
                    <li><a href="#6">Cockfosters BP</a></li>
                    <li><a href="#7">Los Angeles</a></li>
                    <li><a href="#8">Chicago</a></li>
                    <li><a href="#9">Las Vegas</a></li>
                </ul>
            </div>
            <div class="vgyv useful_links">
                <span class="tit_ListFo">USEFUL LINKS</span>
                <ul>
                    <li><a href="#4">Privacy Policy</a></li>
                    <li><a href="#5">Returns</a></li>
                    <li><a href="#6">Terms And Conditions</a></li>
                    <li><a href="#7">Contact Us</a></li>
                    <li><a href="#8">Latest News</a></li>
                    <li><a href="#9">Our Sitemap</a></li>
                </ul>
            </div>
            <div class="vgyv footer_menu">
                <span class="tit_ListFo">FOOTER MENU</span>
                <ul>
                    <li><a href="#4">Instagram profile</a></li>
                    <li><a href="#5">New Collection</a></li>
                    <li><a href="#6">Woman Dress</a></li>
                    <li><a href="#7">Contact Us</a></li>
                    <li><a href="#8">Latest News</a></li>
                    <li><a href="#9">Purchase Theme</a></li>
                </ul>
            </div>
          </div>
          <div class="content_bottomFooter">
            <div class="copyright_payment container">
            <div class="copyright">
                <p>YASSINE OUCHNID © 2022 CREATED BY XTEMOS STUDIO. PREMIUM E-COMMERCE SOLUTIONS.</p>
            </div>
            <div class="payment_method">
                <img src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/01/payments.png" alt="">
            </div>
          </div>
          </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'FooterSection',
  data(){

  }
}
</script>
<style scoped>
.content_bottomFooter {
    border-top: 1px solid #e1e1e1;
}

.copyright {
    margin: auto 0;
}

.payment_method {
    margin: auto 0;
}

.copyright p {
    margin: 0;
}
.copyright_payment.container {
    display: flex;
    justify-content: space-between;
    padding: 14px 0px;
}
.footer{
    background-color: #fbfbfb;
}
.paddingright{
    padding-right: 8px;
    padding-bottom: 17px;
}
.vgyv li {
    display: block;
    margin-bottom: 14px;
}

.info_siteweb {
    display: grid;
    color: #838282;
}
.info_siteweb img {
    width: 256px;
}
.info_siteweb p {
    width: 55%;
    padding-top: 1rem;
}
.list_footer {
    display: flex;
    margin-top: 98px;
    padding-top: 66px;
}
span.tit_ListFo {
    font-weight: bolder;
    font-size: 18px;
}

.vgyv {
    padding-right: 40px;
}

.vgyv a {
    color: black;
    text-decoration: none;
    opacity: .5;
    transition:.5s;
}
.vgyv a:hover {
    opacity: 1;
    transition:.5s;
}
.vgyv ul {
    margin-top: 19px;
    margin-bottom: 13px;
}
</style>