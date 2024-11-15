<template>
    <nav>
        <RouterLink :to="{ name:'home' }"></RouterLink>
    </nav>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>

</style>