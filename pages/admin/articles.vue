<script setup>
definePageMeta({
    layout: 'admin'
})
const config=useRuntimeConfig()
const userData=getUserData()
const query=ref('')
const { data,error,status,refresh } = await useFetch(config.public?.API_BASE_URL+ "/posts", {
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userData?.token}`
    },
    watch: [query],
    query: {
        query:query.value
    }
})

function _debounce(cb,delay) {
    let timer
    return function(...args) {
        clearTimeout(timer)
        timer=setTimeout(()=>cb(args),delay)
    }
}

const searchPost=_debounce(function(searchVal){
    console.log(searchVal)
})

</script>

<template>
    <div>
        <h1 class="text-2xl mb-2">Articles</h1>
        <PostListTable @searchPost="searchPost" :status="status" :post="data?.data"/>
    </div>
</template>