
# iMsg

> An iMessage-like web-based messaging client built with:
* React
* Redux
* Deepstream.io
* Express + Passport.js

## Component Tree
```
App
|_ NewConversation
|_ ViewConversation
   |_ Conversations
      |_ ConversationListHeader
      |_ ConversationListContainer (Container)
         | ConversationList
           |_ ConversationListItem
   |_ Conversation
      |_ ConversationHeader
      |_ ConversationThreadContainer (Container)
         |_ ConversationThread
            |_ HourMessageGroup?
               |_ MinuteMessageGroup?
                  |_ Message
                     |_ Avatar
                     |_ AuthorLabel
                     |_ MessageBody
           |_ MessageStatus
           |_ TypingIndicator
      |_ ConversationInput
```

## Records
* User - `users/<id>`
* Conversation - `conversations/<id>`
* Message - `messages/<id>`
* Users (Online + Previously Connected) - `users`
* User's Conversations - `users/<id>/conversations`
* Conversation Messages - `conversations/<id>/messages`

## UI State
* Selected Conversation
* User's Conversations
 * Conversation Messages
* Recipients List Visibility
* Message Draft
 * Selected Recipients
 * Available Recipients
 * Body


## Dependencies
### Client-side
As seen in [frontend-boilerplate](https://github.com/tj/frontend-boilerplate):
- [x] [Webpack](https://webpack.github.io)
- [x] [React](https://facebook.github.io/react/)
- [x] [Redux](https://github.com/rackt/redux)
- [x] [Babel](https://babeljs.io/)
- [x] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] [PostCSS](https://github.com/postcss/postcss)
- [x] [CSS modules](https://github.com/outpunk/postcss-modules)
- [x] [Rucksack](http://simplaio.github.io/rucksack/docs)
- [x] [React Router Redux](https://github.com/rackt/react-router-redux)
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

### Server-side
- [x] [Deepstream.io](https://deepstream.io)
- [x] [Express](http://expressjs.com/)
- [x] [Passport](http://passportjs.org/)

## Setup
```
$ npm install
```

## Running
```
$ npm start
```

# License
MIT
