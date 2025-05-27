import { assets } from "../assets/assets";
import Button from "../components/ui/Button";

const Contact = () => {
  return (
    <>
      <div>
        <div className="text-center text-2xl pt-10 text-gray-500 ">
          <p>
            CONTACT <span className="text-gray-700 font-medium">US</span>
          </p>
        </div>

        <div className="flex md:flex-row flex-col  my-10 justify-center gap-10 mb-28 text-sm">
          <img
            src={assets.contact_image}
            alt="about website booking doctors"
            className="w-full md:max-w-[360px]"
          />
          <div className="flex flex-col justify-center gap-6 items-start  text-gray-600">
            <p className="text-gray-600 font-semibold text-lg ">Our OFFICE</p>

            <p className="text-gray-500">
              {" "}
              54709 Willms Station <br /> Suite 350, Washington, USA{" "}
            </p>
            <div>
              <p className="text-gray-500"> Tel: (415) 555‑0132 </p>
              <p className="text-gray-500"> Email: greatstackdev@gmail.com </p>
            </div>
            <p className="text-gray-600 font-semibold text-lg">
              Careers at PRESCRIPTO
            </p>
            <p className="text-gray-500">
              {" "}
              Learn more about our teams and job openings.
            </p>
            <Button className=" border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300">
              Explore Jobs
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
