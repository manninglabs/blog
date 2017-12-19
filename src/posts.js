import post1 from './post1';

export default {
    data: [
      {
         "id": 1,
         "title": "Tutorial 001: Basic Layouts",
         "blurb": "Learn how Row, Column, etc widget can be used for easy layouts.",
         "created": "Dec 10th, 2017",
         "author": "@seenickcode",
         "author_link": "https://www.twitter.com/seenickcode",
         "url": "https://www.vimeo.com/mylink",
         "content": post1.data
       }
    ],
    getItem: function(id) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].id.toString() === id.toString()) {
                return this.data[i];
            }
        }
        return null;
    }
}
