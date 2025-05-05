import Image from "next/image";
import HeroSection from "./hero/page";
import Services from "./services/page";
import Testimonials from "./testimonial/page";
import CampusVideo from "./campusvideo/page";
import Programs from "./programs/page";
import TeamSection from "./teamsection/page";
import MailSection from "./mailsection/page";
import BlogThree from "./blogthree/page";
import About from "./about/page";
import BannerOne from "./bannerone/page";




export default function Home() {
  return (
    <>
     <BannerOne/>
      <HeroSection/>
      <Services/>
      {/* <About/> */}
      <Testimonials/>
      <CampusVideo/>
      <Programs/>
      <TeamSection/>
      <MailSection/>
      <BlogThree/>
      

    </>
  );
}
