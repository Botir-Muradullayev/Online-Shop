<template>
<div class="container">
    <div class="row">
        <div class="col">
            <img :src="'../images/' + cart_data.image" alt="no photo">
            <div class="cart_info">
                <p class="cart_item_name">{{cart_data.name}}</p>
            </div>
            <div class="cart_quantity">
                <span class="quantity_btn" @click="incrementItem">+</span>
                <p class="cart_quantity_number"> {{cart_data.quantity}} </p>
                <span class="quantity_btn" @click="decrementItem">-</span>
            </div>
            <div>
                <p class="cart_item_price">{{cart_data.price}} ₽</p>
            </div>
            <button class="cart_item_button" @click="deleteCart">X</button>
        </div>
        <div class="cart_line">
            <hr>
        </div>
    </div>

</div>
</template>

<script>

export default {
    name: "CartItem",
    props: {
        cart_data: {
            type: Object,
            default() {
                return{}
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        incrementItem() {
            this.$emit('increment')
        },
        decrementItem() {
            this.$emit('decrement')
        },
        deleteCart() {
            this.$emit('deleteCart')
        }
    },
    mounted() {
        this.$set(this.cart_data, 'quantity', 1)
    }
}
</script>

<style scoped>
.col {
    align-items: center;
    display: flex;
    justify-content: space-around;
}
.cart_item_name {
    width: 260px;
    font-style: normal;font-weight: 500;
    font-size: 16px;
    text-align: left;
}
.cart_quantity {
    width: 170px;
    height: 40px;
    border: 1px solid #A8AFBB;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    text-align: center !important;
}
.quantity_btn {
    cursor: pointer;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    border: 1px solid #A8AFBB;
}
.quantity_btn:hover {
    background: #296DC1;
    color: #E5E5E5 !important;
}
.cart_quantity_number {
    padding-top: 5px;
}
.cart_line {
    color: #A8AFBB;
}
.cart_item_button {
    background: white;
    height: 40px;
    width: 41px;
    border: 1px solid #A8AFBB;
}
.cart_item_button:hover {
    background: #296DC1;
    color: #E5E5E5 !important;
}

</style>