import axios from "axios"


export const getPostsApi = async() => {
   
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/cameras`)
    return res.data;
}

export const getPostsApiTelevision = async() => {
  
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/televisions`)
    return res.data;
}

export const getPostsApiMobile = async() => {
   
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/mobilesandtablets`)
    return res.data;
}

export const getPostsApiHeadphone = async() => {
  
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/headphones`)
    return res.data;
}

export const getPostsApiHome = async() => {

    let res = await axios.get(`https://rus-digital-televisions.onrender.com/homeappliances`)
    return res.data;
}

export const getPostsApiComputer = async() => {
    
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/computers`)
    return res.data;
}


export const getPostsApiKitchen = async() => {

    let res = await axios.get(`https://rus-digital-televisions.onrender.com/kitchen`)
    return res.data;
}

export const getPostsApiPersonal = async() => {
    
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/personalcare`)
    return res.data;
}

export const getPersonalApi = async(name,id) => {
    
    let res = await axios.get(`https://rus-digital-televisions.onrender.com/${name}/${id}`)
    return res.data;
}