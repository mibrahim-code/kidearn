'use client';

import ExternalScripts from "../externalscripts/page";
import AboutHeader from "./aboutheader/page";
import AboutTeamSection from "./aboutteamsection/page";
import AboutTestimonial from "./abouttestimonial/page";
import EnrollSection from "./enrollsection/page";

export default function About() {
  return (
    <>
      <AboutHeader/>
      <EnrollSection/>
      <AboutTestimonial/>
      <AboutTeamSection/>
      <ExternalScripts/>

    </>
    
  );
}
