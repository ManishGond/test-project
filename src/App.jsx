import { useState } from "react";
import ProgressBar from "./progress";

function App() {
  const [progress, setProgress] = useState(0);

  function updateProgress() {
    setProgress(progress + 10);
  }

  return (
    <div>
      <ProgressBar progress={progress} />

      <button onClick={updateProgress}>Increase Progress</button>
    </div>
  );
}

export default App;
