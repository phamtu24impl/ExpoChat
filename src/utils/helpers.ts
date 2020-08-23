import { Conversation, User } from '../types/local'

export const getChatName = (conversation: Conversation, currentUser: User) => {
  if (!conversation) {
    return
  }
  if (conversation.members.length === 0) {
    return
  }
  if (!currentUser) {
    return
  }
  return conversation.members.filter((member) => member._id !== currentUser._id).map((member) => member.username)
}
