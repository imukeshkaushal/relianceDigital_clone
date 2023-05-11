import axios from "axios"


export const getPostsApi = async() => {
   
    let res = await axios.get(`https://drab-cyan-puffer-cap.cyclic.app/cameras`)
    return res.data;
}

export const getPostsApiTelevision = async() => {
  
    let res = await axios.get(`https://drab-cyan-puffer-cap.cyclic.app/televisions`)
    return res.data;
}

export const getPostsApiMobile = async() => {
   
    let res = await axios.get(`https://drab-cyan-puffer-cap.cyclic.app/mobilesandtablets`)
    return res.data;
}

export const getPostsApiHeadphone = async() => {
  
    let res = await axios.get(`https://drab-cyan-puffer-cap.cyclic.app/headphones`)
    return res.data;
}

export const getPostsApiHome = async() => {

    let res = await axios.get(`https://drab-cyan-puffer-cap.cyclic.app/homeappliances`)
    return res.data;
}

export const getPostsApiComputer = async() => {
    
    let res = await axios.get(`https://drab-cyan-puffer-cap.cyclic.app/computers`)
    return res.data;
}


export const getPostsApiKitchen = async() => {

    let res = await axios.get(`https://drab-cyan-puffer-cap.cyclic.app/kitchen`)
    return res.data;
}

export const getPostsApiPersonal = async() => {
    
    let res = await axios.get(`https://drab-cyan-puffer-cap.cyclic.app/personalcare`)
    return res.data;
}

export const getPersonalApi = async(name,id) => {
    
    let res = await axios.get(`https://drab-cyan-puffer-cap.cyclic.app/${name}/${id}`)
    return res.data; 
    
}