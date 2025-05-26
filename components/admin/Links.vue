<script setup>
const links = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
    },
    {
        name: "Articles",
        path: "/admin/articles",
    },
];
</script>

<template>
    <ul class="flex gap-2 py-2 px-2">
        <li v-for="link in links" :key="link.path" class="text-sm hover:bg-indigo-700 font-semibold hover:text-white py-2 px-2 rounded-md">
            <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
        </li>
    </ul>
</template>

<style scoped>
.router-link-exact-active {
    --tw-bg-opacity: 1;
    color: white;
    background-color: rgb(67 56 202 / var(--tw-bg-opacity, 1));
    font-weight: 600;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.375rem;
}
</style>