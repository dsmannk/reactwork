import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login/Login';
import Footer from '../components/Footer';

const LoginPage = (props) => {
  const { history } = props;
  console.log('loginPage', props);
  console.log(props.match.params.id);
  return (
    <div>
      <button onClick={() => history.go(-1)}>뒤로가기</button>
      <button onClick={() => history.push('/')}>
        홈페이지(원하는위치로가기)
      </button>
      <Login />
    </div>
  );
};

export default LoginPage;
