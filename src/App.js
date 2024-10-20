import { useState }                from "react";
import { CiMenuFries }             from "react-icons/ci";
import { RxCross1 }                from "react-icons/rx";
import { SiQiwi }                  from "react-icons/si";
import { PiNewspaperLight }        from "react-icons/pi";
import { SiCoursera }              from "react-icons/si";
import { HiUserGroup }             from "react-icons/hi";
import { FaApple }                 from "react-icons/fa";
import { IoStarSharp, IoStarHalf } from "react-icons/io5";
import {
  MdOutlineFileDownload,
  MdOutlineReadMore,
  MdOutlineArrowForward,
} from "react-icons/md";

import { PiStudentLight }          from "react-icons/pi";
function App() {
  const [active, setActive] = useState(true);

  function toggleSideBar() {
    setActive(!active);
  }
  return (
    <div>
      <div className="header">
        <div className="header__logo">
          <SiQiwi />
          uizzy
        </div>
        <ul className={active ? "header__nav" : "translate"}>
          <li className="header__nav--type">home</li>
          <li className="header__nav--type">services</li>
          <li className="header__nav--type">pricing</li>
          <li className="header__nav--type">about</li>
          <li className="header__nav--type">contact</li>
        </ul>
        <button className="btn btn-primary btn_mobile">
          Download Now
          <MdOutlineFileDownload className=" btn-download" />
        </button>
        <div className="header__menu">
          {active ? (
            <CiMenuFries
              className="header__menu-icon"
              onClick={toggleSideBar}
            />
          ) : (
            <RxCross1 className="header__menu-icon" onClick={toggleSideBar} />
          )}
        </div>
      </div>
      <div className="main">
        <div className="main__left">
          <img
            src="/images/hero/hero.png"
            alt="signup"
            className="main__left--hero"
          />
        </div>
        <div className="main__right">
          <h1 className="main__right--title">
            Make it happen <br /> with <span className="style">Quizzy</span>{" "}
          </h1>
          <p className="main__right--slogan">
            With tailored courses and practice tools, Quizzy ensures you’re
            fully prepared to conquer every challenge and reach your highest
            potential with confidence!
          </p>
          <button className="btn btn-secondary">
            Explore Now <MdOutlineReadMore className="btn-download" />
          </button>
        </div>
      </div>
      <div className="statistics">
        <div className="statistics__teacher">
          <PiStudentLight className="statistics__teacher--icon" />
          <div className="statistics__teacher--type">
            <p className="statistics__teacher--type-name">Teacher</p>
            <p className="number"></p>
          </div>
        </div>
        <div className="statistics__teacher">
          <HiUserGroup className="statistics__teacher--icon" />
          <div className="statistics__teacher--type">
            <p className="statistics__teacher--type-name">Student</p>
            <p className="student"></p>
          </div>
        </div>
        <div className="statistics__teacher">
          <SiCoursera className="statistics__teacher--icon" />
          <div className="statistics__teacher--type">
            <p className="statistics__teacher--type-name">Courses</p>
            <p className="courses"></p>
          </div>
        </div>
        <div className="statistics__teacher">
          <PiNewspaperLight className="statistics__teacher--icon" />
          <div className="statistics__teacher--type">
            <p className="statistics__teacher--type-name">Papers</p>
            <p className="paper"></p>
          </div>
        </div>
      </div>
      <div className="sample">
        <div className="heading">
          <div className="heading__block">
            <h1 className="heading__block--title">
              Screen<span className="style">Shoots</span>
            </h1>
            <p className="heading__block--slogan">
              {" "}
              Get a glance of what awaits you in the <br /> quizzy app
            </p>
          </div>
        </div>
        <div className="sample__block">
          <div className="sample__block--image all">
            <img
              src="/images/screenshoots/signup.jpg"
              alt="signup"
              className="sample__block--image-photo"
            />
            <p className="sample__block--image-name">SignUp</p>
          </div>
          <div className="sample__block--login all">
            <img
              src="/images/screenshoots/login.jpg"
              alt="signup"
              className="sample__block--image-photo"
            />
            <p className="sample__block--image-name">SignUp</p>
          </div>
          <div className="sample__block--home all">
            <img
              src="/images/screenshoots/home.jpg"
              alt="signup"
              className="sample__block--image-photo"
            />
            <p className="sample__block--image-name">SignUp</p>
          </div>
          <div className="sample__block--course all">
            <img
              src="/images/screenshoots/course.jpg"
              alt="signup"
              className="sample__block--image-photo"
            />
            <p className="sample__block--image-name">SignUp</p>
          </div>
        </div>
        <div className="center">
          <button className="btn btn-primary">
            Continue
            <MdOutlineArrowForward />
          </button>
        </div>
      </div>
      <div className="card">
        <div className="heading__block">
          <h1 className="heading__block--title">
            Our <span className="style"> Popular</span> Courses
          </h1>
          <p className="heading__block--slogan">
            {" "}
            Learn, Grow, and Excel with our most
            <br />
            popular courses today
          </p>
        </div>
        <div className="card__block">
          <div className="card__block--container">
            <img
              src="/images/courses/database.jpg"
              alt="signup"
              className="card__block--container-photo"
            />
            <div className="card__block--container-info">
              <h2 className="title">Database Administration</h2>
              <p className="description">
                {" "}
                Learn to design, manage, and secure databases that power modern
                applications to maintain data intergrity{" "}
              </p>
              <div className="align">
                <span className="card__block--container-info-amt">
                  15 Lessons
                </span>
                <span className="stars">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarHalf />
                </span>
              </div>
              <button className="btn btn-primary">
                Start Learning <MdOutlineArrowForward />
              </button>
            </div>
          </div>
          <div className="card__block--container">
            <img
              src="/images/courses/hallowee.jpg"
              alt="signup"
              className="card__block--container-photo"
            />
            <div className="card__block--container-info">
              <h2 className="title">Web developement with React.js</h2>
              <p className="description">
                {" "}
                Build robust solutions, streamline processes, and transform
                complex requirements into effective systems.{" "}
              </p>
              <div className="align">
                <span className="card__block--container-info-amt">
                  15 Lessons
                </span>
                <span className="stars">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarHalf />
                </span>
              </div>
              <button className="btn btn-primary">
                Start Learning <MdOutlineArrowForward />
              </button>
            </div>
          </div>
          <div className="card__block--container">
            <img
              src="/images/courses/big.jpg"
              alt="signup"
              className="card__block--container-photo"
            />
            <div className="card__block--container-info">
              <h2 className="title">Data Analysis with python</h2>
              <p className="description">
                {" "}
                Learn to transform raw data into meaningful insights with
                powerful libraries like Pandas, NumPy, and Matplotlib.
              </p>
              <div className="align">
                <span className="card__block--container-info-amt">
                  15 Lessons
                </span>
                <span className="stars">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarHalf />
                </span>
              </div>
              <button className="btn btn-primary">
                Start Learning <MdOutlineArrowForward />
              </button>
            </div>
          </div>
          <div className="card__block--container">
            <img
              src="/images/courses/analysis.jpg"
              alt="signup"
              className="card__block--container-photo"
            />
            <div className="card__block--container-info">
              <h2 className="title">System Analysis and Design</h2>
              <p className="description">
                {" "}
                Build robust solutions, streamline processes, and transform
                complex requirements into effective systems.{" "}
              </p>
              <div className="align">
                <span className="card__block--container-info-amt">
                  15 Lessons
                </span>
                <span className="stars">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarHalf />
                </span>
              </div>
              <button className="btn btn-primary">
                Start Learning <MdOutlineArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="download">
        <div className="download__left">
          <img
            src="/images/screenshoots/home.jpg"
            alt="signup"
            className="download__left--photo"
          />
        </div>
        <div className="download__right">
          <h2 className=" u-center big-h">
            The <span className="style">Quizzy </span> App is available for free
            on <br />
            Google Play and App Store
          </h2>
          <p calssName="description"></p>
          <div className="download__right--install align">
            <div className="download__right--install-apple align">
              <FaApple className="apple" />
              <div className="align">
                <div className="l-height">
                  <p>Download on the </p>
                  <h2>App store</h2>
                </div>
              </div>
            </div>
            <div className="download__right--install-play align">
              <img
                src="/images/abstrract/picon.png"
                alt="signup"
                className="store"
              />
              <div className="align">
                <div className="l-height">
                  <p>Download on the </p>
                  <h2>App store</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="heading__block">
          <h1 className="heading__block--title">
            About<span className="style">Us</span>
          </h1>
          <p className="heading__block--slogan">
            We’re Here to Listen, Support, and Guide You.
            <br /> Don’t hesitate—contact us today
          </p>
        </div>
      </div>
      <div className="heading__block">
        <h1 className="heading__block--title">
          Get In<span className="style">Touch</span>
        </h1>
        <p className="heading__block--slogan">
          We’re Here to Listen, Support, and Guide You.
          <br /> Don’t hesitate—contact us today
        </p>
      </div>
      <div className="contact">
        <div className="contact__block">
        <div className="contact__left">
          <div className="contact__left--image">
            <img
              src="/images/contact/contact.png"
              alt="signup"
              className="contact__left--image-photo"
            />
          </div>
        </div>
        <div className="contact__right">
          <div className="contact__right--form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" required/>
            {/* <textarea>write something</textarea> */}
          </div>
        </div>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default App;
