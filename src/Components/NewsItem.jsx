import React from "react";
import image from "../assets/news.jpg";

export const NewsItem = ({ article, onArticleClick }) => {
  return (
    <div
      className="card news-card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "300px" }}
      onClick={onArticleClick}
    >
      <img
        src={article.urlToImage ? article.urlToImage : image}
        style={{ height: "200px", width: "282px" }}
        className="card-img-top news-card-img"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{article.title.slice(0, 55)}</h5>
        <p className="card-text">
          {article.description
            ? article.description.slice(0, 75)
            : "It is information about something that has just happened. This is the text about something."}
        </p>
        <a href={article.url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};
