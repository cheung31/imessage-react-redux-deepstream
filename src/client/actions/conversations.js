
import { createAction } from 'redux-actions'

export const addConversation = createAction('add conversation')
export const viewConversation = createAction('view conversation')
export const deleteConversation = createAction('delete converstaion')
export const addMessage = createAction('add message')
export const receiveMessage = createAction('receive message')
export const readMessage = createAction('read message')
export const startTyping = createAction('start typing')
export const updateConversationList = createAction('update conversation list')
