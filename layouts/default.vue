<template>
    <div>
        <div style="background-color: gainsboro;">
            <ul>
                <li>
                    <NuxtLink to="">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog/About">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog/Contact">Contact</NuxtLink>
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

        <div style="background-color: gainsboro;">
            <h1>This is the footer</h1>
        </div>

    </div>
</template>