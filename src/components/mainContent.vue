<template>
    <div class="mainContent">
        <categories-plac></categories-plac>
        <list-product></list-product>
    </div>
</template>
<script>
import CategoriesPlac from './categories.vue';
import ListProduct from './ListProduct.vue';


export default {
    name: "MainContent",
    components: {
        CategoriesPlac,
        ListProduct,
    }
}
</script>
<style scoped>

</style>