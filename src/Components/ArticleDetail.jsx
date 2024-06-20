import image from "../assets/news.jpg";

export const ArticleDetail = ({ article, onBackClick }) => {
  if (!article) return null;

  return (
    <div className="deatailnews">
      <button onClick={onBackClick}>Back to Home</button>
      <h1>{article.title}</h1>
      <p>By {article.author}</p>
      <p>{new Date(article.publishedAt).toLocaleString()}</p>
      <p>{article.content}</p>
      {(article.urlToImage ? article.urlToImage : image) && (
        <img
          src={article.urlToImage ? article.urlToImage : image}
          alt={article.title}
          style={{ width: "100%", maxHeight: "427px" }}
        />
      )}
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};
