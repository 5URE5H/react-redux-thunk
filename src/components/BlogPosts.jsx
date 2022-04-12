import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogPosts } from "../store/actions";
import { Author } from "./Author";

export const BlogPosts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogPosts());
  }, [dispatch]);

  return posts.map((post) => {
    return (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Author userId={post.userId} />
      </div>
    );
  });
};
