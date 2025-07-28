import axios from "axios"


export const GetAllCourses = async (url)=>{
    let res = await axios.get(url)
    return res.data
}
