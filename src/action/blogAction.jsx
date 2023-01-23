import {v4 as uuid} from 'uuid'

export const addBlog =({img,title,desc,price})=>({
    type:"ADD_BLOG",
    blog :{
        
        id:uuid(),
        img:img,
        title:title,
        desc:desc,
        price:price
    }
}) ;

export const editBlog =(id,update)=>({
    type:"UPDATE_BLOG",
    id,
    update,
}) ;

export const removeBlog =({id})=>({
    type:"REMOVE_BLOG",
    id:id
}) ;