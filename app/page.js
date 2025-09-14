"use client";

import Header from "@/Components/Header";
import { MyContext } from "@/Helper/Context";
// !Two ways binding
// import React, { use, useState } from "react";

// const page = () => {
//   const [username, setusername] = useState("");
//   return (
//     <>
//       <form>
//         <input
//           className="border-2 border-zinc-800 p-2 m-5 rounded-lg"
//           type="text"
//           placeholder="Enter something..."
//           value={username}
//           onChange={(e) => {
//             setusername(e.target.value);
//             console.log(username);
//           }}
//         />

//       </form>
//     </>
//   );
// };

// export default page;

// !App rounting

// import React from "react";

// const page = () => {
//   return (
//     <>
//       <h1 className="text-4xl">This is Home Page</h1>
//       <a href="/Contact">Go to contact</a>
//     </>
//   );
// };

// export default page;

// !Fetch data from API and useEffect
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";

// const page = () => {
//   const [users, setusers] = useState([]);
//   const getUsers = async () => {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     setusers(data);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <>
//       <button
//         onClick={getUsers}
//         className="bg-green-500 p-2 m-5 rounded-2xl text-white font-bold"
//       >
//         Get Data
//       </button>
//       <div className="w-full p-5 bg-slate-200 m-5 rounded-xl">
//         {users.map((e) => {
//           return (
//             <li className="list-none m-2">
//               {e.name} ---- <a href={`/${e.id}`}>Explore</a>
//             </li>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default page;

// !Context API
// import React, { useState } from "react";

// const page = () => {
//   const [num, setnum] = useState(10);
//   return (
//     <div>
//       This is Home Page
//       <Header num={num} />
//     </div>
//   );
// };

// export default page;

// !Context API with useContext
import React, { useContext } from "react";

const page = () => {
  const user = useContext(MyContext);
  console.log(user);
  return (
    <div>
      This is Home Page
      <h1 className="text-4xl">Hello {user}</h1>
      <Header />
    </div>
  );
};

export default page;
