import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPost, updatePost } from "../../services/postService";

function Edit() {
  const [post, setPost] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  let maniRef = useRef();
  let pediRef = useRef();
  let waxRef = useRef();

  useEffect(() => {
    getPost(params.id).then((data) => setPost(data));
  }, [params.id]);
console.log(post)
  async function handleSubmit(e) {
    e.preventDefault();
    let updatedPost = {
        mani: maniRef.current.value,
        pedi: pediRef.current.value,
        wax: waxRef.current.value,
    };
    await updatePost(post._id, updatedPost);
    navigate(`/posts/${post._id}`);
  }

  return (
    <div>
      <h1>Edit Post</h1>
      <div className="buttons" style={{ flexDirection: "column" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Edit Service Selectio</h1>
            <form onSubmit={handleSubmit}>
              <label for="mani">Manicures</label>
              <select
                class="form-select"
                ref={maniRef}
                aria-label="Default select example"
              >
                <option selected>{post.mani}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <label for="mani">Pedicures</label>
              <select
                class="form-select"
                ref={pediRef}
                aria-label="Default select example"
              >
                <option selected>{post.pedi}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <label for="mani">Wax</label>
              <select
                class="form-select"
                ref={waxRef}
                aria-label="Default select example"
              >
                <option selected>{post.wax}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <button>Submit</button>
            </form>
          </div>
        </form>
        <Link to={`/posts/${post._id}`}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Edit;
