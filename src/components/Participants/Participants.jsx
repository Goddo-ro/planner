import UserImage from "../../../public/head1(1).png";
import "./Participants.scss";

const Participants = ({participants}) => {
  return (
    <div className="participants">
      <h3 className="event-container__h3">Участники</h3>
      <ul className="participants__list">
        {
          participants.slice(0, participants.length > 6 ? 5 : 6).map(participant => <Participant key={participant.id} participant={participant} />)
        }
        {
          participants.length > 6 && <MoreParticipants participants={participants} />
        }
      </ul>
    </div>
  )
}

const Participant = ({participant}) => {
  return (
    <li className="participant">
      <img className="participant__img" src={participant.img ? participant.img : UserImage} alt="user-img"/>
      <div>
        <p className="participant__username">{participant.username}</p>
      </div>
    </li>
  )
}

const MoreParticipants = ({participants}) => {
  return (
    <div className="more-participants">
      <div>
        <img className="participant__img" src={participants[5].img ? participants[5].img : UserImage}/>
        <img className="participant__img" src={participants[6].img ? participants[6].img : UserImage}/>
        {
          participants[7] && <img className="participant__img" src={participants[7].img ? participants[7].img : UserImage}/>
        }
      </div>
      <p>Еще +{participants.length - 5}</p>
    </div>
  )
}

export default Participants;
