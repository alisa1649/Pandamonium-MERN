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
                        <img src="/alisa200px.jpg" alt="picture of Alisa"></img>
                    </div>
                    <div className="about-us-info">
                        <h3 className="name">
                            Alisa Cheadle- <i>Role</i>
                        </h3>
                        <p className="bio">
                            Alisa focused primarily on our site's frontend, including styling of the landing, dashboard,
                            profile, and thread pages as well as the frontend CRUD functionality for posts and comments.
                            Alisa also integrated the frontend of posts, threads and comments to the backend.
                        </p>
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
                    <div className="about-us-pic">
                        <img src="./danny_profile_photo.jpg" alt="picture of Danny"></img>
                    </div>
                    <div className="about-us-info">
                        <h3 className="name">
                            Danny Ho- <i>Backend Developer</i>
                        </h3>
                        <p className="bio">
                            Danny focused primarily on Pandamonium's backend, including implementation of its user
                            authentication, and structuring the models, validations and routes for location-based
                            forums, posts/comments, and user data. Danny also assisted in connecting the location-based
                            forum to the frontend.
                        </p>
                    </div>
                </div>
                <div className="link-box">
                    <a href="https://github.com/dannyho77" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/danny-ho-a4988360/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    {/* personal site goes here */}
                    <a href="https://dannyho77.github.io/Danny-Ho-dev.bio/" target="_blank">
                        <i className="fas fa-user-circle"></i>
                    </a>
                </div>
            </div>
            <div id="lane" className="about-us-item">
                <div className="left">
                    <div className="about-us-pic">
                        <img id="lane-pic" alt="picture of Lane" src="./lane_profile.jpg"></img>
                    </div>
                    <div className="about-us-info">
                        <h3 className="name">
                            Lane Harris- <i>Flex Developer</i>
                        </h3>
                        <p className="bio">
                            Lane worked as a flex developer for this project, predominantly working on the
                            implementation of user profiles from back to front. She added the ability to post
                            anonymously, as well as the ability to upvote and downvote posts. Lane also assisted in
                            styling aspects across the entire site.
                        </p>
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
                    <a href="https://lrharris215.github.io./" target="_blank">
                        <i className="fas fa-user-circle"></i>
                    </a>
                </div>
            </div>
            <div id="yohan" className="about-us-item">
                <div className="left">
                    <div className="about-us-pic">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/920/medium/Yohan_Oh.jpg?1610668266"
                            alt="picture of Yohan"
                        />
                    </div>
                    <div className="about-us-info">
                        <h3 className="name">
                            Yohan Oh- <i>Role</i>
                        </h3>
                        <p className="bio">
                            Yohan focused primarily on implementing the Google Maps API to Pandamonium's location-based
                            forums, connecting users and forums to a specific region. Yohan also assisted with design
                            aspects on the frontend.
                        </p>
                    </div>
                </div>
                <div className="link-box">
                    <a href="https://github.com/yohan546" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yohan-oh-94a74020b/" target="_blank">
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
