import { createRouter,createWebHistory } from "vue-router"
import Home from '../view/Home.vue'
import Posts from '../view/Posts.vue'
import Post from '../view/Post.vue'
import Contact from '../view/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component : Home
    },
    {
        path: '/posts',
        name: 'Posts',
        component : Posts
    },                                                                   
    {
        path: '/post/:id',
        name: 'Post',
        component : Post
    },
    {
        path: '/contact',
        name: 'Contact',
        component : Contact
    }, 
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;

