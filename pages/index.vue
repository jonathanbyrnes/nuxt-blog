<script setup>
definePageMeta({
    layout: 'default'
})
const articles = ref([1, 2, 3, 4, 5])

const config=useRuntimeConfig()

const { data } = await useFetch(config.API_URL + '/posts')

</script>

<template>
    <div>
        <div>
            <h1>List of Articles</h1>
        </div>

        <div v-for="(index, article) in data" :key="index">
            <h2>Article - {{ article?.title }}</h2>
            <p>{{ article?.post_content }}</p>
        </div>
        <br>
        
    </div>
</template>