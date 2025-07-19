import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router'

function UpdatePost() {
    // let params = useParams()
    let {id} = useParams()
    let navigate = useNavigate(null)
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]:value})
  };
  useEffect(()=>{
    async function getdata(){
        let res =await axios.get('http://localhost:3000/posts/'+id)
        setFormData({
            title:res.data.title,
            body:res.data.body
        })
    }
    getdata()
  },[id])
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.put("http://localhost:3000/posts/"+id, formData);
    console.log("Submitted Data:", formData);
    console.log(res);
    // You can add API calls or state lifting here
    setFormData({
      title: "",
      body: "",
    });    
    navigate('/')
  };

  return (<>
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.field}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          name="body"
          rows="5"
          value={formData.body}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    <button type="button" onClick={()=>navigate('/')}>Cancel Update</button>
    </form>
    </>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  field: {
    display: "flex",
    flexDirection: "column",
  },
};

export default UpdatePost