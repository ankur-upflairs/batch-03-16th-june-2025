import axios from "axios"

export let backend = 'http://localhost:3000/courses/'

export const GetAllCourses = async ()=>{
    let res = await axios.get(backend)
    return res.data
}

export const GetSingleCourse = async (id)=>{
    let res = await axios.get(backend+'/'+id)
    return res.data
}

export const createCourse = async (data)=>{
    let res = await axios.post(backend,data)
    return res.data
}