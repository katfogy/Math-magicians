import './Calculator.css';
import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getQuotes = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=learning',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'wifJwRXq2JXJebvDhx2hhA==2o6k7DNoMHsIgzzm',
            },
            contentType: 'application/json',
          },
        );
        console.log(res);
        const quote = await res.json();

        setQuote(quote);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    getQuotes();
  }, []);

  return (
    <div className="container">
      {isError && <h2>Something went wrong! Try again</h2>}
      {isLoading ? (
        <h3 className="quote">Loading...</h3>
      ) : (
        <ul>
          {quote.map((q) => {
            const { quote } = q;
            return (
              <li key={quote} className="quote-list">
                {quote}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Quotes;
