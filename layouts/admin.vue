<template>
    <div>

        <NuxtLink to="/admin/articles">Articles</NuxtLink>
        <br>
        <NuxtLink to="/admin/create-post">Create Post</NuxtLink>

        <div>
            <slot></slot>
        </div>

        <div style="background-color: gainsboro;">
            <h1>Admin Footer</h1>
        </div>

    </div>
</template>