<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button class="catalog_item_cart">
                    <div class="catalog_item">
                        <img :src="'../images/' + product_data.image" alt="no photo">
                        <p class="catalog_item_name">{{product_data.name}}</p>
                        <h2 class="catalog_item _price">{{ product_data.price}} ₽</h2>
                        <button
                            class="catalog_item_btn"
                            @click="addToCart">
                            ДОБАВИТЬ В КОРЗИНУ
                        </button>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Catalogue-Item",
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data(){
        return{}
    },
    computed: {},
    methods: {
        addToCart() {
            this.$emit('addToCart', this.product_data)
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}
.catalog_item_cart {
    padding-right: 20px;
    padding-left: 20px;
    margin-bottom: 40px;
    background: #FFFFFF;
    border: 1px solid #DEDEDE;
    height: 380px;
}
.catalog_item img {
    width: 200px;
    height: 200px;
}
.catalog_item_name {
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    line-height: 21px;
    height: 63px;
    width: 230px;
}
.catalog_item h2 {
    font-weight: bold;
    font-style: normal;
    font-size: 18px;
    line-height: 23px;
}

.catalog_item_btn {
    color: #FFFFFF !important;
    background: #296DC1;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    border-style: none;
    padding: 13px 12px 11px;
    margin-bottom: 10px;
}
.catalog_item_btn:hover {
    background: #00A82D;
}
</style>