import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h2>{t("aboutTitle")}</h2>
      <p>{t("aboutDescription")}</p>
    </div>
  );
};

export default About;
