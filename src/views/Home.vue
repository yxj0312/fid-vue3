<template>
  <div class="container mx-auto px-6 py-3">
    <div
      class="h-64 rounded-md bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')"
    >
      <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
        <div class="px-10 max-w-x1">
          <h2 class="text-2xl text-white foint-semibold">
            Sport Shoes
          </h2>
          <p class="mt-2 text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Impedit hic quas temporibus iste, vel doloribus qui harum odio earum natus quisquam optio sunt, corrupti voluptas aliquam sequi est aliquid exercitationem.
          </p>
          <button class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-bold rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span>Shop Now</span>
            <svg
              class="h-5 w-5 mx-2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="md:flex mt-8 md:-mx-4">
      <div class="w-full h-64 md:mx-4">
        123
      </div>
      <div>456</div>
    </div>
    <div class="mt-16">
      <h3 class="text-gray-600 text-2xl font-medium">
        Fashions
      </h3>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        <Suspense>
          <template #default>
            <Product />
          </template>
          <template #fallback>
            <div class="container page">
              Product is downloading...
            </div>
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script>
// import { useStore } from 'vuex'
import Product from '../components/Product.vue'

export default {
  name: 'Home',
  components: {
    Product,
  },

  setup () {
    // const store = useStore();

    // return {
    //   Products: store.state.Product,
    // };
  },

}
</script>
