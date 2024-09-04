import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "animate.css";
import MainLayout from "./layout/MainLayout";
import HomePages from "./pages/HomePages";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import ServicePage from "./pages/ServicePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePages />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
