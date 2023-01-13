import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Authentication from "../components/Authentication";
import { InfoUser } from "../components/InfoUser";

function PersonalOffice() {
  const { authentication } = useSelector((state) => state.auth);
  useEffect(() => {}, [authentication]);
  return <div>{authentication ? <InfoUser /> : <Authentication />}</div>;
}

export default PersonalOffice;
