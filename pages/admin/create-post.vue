<script setup>
definePageMeta({
    layout: 'admin'
})

const postStore = usePostStore()
const { postInput, loading, edit } = storeToRefs(postStore)
</script>

<template>
    <div>
        <h1 class="text-2xl mb-2">Create Post</h1>
        <div class="flex flex-col mb-2 w-[600px]">
            <input v-model="postInput.title" placeholder="Title..." type="text"
                class="mb-2 border rounded-md py-1 px-2 shadow-md" />

            <ClientOnly fallback-tag="span" fallback="Loading comments">
                <rich-editor :value="postInput.post_content" @input="event => postInput.post_content = event" />
            </ClientOnly>

        </div>

        <div class="flex justify-between">
            <NuxtLink to="/admin/articles" class="rounded-md text-gray-700 hover:text-white hover:bg-indigo-700 px-2 py-2 text-sm font-semibold">
                Back
            </NuxtLink>
            <button :disabled="loading" @click="postStore.createPost"
                :class="edit ? 'bg-yellow-500 rounded-md text-white px-2 py-2 text-sm font-semibold' : 'bg-indigo-700 rounded-md text-white px-2 py-2 text-sm font-semibold'">
                {{ loading ? 'Processing...' : edit ? 'Update Post' : 'Create Post' }}
            </button>


        </div>
    </div>
</template>