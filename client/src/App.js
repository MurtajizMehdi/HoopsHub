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
      'description': ''},

      {'id':'3', 
      'title': 'The Issue with NBA Media 🤐',
      'author':'Murtajiz Mehdi', 
      'description': ''},

      {'id':'4', 
      'title': 'Who is League MVP? 👑',
      'author':'Murtajiz Mehdi', 
      'description': ''},
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
