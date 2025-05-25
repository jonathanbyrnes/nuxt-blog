<template>
    <div>
        <div>
            <ul>
                <li>
                    <NuxtLink to="">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="">Articles</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="">Register</NuxtLink>
                </li>
            </ul>
        </div>
        <br>
        <br>
        <br>
        
        <div>
            <slot></slot>
        </div>

        <div>
            <h1>This is the footer</h1>
        </div>

    </div>
</template>