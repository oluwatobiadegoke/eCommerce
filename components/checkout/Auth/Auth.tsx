import { useState } from "react";
import { useSession } from "next-auth/client";

import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {
  const [session] = useSession();

  const [signedUp, setsignedUp] = useState<boolean>(true);

  return (
    <div className="w-full font-neut">
      <div className="w-1/3 pb-3 bg-orange-100 mx-auto shadow">
        <div className="flex h-9 items-center border">
          <div
            className={`flex flex-1 items-center justify-center cursor-pointer h-full hover:bg-opacity-50 transition-all ${
              signedUp ? "bg-orange-100" : "bg-white"
            }`}
            onClick={() => setsignedUp(true)}
          >
            <p>Sign In</p>
          </div>
          {/* <div className=" h-full w-w bg-orange-500 rounded"></div> */}
          <div
            className={`flex flex-1 items-center justify-center cursor-pointer h-full hover:bg-opacity-50 transition-all ${
              signedUp ? "bg-white" : "bg-orange-100"
            }`}
            onClick={() => setsignedUp(false)}
          >
            <p>Sign Up</p>
          </div>
        </div>
        <div className="mx-4 my-6">{signedUp ? <Signin /> : <Signup />}</div>
      </div>
    </div>
  );
};

export default Auth;
