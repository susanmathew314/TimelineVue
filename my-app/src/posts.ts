import {DateTime } from 'luxon'

export interface Post{
    id:string
    title:string
    created:string
}
 export interface TimelinePost extends Omit<Post, 'created'>{
    created:DateTime;
 }


export const today: Post={
    id:"1",
    title:"Today details",
    created: DateTime.now().toISO()

}



export const thisWeek: Post={
    id:"2",
    title:"this week details",
    created: DateTime.now().minus({days:5}).toISO()

}

export const thisMonth: Post={
    id:"2",
    title:"this month details",
    created: DateTime.now().minus({weeks:3}).toISO()

}