function Footer() {
  return (
    <footer className="bg-[#F8F8F8] w-full">
      <div className="max-w-[1400px] mx-auto pt-[40px] pb-[80px] px-4">
        {/* TOP */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 pb-10">
          {/* Logo */}
          <img
            src="./images/footer-images/footer-logo.svg"
            width={160}
            className="w-[140px] sm:w-[180px]"
            alt=""
          />

          {/* Contact 1 */}
          <div className="flex items-center gap-3">
            <img src="./images/footer-images/icon-img.svg" width={36} alt="" />
            <div>
              <p className="text-[14px] text-black/70">Address</p>
              <span className="font-semibold text-[16px]">
                Oxford Ave. Cary, NC 27511
              </span>
            </div>
          </div>

          {/* Contact 2 */}
          <div className="flex items-center gap-3">
            <img src="./images/footer-images/icon-img.svg" width={36} alt="" />
            <div>
              <p className="text-[14px] text-black/70">Email</p>
              <span className="font-semibold text-[16px]">
                nwiger@yahoo.com
              </span>
            </div>
          </div>

          {/* Contact 3 */}
          <div className="flex items-center gap-3">
            <img src="./images/footer-images/icon-img.svg" width={36} alt="" />
            <div>
              <p className="text-[14px] text-black/70">Phone</p>
              <span className="font-semibold text-[16px]">+537 547-6401</span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-10
      "
        >
          {/* Left text */}
          <div>
            <p className="font-semibold text-[18px] leading-[26px] text-black mb-5">
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem turpis euismod.
            </p>

            {/* socials */}
            <div className="flex gap-5 mt-5">
              <img src="./images/footer-images/facebook.svg" alt="" />
              <img src="./images/footer-images/instagram.svg" alt="" />
              <img src="./images/footer-images/linkedin.svg" alt="" />
              <img src="./images/footer-images/youtube.svg" alt="" />
            </div>
          </div>

          {/* Useful links */}
          <ul className="flex flex-col gap-2">
            <li className="font-bold text-[18px] mb-2">Useful links</li>
            <li>
              <a href="#" className="text-[16px]">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px]">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px]">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px]">
                F.A.Q
              </a>
            </li>
          </ul>

          {/* Vehicles list */}
          <ul className="flex flex-col gap-2">
            <li className="font-bold text-[18px] mb-2">Vehicles</li>
            <li>
              <a href="#" className="text-[16px]">
                Sedan
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px]">
                Cabriolet
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px]">
                Pickup
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px]">
                Minivan
              </a>
            </li>
            <li>
              <a href="#" className="text-[16px]">
                SUV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
