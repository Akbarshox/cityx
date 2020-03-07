import React, {useState, useEffect} from 'react';
import Routes from "./Routes";
import { css } from "@emotion/core";
import { BarLoader } from "react-spinners";

const override = css`
  position: absolute;
  display: flex;
  position: fixed;
  z-index: 1031;
  top: 50%;
  left: 25%;
`;

export default function App() {
   const [isLoading, setLoading] = useState(true);
   
   useEffect(() => {
      const timer = setTimeout(() => {
         setLoading(false)
      }, 4000);
      return () => clearTimeout(timer);
   }, []);
   
   if(isLoading === true){
   return(
       <div>
          <p className="loading">Loading...</p>
          <BarLoader
              css={override}
              //size={"150px"} this also works
              color={"#00f7ce"}
              loading={isLoading}
              width="50%"
              height={2}
          />
       </div>
   )}else{
      return <Routes />
   }
}