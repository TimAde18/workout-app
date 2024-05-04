import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import AccountPage from "../pages/AccountPage";
import HomePage from "../pages/HomePage";
import WorkoutPage from "../pages/WorkoutPage";
import AiTrainerPage from "../pages/Ai-TrainerPage";
import CalorieTracker from "../pages/Calorie-TrackerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "Account", element: <AccountPage /> },
      { path: "Workout", element: <WorkoutPage /> },
      { path: "AI-Trainer", element: <AiTrainerPage /> },
      { path: "CalorieTracker", element: <CalorieTracker /> },
    ],
  },
]);
