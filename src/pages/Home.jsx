import Style from '../styles/App.module.scss';
const Home = () => {
  return (
    <div className={Style.test}>Home입니다 {process.env.REACT_APP_URL}</div>
  );
};

export default Home;
