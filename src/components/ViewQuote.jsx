import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewQuote = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
      .then((response) => {
        setQuote(response.data.quotes); // ✅ Fix: `quotes` not `quote`
      })
      .catch((error) => {
        console.error('Error fetching quote data:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {quote.map((q, index) => (
          <div className="col-12 mb-3" key={index}>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Quote #{q.id}</h5>
                <p className="card-text">"{q.quote}"</p>
                <footer className="blockquote-footer">{q.author}</footer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewQuote;
