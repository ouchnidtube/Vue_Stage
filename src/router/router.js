import { createRouter, createWebHistory } from 'vue-router';
import WoodenSingle from '../components/productsPage/WoodenSingle.vue';
import SmartWaches from '../components/productsPage/SmartWaches.vue';
import home from '../components/home.vue';
import PanTon from '../components/productsPage/PanTon.vue';
import DecoraTion from '../components/productsPage/DecoraTion.vue';
import WiNe from '../components/productsPage/WiNe.vue';
import TaBle from '../components/productsPage/TaBle.vue';
import DocIpho from '../components/productsPage/DocIpho.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/shop/furniture/wooden-single-drawer',
        name: 'WoodenSingle',
        component: WoodenSingle,
    },
    {
        path: '/shop/accessories/smart-watches-wood-edition',
        name: 'SmartWaches',
        component: SmartWaches,
    },
    {
        path: '/shop/furniture/panton-оunior-chair',
        name: 'PanTon',
        component: PanTon,
    },
    {
        path: '/shop/accessories/decoration-wooden-present/',
        name: 'DecoraTion',
        component: DecoraTion,
    },
    {
        path: '/shop/accessories/ridiculus-massa-ac-nullam',
        name: 'WiNe',
        component: WiNe,
    },
    {
        path: '/shop/accessories/decoration-for-table-pen',
        name: 'TaBle',
        component: TaBle,
    },
    {
        path: '/shop/accessories/iphone-dock',
        name: 'DocIpho',
        component: DocIpho,
    },
];
const router = createRouter({
    routes: routes,
    history:createWebHistory(),
});
export default router