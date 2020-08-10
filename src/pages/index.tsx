import React from "react";
import { css } from "@emotion/core";

import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1
      css={css`
        color: orange;
      `}
    >
      Hi people
    </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </>
)

export default IndexPage
