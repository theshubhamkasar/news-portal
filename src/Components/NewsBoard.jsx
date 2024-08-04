import React, { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";
import { ArticleDetail } from "./ArticleDetail";

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);  
  const [query, setQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Pagination variables
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  let records = articles.slice(firstIndex, lastIndex);
  const npage = Math.ceil(articles.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  // Search filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = articles.filter(
    (article) => article.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  if (query) {
    records = filteredItems;
  }

  useEffect(() => {
    let url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=Y72fqfDgVKy9ZIr1sguproxL3Xs3NbWk`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.results))
      .catch((error) => {
        console.error("Error fetching news:", error);
        return [];
      });
  }, [category]);

  

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      {selectedArticle ? (
        <ArticleDetail
          article={selectedArticle}
          onBackClick={handleBackClick}
        />
      ) : (
        <>
          <h2 className="text-center my-3">
            <span className="text-light">Latest </span><span className="badge bg-danger">News</span>
          </h2>

          <div className="container my-2">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search News"
                aria-label="Search"
                onChange={handleInputChange}
                value={query}
              />
            </form>
          </div>

          <div className="news-items">
            {records.map((news, index) => (
              <NewsItem
                key={index}
                article={news}
                onArticleClick={() => handleArticleClick(news)}
              />
            ))}
          </div>

          {/* Pagination */}
          <nav>
            <ul className="pagination justify-content-center bg-dark">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prevPage}>
                  Prev
                </a>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => changeCPage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};
