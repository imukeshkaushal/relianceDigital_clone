import axios from "axios"



export const getPostsApi = async() => {
    let res = await axios.get("https://rus-digital-televisions.onrender.com/headphones")
    return res.data
   
}

