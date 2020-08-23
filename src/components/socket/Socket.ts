import { useEffect } from 'react'

import Socket from '../../config/socket'

const useSocket = ({ eventName, handler }: { eventName: string; handler: any }) => {
  useEffect(() => {
    if (!Socket.io) {
      return () => {}
    }

    Socket.io.on(eventName, handler)

    return () => {
      Socket.io.off(eventName, handler)
    }
  }, [handler, Socket.io])
}

export default useSocket
