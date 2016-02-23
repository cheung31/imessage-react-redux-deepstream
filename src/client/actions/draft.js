
import { createAction } from 'redux-actions'

export const addRecipient = createAction('add recipient')
export const removeRecipient = createAction('remove recipient')
export const addMessageBody = createAction('add message body')
export const clearDraft = createAction('clear draft')
