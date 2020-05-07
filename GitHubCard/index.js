/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// axios.get(`https://api.github.com/users/MartaKode`)
// .then(response => {
//   debugger
// })
// .catch(error => {
//   debugger
// })
// .finally(()=> {
//   console.log('done')
// })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

//const friendsArray = ['tetondan', `dustinmyers`, `justsml`, `luishrd`, `bigknell`];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function makeUserCard(objectAtrs){
  const { imageUrl,name, username, location, gitsUrl, followersCount, followingCount, bio} = objectAtrs
  
  const userCard = document.createElement('div')
  const userImg = document.createElement('img')
  const userInfo = document.createElement('div')
  const userName = document.createElement('h3')
  const userUsername = document.createElement('p')
  const userLocation = document.createElement('div')
  const userProfile = document.createElement('p')
  const userProfileLink = document.createElement('a')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')

  userCard.appendChild(userImg)
  userCard.appendChild(userInfo)
  userInfo.appendChild(userName)
  userInfo.appendChild(userUsername)
  userInfo.appendChild(userLocation)
  userInfo.appendChild(userProfile)
  userProfile.appendChild(userProfileLink)
  userInfo.appendChild(userFollowers)
  userInfo.appendChild(userFollowing)
  userInfo.appendChild(userBio)

  userCard.classList.add('card')
  userInfo.classList.add('card-info')
  userName.classList.add('name')
  userUsername.classList.add('username')

  userImg.src = imageUrl
  userName.textContent = name
  userUsername.textContent = username
  userLocation.textContent = `Location: ${location}`
  userProfile.textContent = `Profile:`
  userProfileLink.href = gitsUrl
  userFollowers.textContent = `Followers: ${followersCount}`
  userFollowing.textContent = `Following: ${followingCount}`
  userBio.textContent = `Bio: ${bio}`
  

 return userCard
}

 const cards = document.querySelector('.cards')

function fetchUser(username){
  axios.get(`https://api.github.com/users/${username}`)
.then(response => {
  //debugger
 const ourUser = makeUserCard({
  imageUrl: response.data['avatar_url'], 
  name: response.data.name, 
  username: username, 
  location: response.data.location, 
  gitsUrl: response.data['html_url'],
  followersCount: response.data.followers,
  followingCount: response.data.following,
  bio: response.data.bio
  });

   cards.appendChild(ourUser)

})
.catch(error => {
  //debugger
  console.log('What is this fail')
})
.finally(()=> {
  console.log('done')
})
}

fetchUser('MartaKode')
fetchUser('bigknell')
//console.log(makeUserCard)



const friendsArray = ['tetondan', `dustinmyers`, `justsml`, `luishrd`, `bigknell`];
friendsArray.forEach( element => {
 fetchUser(element)
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
