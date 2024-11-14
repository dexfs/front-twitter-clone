// import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { FeedService } from '../../services/feed-service.ts'

// interface Post {
//
// }

export default function Home() {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    new FeedService().info('alucard').then(response => setUserInfo(response.data))
  }, [])

    return (
      <div>
        <ul>

          {userInfo ? (
            <div key={userInfo.id}>{userInfo.username}</div>
          ) : <span>No Info</span> }

        </ul>
      </div>
    )
}
