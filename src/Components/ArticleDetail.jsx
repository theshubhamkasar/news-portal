import image from "../assets/news.jpg";

export const ArticleDetail = ({ article, onBackClick }) => {
  if (!article) return null;

  return (
    <div className="deatailnews">
      <button onClick={onBackClick}>Back to Home</button>
      <h1>{article.title}</h1>
      <p>{article.byline || 'Unknown'}</p>
      <p>{new Date(article.published_date).toLocaleString()}</p>
      <p>{article.abstract}</p>
      {(article.multimedia[0].url ? article.multimedia[0].url : image) && (
        <img
          src={article.multimedia[0].url ? article.multimedia[0].url : image}
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
