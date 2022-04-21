import './Comment.css';

import logo from './logo.svg';

interface User {
  name: string;
  avatarUrl?: string;
}

interface AvatarProps {
  user: User;
}

interface UserInfoProps {
  author: User;
}

export interface CommentProps {
  author: User;
  text: string;
  date: string;
}

function Avatar(props: AvatarProps) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl || logo}
      alt={props.user.name}
    />
  );
}

function UserInfo(props: UserInfoProps) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author} />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}

export default function Comment(props: CommentProps) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      <div className="Comment-text" title={props.text}>
        {props.text}
      </div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}
