import { BrowserRouter, Route, Routes } from "react-router";
import "./assets/fonts/fonts.css";
import "./App.css";
import Signup from "./pages/Signup";
import VerifyAddress from "./pages/VerifyAddress";
import EmailConfirmation from "./pages/EmailConfirmation";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signup />} />
          <Route path="/verifyAddress" element={<VerifyAddress />} />
          <Route path="/emailConfirmation" element={<EmailConfirmation />} />
          <Route path="/createAccount" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
      {/* <Signup /> */}
    </>
  );
}

export default App;
