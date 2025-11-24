import signup_img from "../assets/images/signup-mobile-img.png";
import googleIcon from "../assets/images/google-icon.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";
import { Link } from "react-router";
import Button from "../molecules/Buttons";
import Input from "../molecules/Input";
import TextBlock from "../molecules/TextBlock";
import TextLink from "../molecules/TextLink";
import SmallHeader from "../molecules/SmallHeader";
import FooterLinks from "../molecules/Footer";

const Signup = () => {
  return (
    <>
      <div className="block h-dvh">
        <div className="flex flex-wrap h-full">
          {/* Left Section */}
          <div className="flex-none w-full lg:w-1/2">
            <div className="flex flex-col gap-5 justify-between w-full h-full">
              <SmallHeader />

              {/* Middle Section */}
              <div className="block max-w-[432px] w-full mx-auto py-8 lg:py-12 px-4">
                <div className="flex flex-col justify-center items-center h-full">
                  <TextBlock title="Crea il tuo store" />

                  {/* Social Buttons */}
                  <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
                    {/* Google */}
                    <Button
                      as="link"
                      to="/verify-address"
                      size="full"
                      variant="subduded"
                      leadingIcon={googleIcon}
                    >
                      Continua con Google
                    </Button>
                    {/* Facebook */}
                    <Button
                      as="link"
                      to="/verify-address"
                      size="full"
                      variant="subduded"
                      leadingIcon={facebookIcon}
                    >
                      Continua con Facebook
                    </Button>
                  </div>

                  {/* Divider */}
                  <div className="block py-6 font-medium text-subduded-500 text-sm text-center">
                    <p>Oppure</p>
                  </div>

                  {/* Email Form */}
                  <div className="w-full">
                    <form className="space-y-4">
                      <div>
                        <Input
                          type="email"
                          size="lg"
                          errorMessage="Inserisci un indirizzo email valido"
                          placeholder="Inserisci il tuo indirizzo email"
                        />
                      </div>

                      {/* Continua */}
                      <div>
                        <Button
                          as="link"
                          to="/verify-address"
                          size="full"
                          variant="fill"
                        >
                          Continua
                        </Button>
                      </div>
                    </form>
                  </div>

                  {/* Footer Text */}
                  <div className="flex flex-col text-center gap-4 pt-8">
                    <div className="text-sm text-black">
                      <p>
                        Hai già un account Sharin?{" "}
                        <TextLink size="SM20" label="Accedi" to="/create-account" />
                      </p>
                    </div>

                    <div className="text-xs text-subduded-500 max-w-3xs mx-auto">
                      <p>
                        Procedendo, accetti i{" "}
                        <Link to="/" className="hover:text-black underline">
                          Termini e condizioni
                        </Link>{" "}
                        e l{"' "}
                        <Link to="/" className="hover:text-black underline">
                          Informativa sulla privacy
                        </Link>{" "}
                        di Sharin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <FooterLinks />
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block lg:flex-none w-full lg:w-1/2">
            <div className="flex flex-col justify-end w-full items-end bg-gargoyleGas h-full pt-5">
              <img
                src={signup_img}
                alt="signup-img"
                className="max-w-full lg:w-[65%] xl:w-[55%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
