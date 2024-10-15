import { useState } from 'react';
import {useNavigate} from "react-router-dom";
export default function LoginForm() {
    const navigate = useNavigate();

    const [inputId, setInputId] = useState(null);
    const [inputPw, setInputPw] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        if(inputId !== 'id' || inputPw !== 'pw') {
            alert('id , pw가 다릅니다.');
            return;
        } else {
            navigate("/ScalingUpwithReducerandContext");
        }
    }

    return (
      <form onSubmit={handleSubmit}>
          <h1>Id</h1>
          <input
              type="text"
              name="id"
              id="id"
              value={inputId}
              onChange={e => setInputId(e.target.value)}
              placeholder="id 입력"
              />

          <h1>Password</h1>
          <input
              type="password"
              name="pw"
              id="pw"
              value={inputPw}
              onChange={e => setInputPw(e.target.value)}
              placeholder="pw 입력"
          />

          <p>
              <button>Submit</button>
          </p>

      </form>
    );
}