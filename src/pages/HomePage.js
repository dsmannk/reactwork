import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';
import { Button } from 'react-bootstrap';

const HomePage = () => {
  // http 요청 (fetch, axios(다운))
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  // 빈 배열 한번만 실행
  useEffect(() => {
    // 다운로드 가정 fetch(), axios(), ajax()
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    // 빈 데이터가 들어감
    setBoards([...data]);
    setUser({ id: 1, username: 'ssar' });
  }, []);

  return (
    <div>
      <Button variant="primary">Primary</Button>{' '}
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        user={user}
      />
    </div>
  );
};

export default HomePage;
