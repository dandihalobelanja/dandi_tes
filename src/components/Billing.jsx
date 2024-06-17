import { apple, bill, digital_marketing, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={digital_marketing} alt="digital_marketing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Make your marketing<br className="sm:block hidden" /> more effective
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      No price matches the need. Just pay attention to the course taken. The door does not stop and is not regulated. Pause for a moment, let everything take its own course.
      </p>
      
    </div>
  </section>
);

export default Billing;
