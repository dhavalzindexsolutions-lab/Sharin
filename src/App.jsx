import { BrowserRouter, Route, Routes } from "react-router";
import "./assets/fonts/fonts.css";
import "./App.css";
import Signup from "./pages/signup";
import VerifyAddress from "./pages/verifyAddress";
import EmailConfirmation from "./pages/emailConfirmation";
import CreateAccount from "./pages/createAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signup />} />
          <Route path="/verify-address" element={<VerifyAddress />} />
          <Route path="/email-confirmation" element={<EmailConfirmation />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
      {/* <Signup /> */}
    </>
  );
}

export default App;
