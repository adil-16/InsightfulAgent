import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";
import PublicRoutes from "./utils/Routes/PublicRoutes";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import VerificationEmail from "./pages/Auth/VerificationEmail/VerificationEmail";
import PersonalInfo from "./pages/ProfileSetup/PersonalInfo/PersonalInfo";
import LocationInfo from "./pages/ProfileSetup/LocationInfo/LocationInfo";
import ProfessionalInfo from "./pages/ProfileSetup/ProfessionalInfo/ProfessionalInfo";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import Pricing from "./pages/Pricing/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PlatformInfo from "./pages/ProfileSetup/PlatformInfo/PlatformInfo";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <PublicRoutes Component={LandingPage} />,
      },
      {
        path: "/login",
        element: <PublicRoutes Component={Login} />,
      },
      {
        path: "/signup",
        element: <PublicRoutes Component={Signup} />,
      },
      {
        path: "/verificationEmail",
        element: <PublicRoutes Component={VerificationEmail} />,
      },
      {
        path: "/profileSetup/personalInfo",
        element: <PublicRoutes Component={PersonalInfo} />,
      },
      {
        path: "/profileSetup/locationInfo",
        element: <PublicRoutes Component={LocationInfo} />,
      },
      {
        path: "/profileSetup/professionalInfo",
        element: <PublicRoutes Component={ProfessionalInfo} />,
      },
      {
        path: "/profileSetup/platformInfo",
        element: <PublicRoutes Component={PlatformInfo} />,
      },
      {
        element: <HomeLayout />,
        children: [
          {
            path: "/pricing",
            element: <PublicRoutes Component={Pricing} />,
          },
          {
            path: "/privacyPolicy",
            element: <PublicRoutes Component={PrivacyPolicy} />,
          },
          {
            path: "/terms&conditions",
            element: <PublicRoutes Component={TermsAndConditions} />,
          },
        ],
      },
      // {
      //   path: "/signup",
      //   element: <PublicRoutes Component={Signup} />,
      // },

      {
        path: "*",
        element: <Navigate to="/login" replace />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
