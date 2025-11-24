import { useState } from "react";

import { Link } from "react-router";
import Input from "../molecules/Input";
import Checkbox from "../molecules/Checkbox";
import FieldGroup from "../molecules/FieldGroup";
import TextBlock from "../molecules/TextBlock";
import SmallHeader from "../molecules/SmallHeader";
import FooterLinks from "../molecules/Footer";
import Button from "../molecules/Buttons";


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
              <TextBlock title="Crea il tuo account" />

              {/* Email Form */}
              <div className="w-full">
                <form className="space-y-3">
                  <FieldGroup label="Nome">
                    <Input type="text" size="lg" placeholder="Es. Mario" />
                  </FieldGroup>
                  <FieldGroup label="Cognome">
                    <Input type="text" size="lg" placeholder="Es. Rossi" />
                  </FieldGroup>
                  <FieldGroup
                    label="Scegli una password"
                    fieldDescription="La password deve contenere almeno 8 caratteri"
                  >
                    <Input type="password" size="lg" placeholder="••••••••••" isPasswordToggle={true}  />
                  </FieldGroup>
                  <FieldGroup
                    label="Ripeti password"
                  >
                    <Input type="password" size="lg" placeholder="••••••••••" isPasswordToggle={true}  />
                  </FieldGroup>

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

          <FooterLinks />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
