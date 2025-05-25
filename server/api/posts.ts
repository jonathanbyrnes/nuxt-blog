export default defineEventHandler( (event) => {
    const config = useRuntimeConfig()
    const key = config.privateKey
    return {
        key
    }
})