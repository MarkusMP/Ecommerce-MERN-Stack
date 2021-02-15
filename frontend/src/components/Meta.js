import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, desciption, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desciption} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To ProShop",
  description: "We sell the best products!",
  keywords: "electronics, buy electroncis",
};

export default Meta;
