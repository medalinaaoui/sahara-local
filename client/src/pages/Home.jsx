import { useSelector } from "react-redux";

const Home = () => {
  const currUser = useSelector((state) => state.user.currUser);
  // console.log(currUser);
  return <div>homeme</div>;
};
export default Home;
