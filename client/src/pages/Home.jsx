import { useSelector } from "react-redux";

const Home = () => {
  const currUser = useSelector((state) => state.user.currUser);
  // console.log(currUser);
  return <div>home</div>;
};
export default Home;
