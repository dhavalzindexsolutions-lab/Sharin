import signup_img from "../assets/images/signup-mobile-img.png";
import googleIcon from "../assets/images/google-icon.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";
import SmallHeader from "../molecules/Header/smallHeader";
import MainTitle from "../molecules/AllTitles/mainTitle";
import Footer from "../molecules/Footer/footerLinks";
import { Link } from "react-router";
import CommonButton from "../molecules/Buttons/commonBtn";
import Input from "../molecules/Input/Input";

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
                  <MainTitle titleText="Crea il tuo store" />

                  {/* Social Buttons */}
                  <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
                    {/* Google */}
                    <CommonButton as="link" to="/verify-address" size="full" variant="secondary">
                      <img
                        src={googleIcon}
                        alt="googleIcon"
                        className="size-5"
                      />
                      Continua con Google
                    </CommonButton>
                    {/* Facebook */}
                    <CommonButton as="link" to="/verify-address" size="full" variant="secondary">
                      <img
                        src={facebookIcon}
                        alt="facebookIcon"
                        className="size-5"
                      />
                      Continua con Facebook
                    </CommonButton>
                  </div>

                  {/* Divider */}
                  <div className="block py-6 font-intermedium text-neutral-500 text-sm text-center">
                    <p>Oppure</p>
                  </div>

                  {/* Email Form */}
                  <div className="w-full">
                    <form className="space-y-4">
                      <div className="">
                        <Input
                          type="email"
                          placeholder="Inserisci il tuo indirizzo email"
                          required
                          error="Inserisci un indirizzo email valido"
                        />
                      </div>

                      {/* Continua */}
                      <div className="">
                        <CommonButton as="link" to="/verify-address" size="full" variant="primary">
                          Continua
                        </CommonButton>
                      </div>
                    </form>
                  </div>

                  {/* Footer Text */}
                  <div className="flex flex-col text-center gap-4 pt-8">
                    <div className="text-sm text-black">
                      <p>
                        Hai già un account Sharin?{" "}
                        <Link to="/create-account" className="hover:underline font-semibold">
                          Accedi
                        </Link>
                      </p>
                    </div>

                    <div className="text-xs text-neutral-500 max-w-3xs mx-auto">
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

              <Footer />
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
