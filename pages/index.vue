<script setup>
definePageMeta({
    layout: 'default'
})
const articles = ref([1, 2, 3, 4, 5])
</script>

<template>
    <div>
        <div>
            <h1>List of Articles</h1>
        </div>

        <div v-for="(index, article) in articles" :key="index">
            <h2>Article - {{ article }}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum illum asperiores, ad illo tenetur officiis aliquid distinctio. Provident cumque magni fuga maiores adipisci ducimus dolor magnam cupiditate, accusantium quasi eaque.</p>
        </div>
        <br>
        
    </div>
</template>