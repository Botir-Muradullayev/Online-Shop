<template class="form">
    <div class="container">
        <cart-item
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_data="item"
            @deleteCart="deleteCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
        <div class="cart_sum">
            <p class="cart_name">Сумма</p>
            <p>{{cartSum}} ₽</p>
        </div>
        <div class="container-fluid">
            <h1 class="formTitle">Пожалуйста, представьтесь</h1>
            <form class="col">
                <div class="name">
                    <input type="text" class="form-control" id="name" placeholder="Татьяна">
                </div>
                <div class="name email">
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="mail@mail.ru">
                </div>
                <div class="name telNumber">
                    <input type="text" class="form-control" id="telephoneNumber" placeholder="+7(999)999-99-99">
                </div>
                <button type="submit" class="button btn btn-primary">оформить заказ</button>
            </form>
        </div>
    </div>
</template>

<script>
import CartItem from "@/components/CartItem";
import {mapActions} from "vuex";

export default {
    name: "Cart",
    components: {CartItem},
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    },
    computed: {
        cartSum() {
            let result = []
            for (let item of this.cart_data) {
                result.push(item.price * item.quantity)
            }
            result = result.reduce(function (sum, el) {
                return sum + el;
            })
            return result;
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        increment(index) {
            this.INCREMENT_CART_ITEM(index)
        },
        decrement(index) {
            this.DECREMENT_CART_ITEM(index)
        },
        deleteCart(index) {
            this.DELETE_FROM_CART(index)
        }
    }
}
</script>

<style scoped>
.container-fluid{
    background: #F2F5F9 !important;
    text-align: center;
    justify-content: right;
}
.formTitle {
    font-weight: 700;
    font-style: normal;
    font-size: 26px;
    padding-top: 70px;
    margin-top: 70px;
    margin-bottom: 35px;
}
.name {
    display: flex;
    justify-content: center;
}
.form-control {
    border: none;
    margin-bottom: 30px;
    padding-left: 26px;
    height: 60px;
    border-radius: 0;
    width: 430px;
    font-weight: 600;
    line-height: 16px;
    font-style: normal;
    font-size: 12px;
}
.button {
    background: #296DC1;
    height: 60px;
    width: 430px;
    margin-bottom: 180px;
    border: none;
    border-radius: 0;
    color: #FFFFFF !important;
    font-weight: 600;
    line-height: 16px;
    font-style: normal;
    font-size: 12px;
}
.cart_sum {
    display: flex;
    justify-content: end;
    align-items: end;
}
.cart_name {
    padding-right: 5px;
}
</style>