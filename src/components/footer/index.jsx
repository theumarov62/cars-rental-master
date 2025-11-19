function Footer() {
  return (
    <footer>
      <div className="max-w-[1400px] ml-auto mr-auto pt-[60px] pb-[130px]">
        {/* Top */}
        <div className="flex items-center justify-between pb-[60px]">
          <img
            src="./images/footer-images/footer-logo.svg"
            width={180}
            height={48}
            alt=""
          />

          <div className="flex items-center justify-center gap-[12px]">
            <img
              src="./images/footer-images/icon-img.svg"
              width={40}
              height={40}
              alt=""
            />
            <a className="flex flex-col" href="#">
              <p className="font-[400] text-[16px] leading-[26px] text-black">
                Address
              </p>
              <span className="font-[600] text-[16px] leading-[26px]">
                Oxford Ave. Cary, NC 27511
              </span>
            </a>
          </div>

          {/* Icon 2 */}
          <div className="flex items-center justify-center gap-[12px]">
            <img
              src="./images/footer-images/icon-img.svg"
              width={40}
              height={40}
              alt=""
            />
            <a className="flex flex-col" href="#">
              <p className="font-[400] text-[16px] leading-[26px] text-black">
                Email
              </p>
              <span className="font-[600] text-[16px] leading-[26px]">
                nwiger@yahoo.com
              </span>
            </a>
          </div>

          {/* Icon 3 */}
          <div className="flex items-center justify-center gap-[12px]">
            <img
              src="./images/footer-images/icon-img.svg"
              width={40}
              height={40}
              alt=""
            />
            <a className="flex flex-col" href="#">
              <p className="font-[400] text-[16px] leading-[26px] text-black">
                Phone
              </p>
              <span className="font-[600] text-[16px] leading-[26px]">
                +537 547-6401
              </span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-start">
          <div className="w-[280px]">
            <p className="font-[600] text-[20px] leading-[28px] text-black">
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem turpis euismod. Purus at quisque
              integer sit. Libero quis sapien tempus pellentesque netus leo
              feugiat augue ut. Sollicitudin vitae dictum sed vulputate.
            </p>

            {/* Socials */}
            <div className="flex gap-[20px] items-center pt-[35px]">
              {/* Facebook */}
              <a href="#">
                <img src="./images/footer-images/facebook.svg" alt="" />
              </a>

              {/* Instagram */}
              <a href="#">
                <img src="./images/footer-images/instagram.svg" alt="" />
              </a>

              {/* Linkeding */}
              <a href="#">
                <img src="./images/footer-images/linkedin.svg" alt="" />
              </a>

              {/* Youtube */}
              <a href="#">
                <img src="./images/footer-images/youtube.svg" alt="" />
              </a>
            </div>
          </div>
          <ul>
            <li className="font-[600] text-[20px] text-black">Useful links</li>
            <li>
              <a
                className="font-[400] text-[16px] leading-[26px] text-black"
                href="#"
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="font-[400] text-[16px] leading-[26px] text-black"
                href="#"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                className="font-[400] text-[16px] leading-[26px] text-black"
                href="#"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className="font-[400] text-[16px] leading-[26px] text-black"
                href="#"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="font-[400] text-[16px] leading-[26px] text-black"
                href="#"
              >
                F.A.Q
              </a>
            </li>
          </ul>

          {/* UL 2 */}
          <ul>
            <li className="font-[600] text-[20px] text-black">Vehicles</li>
            <li>
              <a
                className="font-[400] text-[16px] leading-[26px] text-black"
                href="#"
              >
                Sedan
              </a>
            </li>
            <li>
              <a
                className="font-[400] text-[16px] leading-[26px] text-black"
                href="#"
              >
                Cabriolet
              </a>
            </li>
            <li>
              <a
                className="font-[400] text-[16px] leading-[26px] text-black"
                href="#"
              >
                Pickup
              </a>
            </li>
            <li>
              <a
                className="font-[400] text-[16px] leading-[26px] text-black"
                href="#"
              >
                Minivan
              </a>
            </li>
            <li>
              <a
                className="font-[400] text-[16px] leading-[26px] text-black"
                href="#"
              >
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
