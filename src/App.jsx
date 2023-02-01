import { useState } from "react";
import "./App.module.css";
import Index from "./ui/pages/Index";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles["app-container"]}>
      <Index />
    </div>
  );
}

export default App;
