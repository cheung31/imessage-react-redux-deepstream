
import { createAction } from 'redux-actions'
import { browserHistory } from 'react-router'
import * as ConversationActions from './conversations'
import App from '../containers/App'

export const addRecipient = createAction('add recipient')
export const removeRecipient = createAction('remove recipient')
export const addMessageBody = createAction('add message body')
export const clearDraft = createAction('new draft')

export function sendNewDraft(body) {
    return function (dispatch, getState) {
        const { draft, profile, conversations } = getState()

        var messageId = 'messages/' + App.ds.getUid()
        var messageRecord = App.ds.record.getRecord(messageId)
        var authorId = 'users/' + profile.username
        var messageObj = {
            id: messageId,
            author: authorId,
            body: body,
            time: Date.now()
        }
        messageRecord.set(messageObj)

        var participants = [...draft.recipients, authorId].sort()
        var conversationId = 'conversations/' + new Buffer(JSON.stringify(participants)).toString('base64')
        var existingConversation = conversations.conversationsById[conversationId]
        var conversationRecord = App.ds.record.getRecord(conversationId) 
        var conversationObj = {
            id: conversationId,
            participants: participants,
            lastMessage: body,
            messages: [messageId]
        }
        conversationRecord.set(conversationObj)

        for (let index in participants) {
            var listId = participants[index] + '/conversations'
            var participantConversationList = App.ds.record.getList(listId)
            participantConversationList.whenReady(function () {
                var entries = participantConversationList.getEntries()
                if (entries.indexOf(conversationId) == -1) {
                    debugger;
                    participantConversationList.addEntry(conversationId)
                }
            })
        }

        if (!conversations.conversationsById.hasOwnProperty(conversationId)) {
            dispatch(ConversationActions.addConversation({
                id: conversationId,
                participants: participants,
                lastMessage: body
            }))
        }

        dispatch(ConversationActions.addMessage(Object.assign({
            conversationId: conversationId
        }, messageObj )))

        browserHistory.push('/' + conversationId)

        //dispatch(clearDraft())
    }
}
