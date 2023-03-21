import React from 'react';
import './PostCard.scss';

const PostCard: React.FC<any> = ({
  date,
  title,
  description,
  img,
  postCardContainerWidth,
  postCardContainerHeight,
  postCardImgWidth,
  postCardImgHeight,
  postCardImgOrder,
  contentFlexDirectionMedium,
}) => {
  return (
    <div
      className="postCard-container"
      style={{ width: postCardContainerWidth, height: postCardContainerHeight }}
    >
      <div
        className="content"
        style={{ flexDirection: contentFlexDirectionMedium }}
      >
        <div className="text-content">
          <h4>{date}</h4>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div
          className="img"
          style={{
            minWidth: postCardImgWidth,
            height: postCardImgHeight,
            order: postCardImgOrder,
          }}
        >
          <img src={img} alt="Some pic" />
        </div>
      </div>
      <div className="bottom-pannel">
        <div className="rate-pannel">
          <div className="like-dislike">
            <button>
              <span className="material-symbols-outlined">thumb_up</span>
            </button>
            <button>
              <span className="material-symbols-outlined">thumb_down</span>
            </button>
          </div>
          <div className="save-etc">
            <button>
              <span className="material-symbols-outlined">bookmark</span>
            </button>
            <button>
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </div>
        <div className="separator"></div>
      </div>
    </div>
  );
};

export default PostCard;
