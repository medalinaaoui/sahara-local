import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2 w-full">
        <h1 className="text-2xl font-bold uppercase text-center">Register</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-full items-center"
        >
          <input
            className="sm:py-2 py-1 px-1 w-1/3"
            type="text"
            placeholder="username"
          />
          <input
            className="sm:py-2 py-1 px-1 w-1/3"
            type="email"
            placeholder="email"
          />
          <input
            className="sm:py-2 py-1 px-1 w-1/3"
            type="password"
            placeholder="password"
          />
          <button
            type="submit"
            className="btn btn-sm bg-navColor hover:bg-black border-none btn-primary w-1/3"
          >
            Submit
          </button>
          <button className="btn btn-sm border-none btn-primary w-1/3">
            Register with google
          </button>
        </form>
        <div className="flex gap-4">
          <p>Already have an account?</p>{" "}
          <Link className="text-blue-600" to="/login">
            login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
