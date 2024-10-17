import { useState }         from "react";
import { CiMenuFries }      from "react-icons/ci";
import { RxCross1 }         from "react-icons/rx";
import { SiQiwi }           from "react-icons/si";
import { PiNewspaperLight } from "react-icons/pi";
import { SiCoursera }       from "react-icons/si";
import { HiUserGroup }      from "react-icons/hi";
import {
  MdOutlineFileDownload,
  MdOutlineReadMore,
  MdOutlineArrowForward,
} from "react-icons/md";

import { PiStudentLight }   from "react-icons/pi";
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
          <h1 className="main__right--title">Make it happen <br/> with <span className="style">Quizzy</span> </h1>
          <p className="main__right--slogan">
          With tailored courses and practice tools, Quizzy ensures you’re fully  prepared to conquer every challenge and reach your highest  potential with confidence!
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
          <div className="sample__block--image">
            <img
              src="/images/screenshoots/signup.jpg"
              alt="signup"
              className="sample__block--image-photo"
            />
            <p className="sample__block--image-name">SignUp</p>
          </div>
          <div className="sample__block--login">
            <img
              src="/images/screenshoots/login.jpg"
              alt="signup"
              className="sample__block--image-photo"
            />
            <p className="sample__block--image-name">SignUp</p>
          </div>
          <div className="sample__block--home">
            <img
              src="/images/screenshoots/home.jpg"
              alt="signup"
              className="sample__block--image-photo"
            />
            <p className="sample__block--image-name">SignUp</p>
          </div>
          <div className="sample__block--course">
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
    </div>
  );
}

export default App;
