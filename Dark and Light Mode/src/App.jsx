//Here the order of import matters for CSS files
//import "./index.css";
import "./App.css";

import Random from "./Random.jsx";
import { ThemeProvider } from "./theme-context.jsx";

function App() {
  return (
    <ThemeProvider>
      <Random></Random>
    </ThemeProvider>
  );
}

export default App;
