import React from "react";
import SimpleReactFooter from "simple-react-footer";
import "./Footer.css";

const Footer = () => {
  const description =
    "“Photography takes an instant out of time, altering life by holding it still.” “There are always two people in every picture: the photographer and the viewer.” “Photography helps people to see.” “What I like about photographs is that they capture a moment that's gone forever, impossible to reproduce.”";
  const title = "Indigo || Photographer";
  const columns = [
    {
      title: "Resources",
      resources: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Careers",
          link: "/careers",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "Admin",
          link: "/admin",
        },
      ],
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/privacy",
        },
        {
          name: "Terms",
          link: "/terms",
        },
      ],
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/locations",
        },
        {
          name: "Culture",
          link: "/culture",
        },
      ],
    },
  ];
  return (
    <footer>
      <SimpleReactFooter
        description={description}
        title={title}
        columns={columns}
        linkedin="fluffy_cat_on_linkedin"
        facebook="fluffy_cat_on_fb"
        twitter="fluffy_cat_on_twitter"
        instagram="fluffy_cat_live"
        youtube="UCFt6TSF464J8K82xeA?"
        pinterest="fluffy_cats_collections"
        copyright="Indigo || Photographer"
        iconColor="black"
        backgroundColor="bisque"
        fontColor="black"
        copyrightColor="darkgrey"
      />
    </footer>
  );
};

export default Footer;
