<script setup lang="ts">
import { TimelinePost } from '../posts';

defineProps<{
    post:TimelinePost
}>()
</script>

<template>
        <li class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
        <a>{{ post.title }}</a>
        <div>{{ post.created.toFormat("d MMM") }}</div>
    </li>
</template>