import axios from "axios"

let el = JSON.parse(localStorage.getItem("items"))

console.log(el)

export const getPostsApi = async() => {
    console.log(el)
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/cameras`)
    return res.data;
}

export const getPostsApiTelevision = async() => {
    console.log(el)
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/televisions`)
    return res.data;
}

export const getPostsApiMobile = async() => {
    console.log(el)
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/mobilesandtablets`)
    return res.data;
}

export const getPostsApiHeadphone = async() => {
    console.log(el)
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/headphones`)
    return res.data;
}

export const getPostsApiHome = async() => {
    console.log(el)
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/homeappliances`)
    return res.data;
}

export const getPostsApiComputer = async() => {
    console.log(el)
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/computers`)
    return res.data;
}


export const getPostsApiKitchen = async() => {
    console.log(el)
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/kitchen`)
    return res.data;
}

export const getPostsApiPersonal = async() => {
    console.log(el)
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/personalcare`)
    return res.data;
}