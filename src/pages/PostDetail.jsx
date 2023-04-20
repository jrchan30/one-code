import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../axios';
import BaseHeader from '../components/Base/BaseHeader';
import { UserContext } from '../context/UserProvider';
import BackArrow from '../assets/back-arrow.png';
import BaseCommentsIcon from '../components/Base/BaseCommentsIcon';

const PostDetail = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const params = useParams();
  const [postDetail, setPostDetail] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const navigateBack = () => {
    navigate(-1);
  };

  const getPostDetail = async () => {
    try {
      setLoading(true);
      const res = await api.get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      setPostDetail(res.data);
    } finally {
      setLoading(false);
    }
  };

  const getComments = async () => {
    try {
      setLoading(true);
      const res = await api.get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
      );
      setComments(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Promise.all([getPostDetail(), getComments()]);
  }, []);

  return (
    <div className="container px-3">
      <BaseHeader showTitle name={user.name} />
      <div className="max-w-lg mx-auto">
        <button className="btn" onClick={navigateBack}>
          <img src={BackArrow} alt="back" width="40" />
        </button>
        <div className="grid grid-cols-12 gap-x-10 items-center">
          <div className="col-span-2 text-lg font-bold">Dummy</div>
          <div className="col-span-10 flex flex-col gap-y-4">
            <div className="text-gray-700 font-semibold">
              {postDetail.title}
            </div>
            <div className="text-gray-500">{postDetail.body}</div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8">
          <div className="col-span-2" />
          <div className="col-span-10">
            {showComments ? (
              <>
                <div className="text-gray-500 font-bold mb-5">All Comment</div>
                <div className="grid grid-cols-4 gap-y-4 items-center gap-x-12">
                  {comments.map((comment) => (
                    <>
                      <div className="col-span-1 font-bold text-xl">Dummy</div>
                      <div className="col-span-3">{comment.body}</div>
                    </>
                  ))}
                </div>
              </>
            ) : (
              <BaseCommentsIcon onClick={() => setShowComments(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetail;
