import React, { useState, useEffect } from 'react';
import { Timer } from '@/utils'
import { ShowLoading } from '@/components'
export default function (props) {
  const [state, setState] = useState();
  console.log(props);
  useEffect(() => {

  }, []);

  return (
    <div className='comment'>
      <h1 className='comment-title'>评论</h1>
      <div className="comment-lists">
        {props?.lists?.map(item => (
          <div className="comment-lists_item" key={item?.id}>
            <img src={item?.avatar} alt="" className="avatar" />
            <div className="right">
              <div className="right-top">
                <p>{item?.username}</p>
                <p>{Timer(item?.createTime)}</p>
              </div>
              <div className="right-bottom">
                {item?.info}
              </div>
            </div>
          </div>
        ))}
        <ShowLoading showLoading={props?.showLoading}></ShowLoading>
      </div>
    </div>
  );
}