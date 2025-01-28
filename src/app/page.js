import axios from 'axios';
import React from 'react';

export const getData = async () => {
  const response = await axios('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}

const Home = async() => {
  const posts = await getData();
  return (
    <div>
      home{posts.length}
    </div>
  );
};

export default Home;