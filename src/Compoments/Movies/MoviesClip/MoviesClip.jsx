import React from "react";
import "./MoviesClip.css";
const MoviesClip = ({ movie }) => {
  const linkTable = movie.PostUrl;
  return (
    <div>
      <div className="clip">
      <div className="text">
      PASSEZ UN BON MOMENT      
        </div>
        <div className="video">
          {linkTable.map((ele) => {
            return (
              <div>
                <div>
                
                  <iframe
                    width="560"
                    height="315"
                    src={ele.postUrl}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <h1>{ele.name}</h1>
                  <div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MoviesClip;
