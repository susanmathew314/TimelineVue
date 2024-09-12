<script setup lang="ts">
import {ref, computed} from "vue";
import {Post, today, thisWeek, thisMonth, TimelinePost} from "../posts"
import {DateTime} from 'luxon'
import TimelineItem from './TimelineItem.vue'
const periods:string[] = ["Today", "This Week", "This Month"] as const
type Period = typeof periods[number];
const currentSelection =ref<Period>("Today");


/* const posts:Post[] ={
    today,
    thisWeek, 
    thisMonth
}
console.log(posts);  */






const handleTabClick=(period:Period)=>{
   currentSelection.value = period;
}

const posts=computed<TimelinePost[]>(()=>{
    return[today,
    thisWeek, 
    thisMonth].map(post=>{
       return { ...post,
        created:DateTime.fromISO(post.created)
    }

    }).filter((post)=>{
        if(currentSelection.value==="Today"){
            return post.created >= DateTime.now().minus({day: 1})
        }
        if(currentSelection.value==="This Week"){
            return post.created >= DateTime.now().minus({week: 1})
        }
        return post
    
    })

})
</script>

<template>
      <nav class="is-priary panel">
    <span class="panel-tabs" v-for="period of periods">
        <a :key="period" @click="handleTabClick(period)">{{ period }}</a>
        
    </span>

   </nav>

<ul>
<TimelineItem  v-for="post of posts" :key="post.id"  :post ="post" />
</ul>


</template>