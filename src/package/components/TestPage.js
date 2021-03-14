import React from 'react';
import { Logo } from '../assets/svg/index';
import CustomButton from '../components/CustomButton';
import Header from '../components/header/Header';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  main: {
    margin: 20,
  },
});

const TestPage = () => {
  const classes = useStyle();

  return (
    <div>
      <Header/>
    </div>
  );
};

export default TestPage;
