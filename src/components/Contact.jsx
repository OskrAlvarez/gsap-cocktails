import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {

  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', { type: 'words' })
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',

      },
      ease: 'power1.inOut'
    })

    timeline
      .from(titleSplit.words, {
        opacity: 0, yPercent: 100, stagger: 0.02
      })
      .from('#contact h3, #contact p', {
        opacity: 0, yPercent: 100, stagger: 0.02
      })
      .to('#f-right-leaf', {
        y: '-50', duration: 1, ease: 'power1.inOut'
      })
      .to('#f-left-leaf', {
        y: '-50', duration: 1, ease: 'power1.inOut'
      }, '<')
      .from('.drink-img', {
        opacity: 0, duration: 1, xPercent: 100, ease: 'power1.inOut', stagger: 0.02
      })
  })
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />
      <img
        src="/images/footer-drinks.png"
        alt="footer-drinks"
        id="f-drinks"
        className="drink-img"
      />

      <div className="content">
        <h2>Where to find Us</h2>

        <div>
          <h3>Visit our store</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>

        <div>
          <h3>Open every day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Contact;
