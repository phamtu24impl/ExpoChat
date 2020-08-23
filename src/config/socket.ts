import io from 'socket.io-client'

import env from './env'

interface Socket {
  io: any
}

class Socket {
  init({ token }: { token: string }) {
    this.io = io(env.API_BASE_URL, { query: { userId: token } })
  }

  close() {
    if (!this.io) {
      return
    }
    this.io.removeAllListeners()
    this.io.close()
  }
}

export default new Socket()
