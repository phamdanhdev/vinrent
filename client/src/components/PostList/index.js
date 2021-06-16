import { Grid } from "@material-ui/core";
import Post from "./Post";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index";
import { postsState$ } from "../../redux/selectors";

export default function PostList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  const posts = useSelector(postsState$);
  console.log("[PostList-Post]", posts);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {posts.map((post) => (
        <Grid item xs={12} sm={6} key={post._id}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
