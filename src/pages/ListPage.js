import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid darkred;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

// const handleWrite = () => {
//   // ListPage의 setPosts에 무엇을 담아야 함?
//   let post = { id: 6, title: '인풋값' };
// };

const ListPage = () => {
  const [no, setNo] = useState(0);

  const [post, setPost] = useState({
    id: no,
    title: '',
    content: '',
  });

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
  ]);

  const handleWrite = (e) => {
    e.preventDefault(); // form태그가 하려는 액션을 중지 시켜야 함.
    console.log(0, post.id);
    console.log(1, post.title);
    console.log(2, post.content);

    const a = { id: no };
    setPost({ ...post, ...a });
    setPosts([...posts, post]);
    setNo(no + 1);
  };

  // const handleChangeTitle = (e) => {
  //   console.log(e);
  //   setPost({ title: e.target.value });
  // };
  //
  // const handleChangeContent = (e) => {
  //   console.log(e);
  //   setPost({ content: e.target.value });
  // };

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    // computed property names 문법 (키값 동적할당)
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>리스트</h1>
      <form onSubmit={handleWrite}>
        <input
          type="text"
          placeholder="제목을 입력하세요..."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요..."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="submit">글쓰기</button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호 : {post.id} / 제목 : {post.title} / 내용 : {post.content}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
