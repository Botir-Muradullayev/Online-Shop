<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-6">
                    <div class="navbar">
                        <div class="logo">
                            <img src="/images/logo.png" alt="">
                        </div>
                        <div class="navbar-cart">
                            <router-link to="/card">
                                <img src="/images/Basket.png" alt="image of card"> Корзина {{CART.length}}
                            </router-link>
                        </div>
                    </div>
                <div class="title">
                    <h1 class="h1">Каталог товаров</h1>


                </div>
                <div class="catalogue_item">
                    <CatalogueItem
                                   v-for="product in PRODUCTS"
                                   :key="product.article"
                                   v-bind:product_data="product"
                                   @addToCart="addToCart"
                    />
                </div>
            </div>
        </div>
        <!-- Catalogue products begins -->
    </div>
</template>

<script>
import CatalogueItem from "@/components/Catalogue-Item";
import {mapActions, mapGetters} from 'vuex';
export default {
    name: "Catalogue",
    components: {
        CatalogueItem
    },
    props: {},
    data() {
        return{

        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ])
    },
    methods: {
        ...mapActions([
           'GET_PRODUCTS',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        }
    },
    mounted() {
        this.GET_PRODUCTS()
    }
}
</script>

<style scoped>
.catalogue_item {

}
.h1 {
    display: flex;
    justify-content: center;
    font-weight: 700 !important;
    font-style: normal;
    font-size: 30px;
    margin: 65px 0 40px 0;
}
.navbar {
    margin-top: 37px;
}

.navbar-cart {
    padding: 10px;
    display: flex;
    text-align: end;
}
.navbar-cart img {
    margin-right: 10px;
    margin-bottom: 5px;
}
.navbar-cart a {
    text-decoration: none;
}
.navbar-cart a:hover {
    color: #00A82D !important;
}

</style>