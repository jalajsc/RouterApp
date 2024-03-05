import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  //   const [data, setData] = useState("");
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/jalajsc")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-white bg-slate-800 text-center p-4 ">
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} alt="image1" className="h-20" />
    </div>
  );
}

export default GitHub;

export const githubDataLoader = async () => {
  const response = await fetch("https://api.github.com/users/jalajsc");
  return response.json();
};
