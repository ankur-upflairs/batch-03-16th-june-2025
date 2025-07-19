import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdatePost from "./UpdatePost";
import { useNavigate } from "react-router";

function Home() {
  const [posts, setPosts] = useState([]);
  const [change, setChange] = useState(false);
  const [id, setId] = useState(null);
  let navigate = useNavigate()
  useEffect(() => {
    async function getdata(params) {
      let res = await axios.get("http://localhost:3000/posts");
      // console.log(res.data)
      setPosts(res.data);
    }
    getdata();
  }, [change]);
  async function deletePost(id) {
    let res = await axios.delete(`http://localhost:3000/posts/${id}`);
    setChange(!change);
  }
  function update(id) {
    navigate(`/create/update/${id}`) 
  }
  return (
    <div>      
          {posts.map((post, index) => {
            return (
              <div className="container border border-1 my-2" key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <button onClick={() => update(post.id)}>update</button>
                <button onClick={() => deletePost(post.id)}>delete</button>
              </div>
            );
          })}
    </div>
  );
}

export default Home;
