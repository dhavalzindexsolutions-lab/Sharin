import { useState } from "react";
// import SmallHeader from "../molecules/Header/SmallHeader";
import SmallHeader from "../molecules/smallHeader";
import MainTitle from "../molecules/mainTitle";
import Footer from "../molecules/footer";
import { Link } from "react-router";
import Button from "../molecules/button";
import Input from "../molecules/Input";
import Checkbox from "../molecules/Checkbox";

const CreateAccount = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="block h-dvh">
      <div className="flex flex-wrap h-full">
        <div className="flex flex-col gap-5 justify-between w-full h-full">
          <SmallHeader />

          {/* Middle Section */}
          <div className="block max-w-[432px] w-full mx-auto py-8 lg:py-12 px-4">
            <div className="flex flex-col justify-center items-center h-full">
              <MainTitle titleText="Crea il tuo account" />

              {/* Email Form */}
              <div className="w-full">
                <form className="space-y-3">

                  <Input
                    label="Nome"
                    type="text"
                    placeholder="Es. Mario"
                    required
                    error="Inserisci un nome valido"
                  />

                  <Input
                    label="Cognome"
                    type="text"
                    placeholder="Es. Rossi"
                    required
                    error="Inserisci un cognome valido"
                  />

                  <Input
                    label="Scegli una password"
                    helperText="La password deve contenere almeno 8 caratteri"
                    type="password"
                    placeholder="••••••••"
                    required
                    error="Le password non corrispondono"
                  />

                  <Input
                    label="Ripeti password"
                    type="password"
                    placeholder="••••••••"
                    required
                    error="Le password non corrispondono"
                  />

                  {/* ✅ Replaced default checkbox with CustomCheckbox */}
                  <Checkbox
                    className="my-7"
                    checked={acceptTerms}
                    onChange={() => setAcceptTerms(!acceptTerms)}
                    label={
                      <>
                        Accetto i{" "}
                        <Link className="underline hover:text-black">
                          Termini e condizioni
                        </Link>{" "}
                        e{" "}
                        <Link className="underline hover:text-black">
                          Privacy
                        </Link>
                      </>
                    }
                  />

                  {/* Submit Button */}
                  <Button size="full" variant="fill">
                    Crea il tuo account
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
