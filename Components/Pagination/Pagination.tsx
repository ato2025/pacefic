import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const pageSize = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);


  const fetchPosts = async (page: number) => {
    try {
      const response = await fetch(`https://api.example.com/posts?page=${page}&limit=${pageSize}`);
      const dAta = await response.json();
      setPosts(dAta);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchPosts(page);
  };

 
  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(posts.length / pageSize);
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} onClick={() => handlePageChange(i)} disabled={i === currentPage}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div>
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default Pagination;
