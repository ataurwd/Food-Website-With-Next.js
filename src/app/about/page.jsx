import axios from "axios";
import Link from "next/link";
import React from "react";
export const getData = async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};
const About = async () => {
  const data = await getData();
  return (
    <div>
      <h1>About Page</h1>
      <div className="grid grid-cols-4 gap-5">
        {data.map((post) => (
          <div className="border-2 p-5 rounded-md" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/about/${post.id}`} className="px-3 py-2 rounded-md bg-green-200">
              See more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
