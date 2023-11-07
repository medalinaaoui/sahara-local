const Footer = () => {
  return (
    <footer className="footer-bg text-[#d9d9d9] font-semibold  flex flex-col items-center">
      <div className="flex lg:flex-row flex-col lg:justify-around justify-between items-center gap-16 w-full my-16 ">
        <div>
          <h6>Sahara</h6>
          <p>Marrakech rue 222, All Rights Reserved</p>
        </div>

        <div className="grid  md:grid-cols-3 grid-cols-1 gap-20 md:gap-40">
          <div className="flex flex-col gap-8">
            <h5 className="font-semibold text-base ">Links</h5>
            <ul className="text-sm flex flex-col gap-8">
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h5 className="font-semibold text-base ">Company</h5>
            <ul className="text-sm flex flex-col gap-8">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h5 className="font-semibold text-base ">Get in touch</h5>
            <ul className="text-sm flex flex-col gap-8">
              <li>Marrakech rue 22</li>
              <li>+212613883848</li>
              <li>info@ramo.com</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center my-4 text-black text-sm">
        &copy; {new Date().getFullYear()} Ramo Agency. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
