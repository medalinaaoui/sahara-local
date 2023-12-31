import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import React from "react";
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Profile = lazy(() => import("./pages/Profile"));
const CarsList = lazy(() => import("./pages/CarsList"));
const IncludeVehicle = lazy(() => import("./pages/IncludeVehicle"));
const VehicleDetails = lazy(() => import("./pages/VehicleDetails"));
const OwnVehicle = lazy(() => import("./pages/OwnVehicle"));
import Navbar from "./componats/Navbar";
import ProtectedRoute from "./componats/ProtactedRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Navbar />
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/about",
      element: (
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Navbar />
          <About />
        </Suspense>
      ),
    },
    {
      path: "/vehicles/include",
      element: (
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Navbar />
          <ProtectedRoute>
            <IncludeVehicle />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: "/vehicles/ownlist",
      element: (
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Navbar />
          <ProtectedRoute>
            <OwnVehicle />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: "/vehicles/list",
      element: (
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Navbar />

          <CarsList />
        </Suspense>
      ),
    },
    {
      path: "/vehicles/:id",
      element: (
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Navbar />
          <ProtectedRoute>
            <VehicleDetails />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: "/profile",
      element: (
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Navbar />
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Navbar login={true} />
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Navbar />
          <Register />
        </Suspense>
      ),
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
export default App;
