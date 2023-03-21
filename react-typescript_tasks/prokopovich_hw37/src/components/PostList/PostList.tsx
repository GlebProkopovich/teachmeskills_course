import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../PostCard/PostCard';
import './PostList.scss';

const PostList = () => {
  const API_URL = 'https://studapi.teachmeskills.by';
  const [data, setData]: any[] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await axios.get(`${API_URL}/blog/posts/`).then((response) => {
          const data = response.data;
          setData([...data.results, ...data.results, ...data.results]);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="postList-container">
      <div className="left-side">
        {data.slice(5).map((obj: any) => {
          return (
            <PostCard
              key={obj.id}
              date={obj.date}
              title={obj.title}
              description={obj.description}
              img={obj.image}
              postCardContainerWidth="850px"
              postCardContainerHeight="500px"
              postCardImgWidth="300px"
              postCardImgHeight="300px"
            />
          );
        })}
        {data.slice(2).map((obj: any) => {
          return (
            <PostCard
              key={Math.random()}
              date={obj.date}
              title={obj.title}
              img={obj.image}
              postCardContainerWidth="400px"
              postCardContainerHeight="500px"
              postCardImgWidth="200px"
              postCardImgHeight="200px"
              postCardImgOrder="-1"
              contentFlexDirectionMedium="column"
            />
          );
        })}
      </div>
      <div className="right-side">
        {data.map((obj: any) => {
          return (
            <PostCard
              key={Math.random()}
              date={obj.date}
              title={obj.title}
              img={obj.image}
              postCardContainerWidth="400px"
              postCardContainerHeight="250px"
              postCardImgWidth="150px"
              postCardImgHeight="150px"
            />
          );
        })}
      </div>
    </div>
  );
};
export default PostList;
