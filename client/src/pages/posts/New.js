import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";

function New({ user, setUser }) {
  let maniRef = useRef();
  let maniTechRef = useRef();
  let pediRef = useRef();
  let pediTechRef = useRef();
  let waxRef = useRef();
  let waxTechRef = useRef();
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let post = {
      mani: maniRef.current.value,
      maniTech: maniTechRef.current.value,
      pedi: pediRef.current.value,
      pediTech: pediTechRef.current.value,
      wax: waxRef.current.value,
      waxTech: waxTechRef.current.value,
      user,
    };
    await createPost(post);
    // navigate("/posts");
    localStorage.removeItem("token");
    setUser({});
    navigate("/login")
  }

  return (
    <div>
      <h1 className="text-center">Service Selection</h1>
      <br />
      <br />
      <div className="container  d-flex col-12">
        <div className="col-12 col-sm-10  mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Manicure */}
              <div className="col-12 col-md-4 my-4">
                <label for="mani">Manicures</label>
                <select
                  class="form-select"
                  ref={maniRef}
                  aria-label="Default select example"
                >
                  <option selected>None</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label for="maniTech">Mani Tech</label>
                <select
                  class="form-select"
                  ref={maniTechRef}
                  aria-label="Default select example"
                >
                  <option selected>Any</option>
                  <option value="Tech 1">Tech 1</option>
                  <option value="Tech 2">Tech 2</option>
                  <option value="Tech 3">Tech 3</option>
                </select>
              </div>
              {/* Pedicure */}
              <div className="col-12 col-md-4 my-4">
                <label for="pedi">Pedicures</label>
                <select
                  class="form-select"
                  ref={pediRef}
                  aria-label="Default select example"
                >
                  <option selected>None</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label for="pediTech">Pedi Tech</label>
                <select
                  class="form-select"
                  ref={pediTechRef}
                  aria-label="Default select example"
                >
                  <option selected>Any</option>
                  <option value="Tech 1">Tech 1</option>
                  <option value="Tech 2">Tech 2</option>
                  <option value="Tech 3">Tech 3</option>
                </select>
              </div>
              {/* Wax */}
              <div className="col-12 col-md-4 my-4">
                <label for="wax">Wax</label>
                <select
                  class="form-select"
                  ref={waxRef}
                  aria-label="Default select example"
                >
                  <option selected>None</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label for="waxTech">Wax Tech</label>
                <select
                  class="form-select"
                  ref={waxTechRef}
                  aria-label="Default select example"
                >
                  <option selected>Any</option>
                  <option value="Tech 1">Tech 1</option>
                  <option value="Tech 2">Tech 2</option>
                  <option value="Tech 3">Tech 3</option>
                </select>
              </div>
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default New;
