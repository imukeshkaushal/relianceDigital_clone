import {GET_POSTS_ERROR,GET_POSTS_LOADING,GET_POSTS_RESET,GET_POSTS_SUCCESS} from "./Product.types"
import { getPostsApi } from "./ProductApi"
export const getPosts=()=>async(dispatch)=>{
    dispatch({type:GET_POSTS_LOADING});
    try{
        let data = await getPostsApi()
        console.log(data)
        dispatch({type:GET_POSTS_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_POSTS_ERROR})
    }
}

//bm