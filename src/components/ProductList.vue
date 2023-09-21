<template>
    <div>

      
        <div tabindex="0" class="focus:outline-none">
            <div class="mx-auto container py-8">
                <div class="flex flex-wrap items-center lg:justify-between justify-center">
                    <!-- Card -->
                    <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 shadow-md rounded hover:shadow-lg transition-shadow shadow-indigo-400 my-7" v-for="products in allProduct.products" :key="products.id">
                        <!-- Product Image -->
                        <div>
                            <img :alt="products.title" :src="products.thumbnail" tabindex="0" class="focus:outline-none w-full h-44" />
                        </div>
                        <!-- End -->
                        <div class="bg-white dark:bg-gray-800">
                            <!-- Brand Name & BookMark -->
                            <div class="flex items-center justify-between px-4 pt-4">
                                <div class="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
                                </div>
                                <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">{{ products.brand }}</p>
                                </div>
                            </div>
                            <!-- End -->
                            <!-- Product Basic Detalis -->
                            <div class="px-4 pt-4">
                                <!-- Heading & Paragrape -->
                                <div class="flex items-center">
                                    <h2 tabindex="0" class="focus:outline-none text-lg dark:text-white font-semibold">{{ products.title }}</h2>
                                </div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2">{{ products.description.split(' ').splice(0, 13).join(' ') }}...</p>
                                <!-- End -->
                                <!-- Product Smilar Tag -->
                                <div class="flex mt-4">
                                    <div>
                                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">Mobile</p>
                                    </div>
                                    <div class="pl-2">
                                        <p tabindex="0" class="focus:outline-none text-xs text-gray-600 dark:text-gray-200 px-2 bg-gray-200 dark:bg-gray-700 py-1">{{ products.brand }}</p>
                                    </div>
                                </div>
                                <!-- End -->
                                <!-- Product Price -->
                                <div class="flex items-center py-4">
                                   <h2 class="font-bold text-xl">Price: </h2>
                                    <h3 tabindex="0" class="pl-4 focus:outline-none text-indigo-700 text-xl font-semibold">${{ products.price }}</h3>
                                </div>
                                <!-- End-->
                            </div>
                            <!-- End -->
                        </div>
                        <!-- All Details Button -->
                        <div class="flex items-center justify-center w-full h-full button ">
                            <RouterLink :to="{name: 'product-details', params: {id: products.id}}" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 group w-full">
                                <span
                                    class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full">
                                </span>
                                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">View All Details</span>
                            </RouterLink>
                        </div>
                        <!-- End -->
                    </div>
                  
                </div>
               
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
const allProduct = ref([])
onMounted( async () => {
    const url = 'https://dummyjson.com/products/'
    const res = await axios.get(url)
    console.log(res.data)
    allProduct.value = res.data
})
</script>

<style scoped>

</style>