import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {
  return <PuffLoader color={"#fff"} loading={true} css={override} size={150} />;
};

export default Loader;
