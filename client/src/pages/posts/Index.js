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
    <div>
      <h1>Index View</h1>
      <div id="posts">
        <table class="table table-striped ">
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
                <td>{post.mani}</td>
                <td>{post.pedi}</td>
                <td>{post.wax}</td>
                <td>
                  <Link to={`/posts/${post._id}`} key={index}>
                    Edit
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
