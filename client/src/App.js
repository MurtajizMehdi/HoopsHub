import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'

const App = () => {

  const posts = [
      {'id':'1', 
      'title': 'Ending the Goat Debate 🐐',
      'author':'Murtajiz Mehdi', 
      'description': 'No one seems to talk about how much help MJ had. With Pippen taking a massive paycut in his lowball contract offer,' + 
      ' the Chicago Bulls were able to build around MJ much better than a lot of other teams were for their respective franchise player.' + 
      ' Thus, resulting in MJ having a much better squad around him compared to the rest of the league.'},

      {'id':'2', 
      'title': 'Who Wins the Chip? 🏆',
      'author':'Murtajiz Mehdi', 
      'description': "As a Miami Heat fan, it's hard to root for any team BUT them. However, given the metrics of this season, I would" + 
      " not be surprised at all if they don't end up winning. Teams like the Nuggets, Celtics, and Timberwolves look to be in phenomenal" + 
      " standing. Not to mention the rest of the Eastern conference, stacked with teams like the Cavaliers and Knicks."},

      {'id':'3', 
      'title': 'The Issue with NBA Media 🤐',
      'author':'Murtajiz Mehdi', 
      'description': 'People like Stephen A. Smith and Skip Bayless. People that care too much about ratings or views and purposefully' +
      ' spread ludicrous beliefs or "takes" in order to get attention. Analysts should be more like JJ Reddick, in which their main' +
      ' objective should be to talk about the GAME.'},

      {'id':'4', 
      'title': 'Who is League MVP? 👑',
      'author':'Murtajiz Mehdi', 
      'description': 'I personally am a fan of Nikola Jokic, simply because of his play style. He puts the team first, and understands what' +
      " it takes to win. I believe he is Denver's biggest asset, and without him, perhaps his team would not be where it is today." + 
    " I believe he will get his third MVP award this season."},
  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <Link to="/"><button className="headerBtn"> ⌂ Home </button></Link>
        <Link to="/new"><button className="headerBtn"> + Create Post </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
