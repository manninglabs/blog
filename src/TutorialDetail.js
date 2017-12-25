import React, { Component } from 'react';
import './TutorialDetail.css';
import posts from './posts';
import ReactMarkdown from 'react-markdown';
import mixpanel from 'mixpanel-browser';
// import ReactDisqusThread from 'react-disqus-thread';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
} = ShareCounts;

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  EmailShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const RedditIcon = generateShareIcon('reddit');
const TumblrIcon = generateShareIcon('tumblr');
const LivejournalIcon = generateShareIcon('livejournal');
const MailruIcon = generateShareIcon('mailru');
const EmailIcon = generateShareIcon('email');


class TutorialDetail extends Component {

  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    mixpanel.init('831c108f9cb2220b0e431bbb7f97493c');
    if (process.env.NODE_ENV === 'production') {
      console.log('tracking');
      mixpanel.track(`tutorialdetail${this.props.match.params.id}-visited`);
    };

    // more info: https://reacttraining.com/react-router/web/example/basic
    var post = posts.getItem(this.props.match.params.id);

    return (
      <div>
        <h1>{ post.title }</h1>
        <ReactMarkdown source={ post.content } />
        // link to examples 'https://github.com/nygardk/react-share/blob/master/README.md#share-buttons' -->
        <div className='ShareButtons'>
          <VKShareButton  url={'https://www.youtube.com/results?search_query=react+%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D1%8F%D0%B5%D0%BC+%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8+%D1%81%D0%BE%D1%86+%D1%81%D0%B5%D1%82%D0%B5%D0%B9'}
                          title={"blog"}
                          image={"https://ru.best-wallpaper.net/wallpaper/1920x1080/1507/Coast-stones-sea-sky-clouds-sunset_1920x1080.jpg"}>
            <VKIcon size={32} round={false} />
          </VKShareButton>
          <FacebookShareButton  url={'https://www.youtube.com/results?search_query=react+%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D1%8F%D0%B5%D0%BC+%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8+%D1%81%D0%BE%D1%86+%D1%81%D0%B5%D1%82%D0%B5%D0%B9'}
                          title={"blogpost"}
                          image={"https://ru.best-wallpaper.net/wallpaper/1920x1080/1507/Coast-stones-sea-sky-clouds-sunset_1920x1080.jpg"}>
            <FacebookIcon size={32} round={false} />
          </FacebookShareButton>
          <TwitterShareButton  url={'https://www.youtube.com/results?search_query=react+%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D1%8F%D0%B5%D0%BC+%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8+%D1%81%D0%BE%D1%86+%D1%81%D0%B5%D1%82%D0%B5%D0%B9'}
                          title={"blogpost"}
                          image={"https://ru.best-wallpaper.net/wallpaper/1920x1080/1507/Coast-stones-sea-sky-clouds-sunset_1920x1080.jpg"}>
            <TwitterIcon size={32} round={false} />
          </TwitterShareButton>
          <LinkedinShareButton  url={'https://www.youtube.com/results?search_query=react+%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D1%8F%D0%B5%D0%BC+%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8+%D1%81%D0%BE%D1%86+%D1%81%D0%B5%D1%82%D0%B5%D0%B9'}
                          title={"blogpost"}
                          image={"https://ru.best-wallpaper.net/wallpaper/1920x1080/1507/Coast-stones-sea-sky-clouds-sunset_1920x1080.jpg"}>
            <LinkedinIcon size={32} round={false} />
          </LinkedinShareButton>                     
        </div>
      </div>
    );
  }
}

export default TutorialDetail;
