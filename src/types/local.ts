export type User = {
  username: string
  _id: string
}

export type AuthInfo = {
  token: string
}

export type Response<Data, Metadata = {}> = {
  data: Data
  metadata: Metadata
}

export type Message = {
  seenBy: string[]
  _id: string
  content: string
  sender: User
  createdAt: Date
  updatedAt: Date
}
export type Conversation = {
  _id: string
  members: User[]
  messages: Message[]
}
