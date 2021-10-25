import { useState } from "react";
import { useSession } from "next-auth/client";

import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {
  const [session] = useSession();

  const [signedUp, setsignedUp] = useState<boolean>(true);

  return (
    <div>
      <div>
        <p onClick={() => setsignedUp(false)}>Sign In</p>
        <div></div>
        <p>Sign Up</p>
      </div>
      <div>{session || signedUp ? <Signin /> : <Signup />}</div>
    </div>
  );
};

export default Auth;
