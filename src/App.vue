<template>
    <div id="app">
        <body class="container">
        <router-view/>
        </body>

            <Cart
                v-if="CART.length"
                :cart_data="CART"
            />

    </div>
</template>

<script>

import {mapGetters} from "vuex";
import Cart from "@/pages/Cart";

export default {
    name: 'App',
    components: {
        Cart
    },
    props: {},
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            "CART"
        ])
    },
    methods: {},
    watch: {},
    mounted() {
        console.log('It is good')
    }
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat;
    color: #000000 !important;
}
.container {
    width: 1170px;
    margin: 0 auto;
}
</style>