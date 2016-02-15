
import { createAction } from 'redux-actions'

export const addConversation = createAction('add conversation')
export const deleteConversation = createAction('delete converstaion')
export const sendMessage = createAction('send message')
export const receiveMessage = createAction('receive message')
export const readMessage = createAction('read message')
export const startTyping = createAction('start typing')
