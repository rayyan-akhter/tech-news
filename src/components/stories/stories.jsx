import React from "react";
import { useGlobalContext } from "../../context";
import "./style.css";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h2>Loading....</h2>
      </>
    );
  }
  return (
    <>
      <div className="storiesDiv">
        {hits.map((currentPost) => {
          const { title, author, objectID, url, num_comments } = currentPost;
          return (
            <>
              <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                  By <span>{author}</span> | <span>{num_comments}</span>{" "}
                  comments
                </p>
                <div className="cardBtn">
                  <a href={url} target="_blank">
                    Read More
                  </a>
                  <a href="#" onClick={() => removePost(objectID)}>
                    Remove
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
