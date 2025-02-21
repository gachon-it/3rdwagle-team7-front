import React from 'react';
import axios from 'axios';
import { Button, Form, Input, Flex, Image, message } from 'antd'; 
import Selection from './Selection';
import { useNavigate } from 'react-router';

const list = ['학생증 사진변경', '성적 정정', '강의 빌넣'];

function SelectionList(props) {
  const token = localStorage.getItem("token");

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    console.log(token)
    console.log("adsg", token)

      const res = await axios.get('http://localhost:8080/test3', {
        params: {
          studentNumber: token
        }
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(res.data.data);
      
  }

  const navigate = useNavigate();

  const handleClick = () => {
    onFinish();
    navigate("/search-email");
  }
  return (
    <div>
      <div>
        <Button onClick={() => handleClick()}>

        </Button>
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  );
}

export default SelectionList;
