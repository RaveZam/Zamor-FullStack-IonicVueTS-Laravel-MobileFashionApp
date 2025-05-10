<template>
    <ion-page>
        <ion-content>
            <div class="flex flex-col font-latoGoogle h-full mx-4">
                <div   @click="$router.go(-1)" class="mt-8 mb-4 w-full">
                    <IonIcon class="text-xl" name="arrow-back-sharp"></IonIcon>
                </div>
                <div>
                    <span class="text-[0.8rem] whitespace-nowrap">Monday 26, May - Wednesday 28, May</span>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from "@ionic/vue";





</script>

