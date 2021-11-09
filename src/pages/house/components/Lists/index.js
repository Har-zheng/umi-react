import React, { useState, useEffect } from 'react';


export default function(props) {
  const [state, setState] = useState();

  useEffect(() => {

  }, []);

  return (
    <div className='comment'>
      <h1 className='comment-title'>评论</h1>
      <div className="comment-lists">
          <div className="comment-lists_item" >
            <img src={'https://youimg1.c-ctrip.com/target/100q11000000qsj8y3D34_D_450_600_R5_Q80.jpg'} alt="" className="avatar" />
            <div className="right">
              <div className="right-top">
                <p>{'zhz'}</p>
                <p>{'2021-11-09'}</p>
              </div>
              <div className="right-bottom">
                {'民宿推荐'}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}