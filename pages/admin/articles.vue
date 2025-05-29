<script setup>
definePageMeta({
    layout: 'admin'
})
const mockPaginationData = {
    data: [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
    ],
    meta: {
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 3,
        per_page: 10,
        total: 3
    },
    links: {
        first: '/?page=1',
        last: '/?page=1',
        prev: null,
        next: null
    }
};

const config = useRuntimeConfig()
const query = ref('')
const userData = getUserData()
const page = ref(1)
const { data, error, status, refresh } = await useFetch(config.public?.API_BASE_URL + "/posts", {
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userData?.token}`
    },
    watch: [query, page],
    query: {
        query: query.value,
        page: page
    }
})

function _debounce(cb, delay) {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => cb(args), delay)
    }
}

const searchPost = _debounce(function (searchVal) {
    query.value = searchVal[0]
}, 200)

const paginateData = async (newPageVal) => {
    page.value = newPageVal
    await refresh
}

function deletePost(id) {
    promptUser('Are you sure you want to delete this?').then(async function () {
        try {
            loading.value = true
            const res = await $fetch(config.public?.API_BASE_URL + '/posts/' + id, {
                headers: {
                    Accept: "application/json",
                    "content-type": "application/json",
                    Authorization: `Bearer ${userData?.token}`
                },
                method: 'DELETE',
            })
            loading.value = false
            await refresh
            successMsg(res?.message)
        } catch (error) {
            loading.value = false
            errorMsg(error?.message)
        }
    })
}

const router = useRouter()
const postStore = usePostStore()
const { postInput, edit } = storeToRefs(postStore)

const uploadPostStore = useUploadPostImage()
const { modalVal } = storeToRefs(uploadPostStore)

function editPost(post) {
    postInput.value = post
    edit.value = true
    router.push('/admin/create-post')
}

</script>

<template>
    <div>
        <h1 class="text-2xl mb-2">Articles</h1>
        <UploadPostImage :show="modalVal" @getPosts="refresh" />

        <PostListTable v-if="data?.data" @uploadImage="uploadPostStore.showModal" @delete-post="deletePost"
            @edit-post="editPost" @searchPost="searchPost" :status="status" :post="data?.data?.data" />

        <span v-else class="shadow-md px-2 py-2 rounded-md mt-20 text-red-700 border font-semibold text-center">
            No data found, is the API online?
        </span>

        <TailwindPagination v-if="data?.data" class="mt-2" :data="mockPaginationData"
            @pagination-change-page="paginateData" />

    </div>
</template>
<style scoped>
button.relative.inline-flex.items-center.px-4.py-2.text-sm.font-medium.border.focus\:z-20.bg-blue-50.border-blue-500.text-blue-600.z-30 {
    background: #4f46e5;
    color: white;
    border-radius: 5px;
}
</style>