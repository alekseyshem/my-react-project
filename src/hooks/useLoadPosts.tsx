import { useEffect, useState } from "react";
import {loadPosts } from "../api";
import Post from "../dto/Post";

const useLoadPosts = () => {
  const [posts, setPosts] = useState<Array<Post>>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)

    loadPosts().then((posts) => {
      setPosts(posts);
      setIsLoading(false)
    });
  }, []);
  return { posts, setPosts, isLoading };
};

export { useLoadPosts };
