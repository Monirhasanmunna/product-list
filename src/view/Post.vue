<script setup>
    import { useRoute } from 'vue-router';
    import { onBeforeMount,ref,reactive } from 'vue';
    import axios from 'axios'

    const router = useRoute();
    const product = reactive({});
    const item = ref(false);
    const id = `${router.params.id}`

    onBeforeMount(()=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(res=>{
            product.title = res.data.title,
            product.price = res.data.price,
            product.brand = res.data.brand,
            product.thumbnail = res.data.thumbnail,
            product.description = res.data.description,
            item.value = true

            // console.log(product.brand)
        })
    });

</script>

<template>
    <div class="row mt-3" v-if="item == true">
        <div class="col-12">
            <div class="card" style="width: 100%;">
            <img class="card-img-top" :src="product.thumbnail" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <p class="card-text">Brand : {{ product.brand }}</p>
                <p class="card-text">Price : {{ product.price }}</p>
            </div>
            </div>
        </div>
    </div>

    <div class="col-12" v-else>
        <div class="text-center">
            <h4>..........Loading............</h4>
        </div>
    </div>
</template>

<style scoped>
    img{
        width: 100%;
        height: 600px;
        border: 1px solid rgb(196, 196, 196);
    }

    h4{
        font-size: 30px;
        color: rgba(0, 0, 0, 0.368);
    }
</style>