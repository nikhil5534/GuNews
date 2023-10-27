import React from "react";

const NewsItems =(props)=> {
 
    let { title, description, imgUrl, newsUrl, author, date, source } =
      props;
    return (
      <div>
        <div className="card" style={{ backgroundColor: " transparent" }}>
          <div>
            <span
              className=" badge rounded-pill bg-danger"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: 0,
              }}
            >
              {source}
            </span>
          </div>
          <img
            src={imgUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "180px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p>
              {" "}
              <small
                className="card-text "
                style={{ color: "white", fontSize: "13px" }}
              >
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItems;
