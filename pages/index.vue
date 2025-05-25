<script setup>
definePageMeta({
    layout: 'default'
})
const articles = ref([1, 2, 3, 4, 5])

const config=useRuntimeConfig()

const { data } = await useFetch(config.public.API_URL + '/posts')

</script>

<template>
    <div>
        <div>
            <h1>List of Articles</h1>
        </div>

        <div v-for="article in data?.data" :key="article.id">
            <h2>Article -
                <a href="https://">{{ article?.title }} </a>
            </h2>
            <div v-html="article?.post_content"></div>
        </div>
        <br>
        
    </div>
</template>