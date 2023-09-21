<template>
    <div>
        <section class="py-20 font-poppins dark:bg-gray-800">
            <div class="max-w-6xl px-4 mx-auto">
                <div class="flex flex-wrap mb-24 -mx-4">
                    <!-- Ask Test Start -->
                    <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                        <div class="sticky top-0 z-50 overflow-hidden ">
                            <div class="relative mb-6 lg:mb-10 ">
                                <a class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                                        viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                                        </path>
                                    </svg>
                                </a>
                                <img class="object-cover w-full lg:h-1/2" src="https://i.postimg.cc/prW7DGkK/R-14.png" alt="">
                                <a class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                                        viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="flex-wrap hidden -mx-2 md:flex">
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a class="block border border-transparent hover:border-blue-400" href="#">
                                        <img class="object-cover w-full lg:h-32" src="https://i.postimg.cc/prW7DGkK/R-14.png" alt="">
                                    </a>
                                </div>
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a class="block border border-transparent hover:border-blue-400" href="#">
                                        <img class="object-cover w-full lg:h-32" src="https://i.postimg.cc/prW7DGkK/R-14.png" alt="">
                                    </a>
                                </div>
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a class="block border border-transparent hover:border-blue-400" href="#">
                                        <img class="object-cover w-full lg:h-32" src="https://i.postimg.cc/prW7DGkK/R-14.png" alt="">
                                    </a>
                                </div>
                                <div class="w-1/2 p-2 sm:w-1/4">
                                    <a class="block border border-transparent hover:border-blue-400" href="#">
                                        <img class="object-cover w-full lg:h-32" src="https://i.postimg.cc/prW7DGkK/R-14.png" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400 ">
                                <div class="flex items-center justify-center mt-6">
                                    <span class="mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="w-5 h-5 text-blue-700 dark:text-gray-400 bi bi-chat-left-dots-fill"
                                            viewBox="0 0 16 16">
                                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">
                                            </path>
                                        </svg>
                                    </span>
                                    <div>
                                        <h2 class="text-sm font-bold text-gray-700 lg:text-lg dark:text-gray-400">
                                            Have question about buying an Oneplus</h2>
                                        <a class="text-xs text-blue-400 lg:text-sm dark:text-blue-200" href="#">
                                            Chat with an Oneplus specialist
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Ask End -->

                    <div class="w-full px-4 md:w-1/2">
                        <div class="lg:pl-20">
                            <div class="mb-6 ">
                                <span class="text-red-500 dark:text-red-200"><sapn class="font-bold text-black text-xl">Brand:</sapn> New {{ allProduct.brand }}</span>
                                <h2 class="max-w-xl mt-2 mb-4 text-5xl font-bold md:text-6xl font-heading dark:text-gray-300">
                                    {{ allProduct.title }}
                                </h2>
                                <p class="max-w-md mb-4 text-gray-500 dark:text-gray-400">
                                   {{ allProduct.description }}
                                </p>
                                <div class="">
                                    <span class="text-md font-bold capitalize">category: </span>
                                    <RouterLink :to="{name: 'product-details' , params: {id: allProduct.id}}" class="text-blue-500 hover:underline dark:text-gray-400"> {{ allProduct.category }} </RouterLink>
                                </div>
                            </div>
                            <!-- Product Colors -->
                            <div class="">
                                <p class="mb-4 text-lg font-semibold dark:text-gray-400">Choose Your Product Color</p>
                                <div class="grid grid-cols-2 gap-4 pb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                                    <div v-for="productColor in productOtherColor" :key="productColor.id">
                                        <button
                                            class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                                            <div>
                                                <div class="w-8 h-8 mx-auto mb-2 rounded-full " :style="{background: productColor.color}">
                                                </div>
                                                <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                                                    {{ productColor.name }}
                                                </p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- End -->
                            <!-- Choose Capacity -->
                            <div class="mt-6">
                                <p class="mb-2 text-lg font-semibold dark:text-gray-400">Choose your Capacity</p>
                                <div class="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                                    <div v-for="capacity in productCapacity" :key="capacity.id">
                                        <button class="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                                            <div>
                                                <!-- Size And Space Detalis -->
                                                <div class="mb-2 font-semibold dark:text-gray-400">
                                                    {{ capacity.storage }} <span class="text-xs">{{ capacity.size }}</span>
                                                </div>
                                                <!-- End -->
                                                <!-- Other Price Details -->
                                                <p class="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">{{ capacity.otherDetails }}</p>
                                                <!-- End -->
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- End -->
                            <!-- Pament Method -->
                            <div class="mt-6">
                                <p class="mb-4 text-lg font-semibold dark:text-gray-400">Choose a payment option</p>
                                <div class="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                                    <div v-for="pament in pamentMethod" :key="pament.id">
                                        <button class="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                                            <div>
                                                <p class="px-2 text-base font-semibold text-center text-gray-700 dark:text-gray-400"> {{ pament.title }} </p>
                                            </div>
                                        </button>
                                    </div> 
                                </div>
                            </div>
                            <!-- End -->
                            <!-- Delivery Details -->
                            <div class="mt-6 ">
                                <div class="flex flex-wrap items-center">
                                    <span class="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-truck"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                                            </path>
                                        </svg>
                                    </span>
                                    <h2 class="text-lg font-bold text-gray-700 dark:text-gray-400">Delivery</h2>
                                </div>
                                <div class="px-7">
                                    <p class="mb-2 text-md text-green-500  font-bold">In Stock</p>
                                    <p class="mb-2 text-md text-black  font-bold">Free Shipping</p>
                                   
                                </div>
                            </div>
                            <!--  -->
                            <div class="mt-6 ">
                            <div class="flex flex-wrap items-center">
                                <span class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
                                </span>
                                <h2 class="text-lg font-bold text-gray-700 dark:text-gray-400">Price</h2>
                            </div>
                            <div class="px-7">
                                <p class="mb-2 text-md text-black  font-bold">Product Price: 
                                        <span class=" text-red-500">${{ allProduct.stock }} 
                                            <sup class="text-green-600">
                                                <small>Discount -{{ allProduct.discountPercentage }}%</small>
                                            </sup>
                                        </span>
                                </p>
                                <p class="mb-2 text-md text-black  font-bold">Total Stock: {{ allProduct.stock }} pcs</p>
                            </div>
                        </div>
                        <!-- Rating ProgressBar -->
                        <div class="mt-6 ">
                            <div class="flex flex-wrap items-center">
                                <span class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/></svg>
                                </span>
                                <h2 class="text-lg font-bold text-gray-700 dark:text-gray-400">Rating</h2>
                            </div>
                            <div class="px-7">
                                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="{width: (allProduct.rating+30)+'%' }"> {{ allProduct.rating }}%</div>
                                </div>
                            </div>
                        </div>
                        <!-- End -->
                        <!-- Duel Button -->
                        <div class="flex justify-between mt-6">
                            <!--  -->
                            <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                </span>
                                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Add To cart</span>
                            </a>
                            <!--  -->
                            <a href="#_" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                                <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative">Shop Now</span>
                            </a>
                            <!--  -->
                        </div>
                        <!-- End -->
                        <!-- Still deciding -->
                        <div class="flex items-center mt-6 ">
                            <div>
                                <h2 class="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">Still deciding?
                                </h2>
                                <p class="mb-2 text-sm dark:text-gray-400"> Add this item to a list and easily come back
                                    to it later </p>
                            </div>
                            <span class="ml-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 bi bi-bookmark dark:text-gray-400"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <!-- End -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {useRoute} from 'vue-router'
import axios from 'axios'

const route = useRoute()
const allProduct = ref([])
onMounted( async () => {
    const url = `https://dummyjson.com/products/${route.params.id}`
    const res = await axios.get(url)
    console.log(res.data)
    allProduct.value = res.data
})

const productCapacity = [
    {
        id: 1,
        storage: '128',
        size: 'GB',
        otherDetails: 'From $99 0r $41.62/mo. for 24 mo.'
    },
    {
        id: 2,
        storage: '---',
        size: '---',
        otherDetails: '---'
    },
    {
        id: 3,
        storage: '---',
        size: '---',
        otherDetails: '---'
    },
    {
        id: 3,
        storage: '---',
        size: '---',
        otherDetails: '---'
    },
    {
        id: 4,
        storage: '---',
        size: '---',
        otherDetails: '---'
    },
    {
        id: 4,
        storage: '---',
        size: '---',
        otherDetails: '---'
    }
]
const pamentMethod = [
    { id:1, title: 'Cash On Delivery' },
    { id:1, title: '----' },
    { id:1, title: '----' },
]
const productOtherColor = [
    { id: 1, name: 'Red', color: 'red'},
    { id: 2, name: 'Green', color: 'green'},
    { id: 3, name: 'Blue', color: 'blue'},
    { id: 4, name: 'Yellow', color: 'yellow'},
    { id: 5, name: 'Black', color: 'black'},

]
</script>

<style scoped></style>