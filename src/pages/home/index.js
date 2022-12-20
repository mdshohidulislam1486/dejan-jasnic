import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { getPosts } from './axios';

const Home = () => {
  const [posts, setPost] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  console.log(posts);
  console.log(searchResult);
  useEffect(() => {
    getPosts()
      .then((json) => {
        setPost(json);
        return json;
      })
      .then((json) => {
        setSearchResult(json);
      });
  }, []);

  return (
    <Layout>
      <Typography>lorem5000</Typography>
    </Layout>
  );
};

export default Home;
