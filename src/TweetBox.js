import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                   <Avatar src="https://thehornettribuneonline.com/wp-content/uploads/2020/10/David-Oeyekeye-461x475.jpg"/>
                   <input type="text" placeholder="What's happening?" />
                </div>
                <input 
                  className="tweetBox__imageInput"
                  type="text"
                  placeholder="Enter image URL"
                
                />
                <Button className="tweetBox__button">Tweet</Button>

            </form>
        </div>
    )
}

export default TweetBox
