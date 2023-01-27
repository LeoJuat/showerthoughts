import { addDoc } from "firebase/firestore";
import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usersRef } from "../firebase";
import AuthContext from "../store/AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const authCtx = useContext(AuthContext);

  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const signUpSubmitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setIsLoading(true);

    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2OQIMd_c7tOfOBD70OXUtOdwBJeFaPyM",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
          displayName: name,
        }),
      }
    );

    if (res.ok) {
    } else {
      const data = await res.json();
      let errorMessage = "Auhentication failed";
      if (data?.error?.message) {
        errorMessage = data.error.message;
      }
      alert(errorMessage);
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2OQIMd_c7tOfOBD70OXUtOdwBJeFaPyM",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          let errorMessage = "Incorrect email or password";
          throw new Error(errorMessage);
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        authCtx.displayName(data.displayName);
        authCtx.uidHandler(data.localId);

        addDoc(usersRef, {
          username: name,
          email: enteredEmail,
          password: enteredPassword,
          uid: data.localId,
        });

        navigate("/");
      })
      .catch((err) => {
        alert(err.message);

        setIsLoading(false);
      });
  };

  const demoSigninHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2OQIMd_c7tOfOBD70OXUtOdwBJeFaPyM",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "test@test.com",
          password: 1234567,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          let errorMessage = "Incorrect email or password";
          throw new Error(errorMessage);
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        authCtx.displayName(data.displayName);
        authCtx.uidHandler(data.localId);

        navigate("/");
      })
      .catch((err) => {
        alert(err.message);

        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <nav className="w-5/6 py-10 mx-auto background">
        <ul className="flex items-center text-[#E85A4F] justify-between">
          <Link
            to="/"
            className="text-4xl font-extrabold tracking-wide duration-200 hover:scale-110"
          >
            Logo
          </Link>
        </ul>
      </nav>
      <div className="h-full bg-transparent overflow-y-hidden-hidden">
        <section className="text-gray-600 body-font">
          <form
            onSubmit={signUpSubmitHandler}
            className="flex flex-col w-full p-8 mt-16 bg-[rgba(216,195,165,0.50)] rounded-lg lg:w-2/6 md:w-1/2 md:mx-auto"
          >
            <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Username
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                id="name"
                name="name"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none focus:border-[#E85A4F] focus:ring-2 focus:ring-[#b7736e] bg-gray-100"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none focus:border-[#E85A4F] focus:ring-2 focus:ring-[#b7736e] bg-gray-100"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="text-sm leading-7 text-gray-600"
              >
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none focus:border-[#E85A4F] focus:ring-2 focus:ring-[#b7736e] bg-gray-100"
              />
            </div>
            {!isLoading && (
              <button className="text-white bg-[#E85A4F] border-0 my-1 py-2 px-8 focus:outline-none hover:bg-[#c1453c] rounded text-lg font-medium transition-all duration-300 ease-in-out">
                Sign up
              </button>
            )}
            {!isLoading && (
              <button
                onClick={demoSigninHandler}
                className="text-[#E85A4F] border-[#E85A4F] border-2 my-1 py-2 px-8 focus:outline-none hover:bg-[#c1453c] hover:text-white rounded font-medium text-lg transition-all duration-300 ease-in-out"
              >
                Demo sign in
              </button>
            )}
            {isLoading && <p className="text-center">Sending request...</p>}
            <p className="mt-2 text-xs text-center text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-black underline active:text-black hover:text-gray-600"
              >
                Log in
              </Link>{" "}
              instead.
            </p>
          </form>
        </section>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
