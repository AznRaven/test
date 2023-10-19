import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../services/postService";

function Index({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getAllPosts();
      setPosts(data);
    }
    loadData();
  }, []);
  console.log(posts);
  return (
    <div className="col col-10 border border-danger mx-auto">
      <h1 className="text-center">Customer Wait List</h1>
      <div id="posts">
        <table class="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Manicure</th>
              <th scope="col">Pedicure</th>
              <th scope="col">Wax</th>
              <th scope="col">Edit</th>
              {user == 'admin' && <th scope="col">Delete</th>}
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}
            {posts?.map((post, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{post.user}</td>
                <td>{post.mani} <br /> {post.maniTech} </td>
                <td>{post.pedi} <br /> {post.pediTech}</td>
                <td>{post.wax} <br /> {post.waxTech}</td>
                <td>
                  {/* <Link to={`/posts/${post._id}`} key={index}>
                    Edit
                  </Link> */}
                  <Link to={`/posts/${post._id}/edit`}>
                                    <button>Edit</button>
                                </Link>
                </td>
                {user == 'admin' && <td>Delete</td>}
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
