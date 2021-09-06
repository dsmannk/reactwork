import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

// 스타일 확장
const StyledAddButton = styled(StyledDeleteButton)`
  background-color: green;
`;

// class 방식
const Home = (props) => {
  // console.log(1, props);
  // const boards = props.boards;
  // const id = props.id;
  // console.log(2, boards);

  // 구조분할 할당
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <h1>홈 : {number}</h1>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        번호증가
      </button>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목: {board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
