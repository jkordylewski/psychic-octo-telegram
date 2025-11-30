import { useEffect, useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/activities")
      .then((response) => response.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <>
      <div>
        <h1>Reactivities</h1>
        <ul>
          {activities.map((activity: Activity) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
