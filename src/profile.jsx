import { useState } from "react";

const Profile = () => {
  const [text, settext] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(ev) => settext(ev.target.value)}
      />
      <p>Salom,{text ? text : "Mehmon"}</p>
      {/* <p>Salom {text}|| Mehmon</p> */}
      {/* profileComp:{count}
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
      <button onClick={() => setcount(0)}>reset</button> */}
    </div>
  );
};
export default Profile;
