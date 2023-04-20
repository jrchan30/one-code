import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import BaseHeader from '../components/Base/BaseHeader';
import BaseInput from '../components/Base/BaseInput';
import api from '../axios';
import DashboardPost from '../components/Dashboard/DashboardPost';
import DashboardPagination from '../components/Dashboard/DashboardPagination';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [resPosts, setResPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      setCurrentPage(1);
      const searchResults = posts.filter((post) =>
        post.title.includes(searchValue)
      );
      setResPosts(searchResults);
    } else {
      setResPosts(posts);
    }
  }, [searchValue]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await api.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setResPosts(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const startIdx = () => {
      if (currentPage === 1) {
        return 0;
      }
      return currentPage * 3;
    };
    const endIdx = () => {
      if (currentPage === 1) {
        return 3;
      }
      return currentPage * 3 + 3;
    };
    const currentPosts = [...resPosts].slice(startIdx(), endIdx());
    setCurrentPosts(currentPosts);
  }, [currentPage, resPosts]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const onChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container px-3">
      <BaseHeader showTitle name={user.name} />
      <div className="max-w-md mx-auto mt-10">
        <BaseInput
          className="bg-gray-100 border-0 w-full mb-10"
          type="search"
          placeholder="Search"
          onChange={onSearch}
        />
        <div className="flex flex-col gap-y-6">
          {currentPosts.map((x) => {
            return (
              <DashboardPost
                to={`/post-detail/${x.id}`}
                key={x.id}
                title={x.title}
                body={x.body}
              />
            );
          })}
        </div>
        <div className="mt-12 w-full flex justify-end">
          <DashboardPagination
            onChange={onChange}
            totalItems={resPosts.length}
            paginationPerPage={3}
            page={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
