<script setup>
import { Art } from '../models/Art.js';


defineProps({artwork: Art})
</script>


<template>
<div>
    <RouterLink :to="{name: 'Art Details', params: {artId: artwork.id}}">
        <div class="shadow rounded">
            <img :src="artwork.small" :alt="artwork.slug">
        </div>
    </RouterLink>
</div>
</template>


<style lang="scss" scoped>

img{
    width: 300px;
}
</style>