import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/postService";
import { deletePost } from "../../services/postService";
import { Link, useNavigate, useParams } from "react-router-dom";

function Index({ user }) {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  async function fetchData() {
    const data = await getAllPosts();
    setPosts(data);
  }

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();

    // Set up an interval to fetch data every 15 seconds
    const intervalId = setInterval(fetchData, 15000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  async function handleDeletePost(postID) {
    await deletePost(postID);
    console.log("Post deleted");
    navigate("/login");
  }

  return (
    <div className="col col-10 border border-danger mx-auto">
      <h1 className="text-center">Customer Wait List</h1>
      <div id="posts">
        <table class="table table-striped text-center table align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Manicure</th>
              <th scope="col">Pedicure</th>
              <th scope="col">Wax</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{post.user}</td>
                <td>
                  {post.mani} <br /> {post.maniTech}
                </td>
                <td>
                  {post.pedi} <br /> {post.pediTech}
                </td>
                <td>
                  {post.wax} <br /> {post.waxTech}
                </td>
                <td>
                  {user == "admin" || (user == post.user && <button onClick={() => handleDeletePost(post._id)}>Delete</button>)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {user && (
          <Link to="/posts/new">
            <button>NEW POST</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Index;
