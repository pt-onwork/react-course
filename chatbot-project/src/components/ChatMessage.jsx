import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/image.png'
import './ChatMessage.css';
import dayjs from 'dayjs';

console.log({UserProfileImage});
export function ChatMessage({message,sender,time}){
  //destructuring props
  //const {message,sender} = props;
  
  /*
  if(sender === 'robot'){
    return (
      <div>
        <img src='robot.png' width="50" />
        {message}
      </div>
    );
  } guard operator used below inside jsx directly &&
  */
  const formattedTime = dayjs(time).format('HH:mm');
  return (
    <div className={
      sender === 'user' ? 
        'chat-message-user' : 
        'chat-message-robot'
    }>
      {sender ==='robot' && (
        <img src={RobotProfileImage} className="chat-message-profile"/>
      )}
      <div className="chat-message-text">
        {message}
        <div className="chat-message-time">
          {formattedTime}
        </div>
      </div>
      
      {sender ==='user' && (
          <img src={UserProfileImage} className="chat-message-profile"/>
      )}
    </div>
  );
  
  
}