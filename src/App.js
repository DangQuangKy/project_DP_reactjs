import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout"
function App() {
  return (
    <BrowserRouter>
      <DefaultLayout />
    </BrowserRouter>
  );
}

export default App;
