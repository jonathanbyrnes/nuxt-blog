export const usePostStore = defineStore('post-store', () => {
    const edit = ref(false)

    const postInput = ref({
        id: null,
        title: "",
        post_content: "",
    })
    const config = useRuntimeConfig()
    const loading = ref(false)

    async function createPost() {
        const userData = getUserData()

        try {
            loading.value = true
            const apiUrl = config.public?.API_BASE_URL
            const url = edit.value ? apiUrl + '/posts/' + postInput.value.id
                : apiUrl + "/posts"

            const httpVerb=edit.value?'PUT':'POST'
            const res: any = await $fetch(url, {
                headers: {
                    Accept: "application/json",
                    "content-type": "application/json",
                    Authorization: `Bearer ${userData?.token}`
                },
                method: httpVerb,
                body: JSON.stringify(postInput.value)
            })
            loading.value = false
            edit.value = false
            postInput.value = {} as any
            successMsg(res?.message)
        } catch (error: any) {
            loading.value = false
            errorMsg(error?.message)
        }
    }

    return {
        edit,
        postInput,
        loading,
        createPost,
        config
    }
})