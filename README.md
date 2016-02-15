
# iMsg

> An iMessage-like web-based messaging client

## Component Tree
```
App
|_ AuthenticationView
|_ ConversationsView
   |_ ConversationListHeader
   |_ ConversationListView
      |_ ConversationListItemView
|_ ConversationView
   |_ ConversationHeader
   |_ ConversationThreadView
      |_ HourMessageGroupView
         |_ MinuteMessageGroupView
            |_ MessageView
               |_ AvatarView
               |_ AuthorLabelView
               |_ MessageBodyView
      | MessageStatusView
      |_ TypingIndicatorView
   |_ ConversationInputView
```

## Dependencies
### Server-side
- [x] [Deepstream.io](https://deepstream.io)

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
- [ ] Redux effects
- [x] TodoMVC example

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
