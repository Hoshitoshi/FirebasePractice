import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
      <Search className="widgets_searchIcon"/>
      <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widget_container">
        <h2>いまどうしてる？</h2>
        
      
        {/* ライブラリの追加 */}
        <TwitterTweetEmbed
  tweetId={'1676197833698066433'}
/>
      <TwitterTimelineEmbed
      sourceType="profile" screenName="furukawa_staff" options={{height:400}}/>
      </div>
      <TwitterShareButton
    url={'https://facebook.com/saurabhnemade'}
    options={{ text: '#react.js勉強中', via: 'saurabhnemade' }}
  />
    </div>
  )
}

export default Widgets
