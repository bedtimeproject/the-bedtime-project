import React from "react";
import { Link } from "react-router-dom";

import "./Wiki.scss";

import StandardWrapper from "../../../../Components/Structural/StandardWrapper/StandardWrapper";
import SEO from "../../../../Components/Structural/SEO/SEO";
import PageTitle from "../../../../Components/Structural/PageTitle/PageTitle";

export default function Wiki() {
  return (
    <StandardWrapper>
      <SEO title="The Wiki" />
      <div className="Wiki-Page-Wrapper">
        <article className="inner-content">
          <PageTitle>The Wiki</PageTitle>
          <div>The wiki is currently under construction!</div>
          <h2>
            <Link to={"/read/stories/wiki/places"}>Places</Link>
          </h2>
          <div className="Links">
            <Link to={"/read/stories/wiki/places/isle-of-alto"}>
              Isle of Alto
            </Link>
            <Link to={"/read/stories/wiki/places/isle-of-cirro"}>
              Isle of Cirro
            </Link>
            <Link to={"/read/stories/wiki/places/isle-of-co"}>Isle of Co</Link>
            <Link to={"/read/stories/wiki/places/isle-of-greete"}>
              Isle of Greete
            </Link>
            <Link to={"/read/stories/wiki/places/isle-of-nimbo"}>
              Isle of Nimbo
            </Link>
            <Link to={"/read/stories/wiki/places/isle-of-strato"}>
              Isle of Strato
            </Link>
            <Link to={"/read/stories/wiki/places/isles-of-arcane"}>
              Isle of Arcane
            </Link>
            <Link to={"/read/stories/wiki/places/minterra"}>Minterra</Link>
            <Link to={"/read/stories/wiki/places/port-of-sky"}>
              Port of Sky
            </Link>
            <Link to={"/read/stories/wiki/places/sarren-isles"}>
              Sarren Isles
            </Link>
            <Link to={"/read/stories/wiki/places/stratosphairros"}>
              Stratosphairros
            </Link>
            <Link to={"/read/stories/wiki/places/the-dry-sea"}>
              The Dry Sea
            </Link>
          </div>
          <h2>People</h2>
          <p>Coming Soon!</p>
          <h2>Culinary Delights</h2>
          <p>Coming Soon!</p>
          <h2>Lore</h2>
          <p>Coming Soon!</p>
          <h2>Clouds</h2>
          <p>Coming Soon!</p>
        </article>
      </div>
    </StandardWrapper>
  );
}
