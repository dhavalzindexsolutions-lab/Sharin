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
