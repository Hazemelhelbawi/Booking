import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { email, password, name });
    // Here you would typically handle the form submission, e.g., send data to an API

    setLoading(true); // Start loading
    setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
      console.log("Form submitted with:", { email, password, name });
      // Here you would typically handle the form submission, e.g., send data to an API
    }, 3000);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center justify-center"
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600text-sm shadow-lg ">
        <div>
          <p className="text-2xl font-semibold">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </p>
          <p>
            Please {state === "Sign Up" ? "Sign Up" : "Log in"} to book
            appointment
          </p>
        </div>

        <div className="w-full">
          {/* <div className="flex flex-col gap-4"> */}
          {state === "Sign Up" && (
            <div className="w-full">
              <label htmlFor="fullName" className="block mb-1 font-medium">
                Full Name
              </label>
              <Input
                name={"fullName"}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.name)}
                className="border p-2 border-zinc-300 rounded w-full "
                required
              />
            </div>
          )}
          <div className="w-full">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>

            <Input
              name={"email"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.name)}
              className="border p-2 border-zinc-300 rounded w-full "
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>

            <Input
              name={"password"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.name)}
              className="border p-2 border-zinc-300 rounded w-full "
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-md text-base hover:bg-blue-600 transition-all duration-300"
          disabled={loading}
        >
          {/* {state === "Sign Up" ? "Sign Up" : "Login"} */}
          {loading ? "Loading..." : state === "Sign Up" ? "Sign Up" : "Login"}
        </Button>

        <p
          className="mt-4 "
          onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
        >
          {state === "Sign Up" ? (
            <p>
              {" "}
              Already have an account?{" "}
              <span className="text-primary underline cursor-pointer">
                Login
              </span>
            </p>
          ) : (
            <p>
              Create an account{" "}
              <span className="text-primary underline cursor-pointer">
                Click here
              </span>
            </p>
          )}
        </p>
      </div>
      {/* </div> */}
    </form>
  );
};

export default Login;
