"use client";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const TeamSection = () => {
  return (
    <section className="team-section my-16">
      <div className="container">
        <div className="section-title text-center">
          <h5 className="section-title__tagline">Our Team</h5>
          <h2 className="section-title__title">Meet Our Professional Teaching Staff</h2>
        </div>
        <div className="team-section__row grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="team-card-two wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
            style={{ "--accent-color": "#2390FF" }}
          >
            <div className="team-card-two__svg-top">
              {/* SVG CODE OMITTED FOR BREVITY */}
            </div>
            <div className="team-card-two__image kidearn-tilt">
              <ExportedImage
                unoptimized={true}
                src="/images/team-2-2.jpg"
                alt="Cody Fisher"
                width={300}
                height={300}
                className="rounded-full object-cover"
              />
            </div>
            <div className="team-card-two__content">
              <h3 className="team-card-two__title">
                <Link href="/team-details">Cody Fisher</Link>
              </h3>
              <p className="team-card-two__designation">Art Teacher</p>
              <div className="team-card-two__social__list">
                <a className="fb" href="https://facebook.com">
                  <span className="social-bg">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                </a>
                <a className="li" href="https://linkedin.com">
                  <span className="social-bg">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                </a>
                <a className="yo" href="https://youtube.com">
                  <span className="social-bg">
                    <i className="fab fa-youtube"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="team-card-two wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="400ms"
            style={{ "--accent-color": "#F14D5D" }}
          >
            <div className="team-card-two__svg-top">
              {/* SVG CODE OMITTED FOR BREVITY */}
            </div>
            <div className="team-card-two__image kidearn-tilt">
              <ExportedImage
                unoptimized={true}
                src="/images/team-2-3.jpg"
                alt="Floyd Miles"
                width={300}
                height={300}
                className="rounded-full object-cover"
              />
            </div>
            <div className="team-card-two__content">
              <h3 className="team-card-two__title">
                <Link href="/team-details">Floyd Miles</Link>
              </h3>
              <p className="team-card-two__designation">Sports Teacher</p>
              <div className="team-card-two__social__list">
                <a className="fb" href="https://facebook.com">
                  <span className="social-bg">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                </a>
                <a className="li" href="https://linkedin.com">
                  <span className="social-bg">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                </a>
                <a className="yo" href="https://youtube.com">
                  <span className="social-bg">
                    <i className="fab fa-youtube"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
