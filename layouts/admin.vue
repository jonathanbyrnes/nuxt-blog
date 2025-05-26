<script setup>
const userData = getUserData()
const config = useRuntimeConfig()
const loading = ref(false)

async function checkIfUserIsLoggedIn() {
    try {
        const res = await $fetch(config.public?.API_BASE_URL + '/user-logged-in', {
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${userData?.token}`
            },
            method: 'POST',
        })
    } catch (error) {
        if (error?.response?.status === 401) {
            errorMsg(error.response?._data?.message)
            localStorage.clear()
            window.location.href = '/auth/login'
        }
    }
}

async function logoutUser() {
    try {
        loading.value = true
        const res = await $fetch(config.public?.API_BASE_URL + '/logout', {
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({ userId: userData?.user?.id })
        })
        loading.value = false
        localStorage.clear()
        window.location.href = '/auth/login'
        successMsg(res?.message)
    } catch (error) {
        loading.value = false

        if (error?.response?.status === 401) {
            errorMsg(error.response?._data?.message)
            localStorage.clear()
            window.location.href = '/auth/login'
        }

    }
}

onMounted(async() => {
    await checkIfUserIsLoggedIn()
})
</script>
<template>
    <div class="bg-slate-100 h-screen">
        <div class="pt-20 mr-28 ml-28">
            <nav class="rounded-md shadow-md flex justify-between mb-10 bg-white">
                <Links />
                <div class="p-2">
                    <span class="text-indigo-500">{{ userData?.user?.email }}</span>
                    <button @click="logoutUser" class="p-2 rounded-full text-red-800">
                        {{ loading ? 'Processing...' : 'Logout' }}
                    </button>
                </div>
            </nav>
        </div>

        <div>
            <div class="mr-28 ml-28">
                <NuxtPage></NuxtPage>
            </div>
        </div>
    </div>
</template>