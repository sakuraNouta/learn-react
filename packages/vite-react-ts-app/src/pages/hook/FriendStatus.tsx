import { useEffect, useState } from 'react';

export interface FriendStatusProps {
  friend: { id: number };
}

const ChatApi = {
  subscribeToFriendStatus(id: number, cb: Function) {
    console.log('subscribeToFriendStatus -> id', id);
    setTimeout(() => cb({ isOnline: true }), 1000);
  },
  unsubscribeToFriendStatus(id: number, cb: Function) {
    console.log('unsubscribeToFriendStatus -> id', id);
    setTimeout(() => cb({ isOnline: false }), 1000);
  }
};

function FriendStatus(props: FriendStatusProps) {
  const [isOnline, setIsOnline] = useState(null);
  const [time, setTime] = useState(0);

  setTimeout(() => setTime(+new Date()), 1000);

  useEffect(() => {
    function handleStatesChange(status: { isOnline: any }) {
      setIsOnline(status.isOnline);
    }
    ChatApi.subscribeToFriendStatus(props.friend.id, handleStatesChange);
    return function cleanup() {
      ChatApi.unsubscribeToFriendStatus(props.friend.id, handleStatesChange);
    };
  }, [props.friend.id]);
  let status;
  if (isOnline === null) {
    status = 'Loading...';
  } else status = isOnline ? 'Online' : 'Offline';
  return (
    <div className="m-auto">
      <p>Current Count: {time}</p>
      <p>Current Status: {status}</p>
    </div>
  );
}

export default FriendStatus;
