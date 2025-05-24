<template>
  <div>
    <ion-toolbar class="border-0 py-4">
      <div class="flex justify-between items-center">
        <ion-icon
          @click="$router.go(-1)"
          name="chevron-back-outline"
          class="text-3xl mb-1 mx-4 hover:cursor-pointer"
        ></ion-icon>
        <span class="font-latoGoogle text-[2.2rem]">ZAMOR</span>
        <ion-icon name="notifications-outline" class="text-3xl mx-4"></ion-icon>
      </div>
    </ion-toolbar>
  </div>
</template>
