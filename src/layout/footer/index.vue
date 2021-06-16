<template>
  <footer class="footer bg-gray-800 text-white relative">
    <div class="container mx-auto px-6">
      <div class="sm:flex sm:mt-16">
        <div class="sm:w-1/2 sm:pl-16 mt-8 sm:mt-0 pr-4">
          <a>
            <img
              alt="logo"
              src="https://stc.fidcdn.net/assets/img-redesign/logo-peek-und-cloppenburg.03c0.svg"
              class="h-8"
            />
            <p class="text-teal-100 mt-2">Hey how are you</p>
          </a>
          <div class="flex mt-6">
            <a class="mr-3 flex items-center">
              <img
                src="https://stc.fidcdn.net/assets/img-redesign/logo-peek-und-cloppenburg.03c0.svg"
                alt=""
                class="w-8 h-8 mr-2"
              />
              <span class="text-white hover:underline">Click</span>
            </a>
          </div>
        </div>
        <div class="mt-16 sm:mt-0 sm:w-1/2 sm:pr-16 flex flex-row">
          <div class="flex flex-col w-2/3 sm:w-1/2 mr-4">
            <span class="font-bold text-white uppercase mb-2"> Links </span>
            <ul class="flex-1">
              <li class="mb-1">
                <a class="text-teal-100 hover:text-white cursor-pointer">Links</a>
              </li>
              <li class="mb-1">
                <a class="text-teal-100 hover:text-white">Links</a>
              </li>
              <li class="mb-1">
                <a class="text-teal-100 hover:text-white">Links</a>
              </li>
              <li class="mb-1">
                <a class="text-teal-100 hover:text-white">Links</a>
              </li>
              <li class="mb-1">
                <a class="text-teal-100 hover:text-white">Links</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-white uppercase mb-2">Utilities</span>
            <ul class="flex-1">
              <li class="mb-1">
                <a class="text-teal-100 hover:text-white cursor-pointer">Links</a>
              </li>
              <li class="mb-1">
                <a class="text-teal-100 hover:text-white">Links</a>
              </li>
              <li class="mb-1">
                <a class="text-teal-100 hover:text-white">Links</a>
              </li>
              <li class="mb-1">
                <a class="text-teal-100 hover:text-white">Links</a>
              </li>
              <li class="mb-1">
                <a class="text-teal-100 hover:text-white">Links</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6">
      <div class="mt-16 border-teal-800 border-t flex flex-col items-center">
        <div class="sm:w-2/3 text-center py-6">
          <p class="text-sm text-teal-100 mb-2">@ 2020 by Highscore Studio</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
