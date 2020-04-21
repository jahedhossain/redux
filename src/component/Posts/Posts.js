import React, { useEffect } from "react";
import "./Posts.css";
import { connect } from "react-redux";
import { fetchAllPost } from "../../redux/actions/postActions";
import PropagateLoader from "react-spinners/PropagateLoader";

function Posts({ posts, fetchAllPost }) {
  useEffect(() => {
    fetchAllPost();
  }, [fetchAllPost]);

  return (
    <>
      {posts.length === 0 ? (
        <PropagateLoader color={"#fff"} loading={true} />
      ) : (
        posts.slice(0, 10).map((post, index) => (
          <div className="Posts" key={index}>
            <h5>Post ID: {post.id}</h5>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    posts: state.postReducers.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPost: () => dispatch(fetchAllPost()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
