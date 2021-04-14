const AboutUs = (props) => {
    return (
        <div className="about-us-page">
            <div className="about-us-top">
                <h2>About Us</h2>
                <p>
                    PandaCorp was formed by a group of App Academy Students. Pandamonium is their capstone MERN project
                    for the semester. Our wonderful team includes:
                </p>
            </div>

            <div id="alisa" className="about-us-item">
                <div className="left">
                    <div className="about-us-pic">
                        <img src="https://avatars.githubusercontent.com/u/74744805?v=4"></img>
                    </div>
                    <div className="about-us-info">
                        <h3 className="name">
                            Alisa Cheadle- <i>Role</i>
                        </h3>
                        <p className="bio">Write something nice here! What did you work on??</p>
                    </div>
                </div>
                <div className="link-box">
                    <a href="https://github.com/alisa1649" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/alisa-cheadle-04a7811a7/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="http://alisacheadle.com/" target="_blank">
                        <i className="fas fa-user-circle"></i>
                    </a>
                </div>
            </div>
            <div id="danny" className="about-us-item">
                <div className="left">
                    <div className="about-us-pic"></div>
                    <div className="about-us-info">
                        <h3 className="name">
                            Danny Ho- <i>Role</i>
                        </h3>
                        <p className="bio">Write something nice here! What did you work on??</p>
                    </div>
                </div>
                <div className="link-box">
                    <a href="" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    {/* personal site goes here */}
                    <a href="" target="_blank">
                        <i className="fas fa-user-circle"></i>
                    </a>
                </div>
            </div>
            <div id="lane" className="about-us-item">
                <div className="left">
                    <div className="about-us-pic">
                        <img
                            id="lane-pic"
                            src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/906/medium/Lane_Harris.jpg?1610668094"></img>
                    </div>
                    <div className="about-us-info">
                        <h3 className="name">
                            Lane Harris- <i>Role</i>
                        </h3>
                        <p className="bio">Write something nice here! What did you work on??</p>
                    </div>
                </div>
                <div className="link-box">
                    <a href="https://github.com/lrharris215" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/lane-harris-86830320b/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    {/* personal site goes here */}
                    <a href="" target="_blank">
                        <i className="fas fa-user-circle"></i>
                    </a>
                </div>
            </div>
            <div id="yohan" className="about-us-item">
                <div className="left">
                    <div className="about-us-pic"></div>
                    <div className="about-us-info">
                        <h3 className="name">
                            Yohan Oh- <i>Role</i>
                        </h3>
                        <p className="bio">Write something nice here! What did you work on??</p>
                    </div>
                </div>
                <div className="link-box">
                    <a href="" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    {/* personal site goes here */}
                    <a href="" target="_blank">
                        <i className="fas fa-user-circle"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
