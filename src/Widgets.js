import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
          <div className="widgets__input">
              <SearchIcon className="widgets__searchIcon" />
              <input placeholder="Search Twitter" type="text" />
          </div>

          <div className="widgets__widgetContainer">
              <h2>Whats happening</h2>
              
              <TwitterTweetEmbed tweetId={"1407869879122857985"}/>
              
              <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="Herebriefly"
                  options={{ height: 400 }}
               />

               <TwitterShareButton 
                  url={"https://beastsearch.herokuapp.com"}
                  options={{ text: "#reactjs is awesome", via:"Herebriefly"}} 
                />
          </div>
        
        </div>
    );
}

export default Widgets
