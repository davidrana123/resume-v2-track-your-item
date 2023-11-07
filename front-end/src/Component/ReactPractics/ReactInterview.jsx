import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function PaginatedData() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=20`);
      const newData = response.data;
      setData((prevData) => [...prevData, ...newData]);
      setHasMore(newData.length > 0);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    if (!loading) {
      setPage(page + 1);
    }
  };

  const lastItemRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        handleLoadMore();
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <div style={{ backgroundColor:'white' }}>
      <ul>
        {data.map((item, index) => {
          if (index === data.length - 1) {
            return (
              <li key={item.id} ref={lastItemRef}>
                {item.title}
              </li>
            );
          } else {
            return <li key={item.id}>{item.title}</li>;
          }
        })}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default PaginatedData;
