<script setup>
    import { reactive,ref,onBeforeMount } from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router';

    const products = ref([]);
    const router = useRouter()

    onBeforeMount(()=>{
        axios.get('https://dummyjson.com/products?limit=20')
        .then(res=>{
            products.value = res.data.products;
        })

    });
    
</script>

<template>
    <div class="row mt-3 px-3">

        <div class="col-3 pt-3" v-for="(product, index) in products" :key="index" v-if="products.length > 0">
            <div class="card" style="width: 18rem;">
            <router-link :to="{name:'Post',params:{id:product.id}}"><img class="card-img-top" :src="product.thumbnail" alt="Card image cap"></router-link>
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">Price :{{ product.price }}</p>
                <router-link :to="{name:'Post',params:{id:product.id}}" class="btn btn-primary">Details</router-link>
            </div>
            </div>
        </div>

        <div class="col-12" v-else>
            <div class="text-center">
                <h4>..........Loading............</h4>
            </div>
        </div>

    </div>
</template>

<style scoped>
    img{
        height: 200px;
        border: 1px solid rgb(196, 196, 196);
    }

    h4{
        font-size: 30px;
        color: rgba(0, 0, 0, 0.368);
    }
</style>