import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>{children}</BrowserRouter>
      </RecoilRoot>
    </>
  );
};
