# Pandamonium (MERN Stack)  
[Live Link](https://pandamonium-mern.herokuapp.com/)

# Background
Pandamonium is a fullstack social media app created to foster an inclusive and welcoming environment for the LGBTQ community and allies. Account holders can create a profile linked to a certain are (city/state) and will be directed to that region's main forum. All users in a given regional forum can make posts to that forum as well as make comments to such posts. Posts/comments can also be downvoted/upvoted by users. User profiles can be customized with a short bio and a unique avatar. There is also a built-in 'anonymous' function to help users ease in and settle into their community.  
  
Pandamonium was built on a MongoDB backend framework, to structure essential user data and location data/functionality. Mongoose ODM was used to map data from the backend as Javascript objects. React and Redux was utilized to connect backend data to a clean and intuitive user-interface. Google maps API was implemented to identify city/state locations and to link such locations to forums and users. 

# Technologies
- MongoDB
- Mongoose ODM
- React
- Webpack
- Google Maps API

# Features
### User Auth
- Users can sign up and create a Pandamonium account, linking their new profiles to a specific region (city/state).
- The signup form is rendered with a modal design.
- Users who would like to cample the app first, may log in as a demo user to browse the site and its functionality.
- Upon logging in, users are directed to their regional forum.

### Location/Region
- Pandamonium utilizes Google Maps API to integrate regional data (i.e. city/state search, and autocomplete).
- Each region is linked to its own unique forum, which users are also linked to upon creating an account tied to such location. If a regional forum does not yet exist, due to no users yet existing in a region, the app dynamically creates a new regional forum the instant a new account is linked to such new region.  
```
    User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            // Throw a 400 error if the email address already exists
            return res.status(400).json({ email: 'A user has already signed up with this address' });
        } else {
            // Otherwise create a new user
            Forum.find({city: req.body.city, state: req.body.state}).then((newForumArray) => {
                let newForum = newForumArray[0];
                console.log('newForum1', newForum);
            if (!newForum) {
                newForum = new Forum({
                    name: req.body.city + ', ' + req.body.state,
                    city: req.body.city,
                    state: req.body.state
                });
                console.log('newForum2', newForum);
                newForum.save();
            }
```
- Users can change their location and redirect to an alternate regional forum even after initial account creation.

### Forums/Posts
- Regional forums serve as central hubs containing and indexing all 'top-level' posts (i.e. new original posts) for its given location.
- Such top-level posts can be commented on directly via 'sub-posts'.
- All posts, (whether top-level or subsidiary) can be up/down-voted by a logged in user.
- Any post can be submitted anonymously, simply by checking a box before submission. This helps maintain a sense of security and comfort for certain users that may want to ease into a community at a steadier pace.

### User Profiles
- User profiles consist of location data, a bio, an avatar, and an index of such user's history of posts.
- A user can edit their bio or avatar from the profile page.
- A user can also edit their location (city/state), which will render such new location's regional forum page the next time such user navigates to their 'home page'.

# Credits

panda1- Charles Ho (https://www.instagram.com/hojincha/)  
panda2- http://clipart-library.com/clip-art/transparent-panda-5.htm  
panda3- http://clipart-library.com/clip-art/transparent-panda-6.htm  
panda4- http://clipart-library.com/clipart/pc5rkBEoi.htm  

bg- <a href="https://www.freepik.com/vectors/background">Background vector created by rawpixel.com - www.freepik.com</a>

flags from seventeen.com
https://www.seventeen.com/life/g32577915/lgbtq-pride-flags/?slide=5
