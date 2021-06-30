import React, { useState } from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = e => {
          e.preventDefault();
         
          db.collection('posts').add({
              displayName: "Dave",
              username: "Herebriefly",
              verified: true,
              text: tweetMessage,
              image: tweetImage,
              Avatar: "https://thehornettribuneonline.com/wp-content/uploads/2020/10/David-Oeyekeye-461x475.jpg",

          });

          setTweetMessage("");
          setTweetImage("");
    };

    
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                   <Avatar src="https://thehornettribuneonline.com/wp-content/uploads/2020/10/David-Oeyekeye-461x475.jpg"/>
                   <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        type="text" 
                        placeholder="What's happening?" />
                </div>
                   <input 
                        onChange={(e) => setTweetImage(e.target.value)}
                        value={tweetImage}
                        className="tweetBox__imageInput"
                        type="text"
                        placeholder="Optional: Enter image URL"
                
                   />
                <Button onClick={sendTweet} type="submit" className="tweetBox__button">Tweet</Button>

            </form>
        </div>
    )
}

export default TweetBox;
