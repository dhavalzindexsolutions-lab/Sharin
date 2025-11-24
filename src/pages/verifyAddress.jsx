import verificationMobileIcon from "../assets/images/verification-mobile-icon.svg";
import { Link } from "react-router";
import Button from "../molecules/Buttons";
import TextBlock from "../molecules/TextBlock";
import SmallHeader from "../molecules/Header";
import FooterLinks from "../molecules/Footer";
// import FooterLinks from "../molecules/Footer/Footer";

const verifyAddress = () => {
  return (
    <>
      <div className="block h-dvh">
        <div className="flex flex-wrap h-full">
          <div className="block w-full">
            <div className="flex flex-col gap-5 justify-between w-full h-full">
              <SmallHeader />

              {/* Middle Section */}
              <div className="block max-w-[432px] w-full mx-auto py-8 lg:py-12 px-4">
                <div className="flex flex-col justify-center items-center h-full">
                  {/* verifyEmailIcon */}
                  <div className="block mb-6 lg:mb-8 xl:mb-12">
                    <img
                      src={verificationMobileIcon}
                      alt="verify-icon"
                      className="max-w-full"
                    />
                  </div>

                  <TextBlock title="Verifica la tua email" />

                  {/* verifyEmailAddress */}
                  <div className="block pb-8 font-normal text-black text-center -mt-5">
                    <p>
                      Abbiamo inviato un link per verificare la tua email a{" "}
                      <br />
                      <Link
                        to="mailto:matteo@mozestudio.com"
                        className="font-semibold hover:text-subduded-700"
                      >
                        matteo@mozestudio.com
                      </Link>
                    </p>
                  </div>

                  {/* Resend Buttons */}
                  <div className="flex flex-col gap-3 mx-auto">
                    <Button
                      as="link"
                      to="/email-confirmation"
                      size="full"
                      variant="subduded"
                    >
                      Invia di nuovo
                    </Button>
                  </div>
                </div>
              </div>

              <FooterLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default verifyAddress;
