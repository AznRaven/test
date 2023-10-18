import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";

function New({ user }) {
  let subjectRef = useRef();
  let maniRef = useRef();
  let pediRef = useRef();
  let waxRef = useRef();
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let post = {
      subject: subjectRef.current.value,
      mani: maniRef.current.value,
      pedi: pediRef.current.value,
      wax: waxRef.current.value,
      user,
    };
    await createPost(post);
    navigate("/posts");
  }

  return (
    <div>
      <h1>Service Selection</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="nme">Subject:</label>
        <br />
        <input type="text" id="nme" ref={subjectRef} />
        <br />
        <br />

        <label htmlFor="clr">Mani:</label>
        <br />
        <textarea id="clr" cols="30" rows="10" ref={maniRef} />
        <br />
        <br /> */}
        <label for="mani">Manicures</label>
        <select
          class="form-select"
          ref={maniRef}
          aria-label="Default select example"
        >
          <option selected>None</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="mani">Pedicures</label>
        <select
          class="form-select"
          ref={pediRef}
          aria-label="Default select example"
        >
          <option selected>None</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="mani">Wax</label>
        <select
          class="form-select"
          ref={waxRef}
          aria-label="Default select example"
        >
          <option selected>None</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default New;
