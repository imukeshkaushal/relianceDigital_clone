import axios from "axios"

let el = JSON.parse(localStorage.getItem("items"))

console.log(el)

export const getPostsApi = async() => {
    console.log(el)
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/${el}`)
    return res.data;
}

