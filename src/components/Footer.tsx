import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full h-auto min-h-auto bg-black2 relative py-8 px-5 sm:py-12">
      <div className="max-w-[1300px] mx-auto w-full text-secondary flex justify-between px-5 lg:pr-12 gap-x-10 lg:flex-row flex-col ">
        <img
          src="/logo.webp"
          alt="Logo"
          className="w-28 mx-auto"
        />
      </div>

      <div className="max-w-[1300px] mx-auto w-full text-secondary font-primary sm:mt-9 mt-3">
        <p className="sm:text-xl text-xs text-center">
          Your Jurisdiction May Not Regulate Cryptocurrencies. The Value Of
          Cryptocurrencies May Rise And Fall. Profits May Be Subject To Capital
          Gains Taxes Or Other Local Taxes.
        </p>

        <div className="text-secondary flex items-center justify-center gap-x-7 sm:gap-x-16 mt-8 mx-auto w-full sm:w-fit">
          <div className="flex items-center gap-x-[5px] justify-center">
            <MdEmail className="text-secondary text-2xl" />
            <a
              href="mailto:hello@lucidia.io"
              className="font-medium font-primary"
            >
              support@monkeygrok.io
            </a>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-secondary text-sm font-semibold flex gap-x-2 mx-auto w-fit mt-10">
            © MonkeyGrok 2023 <span>|</span> All Rights Reserved.
          </h3>
          <p className="text-[12px] text-footergry font-secondary mt-2">
            Your Jurisdiction May Not Regulate Cryptocurrencies. The Value Of
            Cryptocurrencies May Rise And Fall. Profits May Be Subject To
            Capital Gains Taxes Or Other Local Taxes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;