import axios from "axios"



export const getPostsApi = async() => {
    let res = await axios.get("https://rus-digital-televisions.onrender.com/headphones")
    let data = await res.data
    console.log(data)
}

