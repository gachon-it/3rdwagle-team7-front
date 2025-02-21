import React from 'react';
import Selection from './Selection';

const list = ['학생증 사진변경', '성적 정정', '강의 빌넣'];

function SelectionList(props) {
  return (
    <div>
      {list.map((item) => (
        <Selection option={item} />
      ))}
    </div>
  );
}

export default SelectionList;
