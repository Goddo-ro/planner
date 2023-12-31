import UserImage from "../../../public/head1(1).png";
import "./Participants.scss";

const Participants = ({participants, owner}) => {
  if (owner)
    participants = [owner, ...participants.filter(participant => participant.id !== owner?.id)];

  return (
    <div className="participants">
      <h3 className="event-container__h3">Участники</h3>
      <ul className="participants__list" style={{justifyContent: `${participants.length > 4 ? "space-between" : "unset"}`}}>
        {
          participants.slice(0, participants.length > 6 ? 5 : 6).map(participant =>
            <Participant key={participant.id} participant={participant} isOwner={owner?.id === participant.id} />)
        }
        {
          participants.length > 6 && <MoreParticipants participants={participants} />
        }
      </ul>
    </div>
  )
}

const Participant = ({participant, isOwner}) => {
  return (
    <li className="participant">
      <img className="participant__img" src={participant.img ? participant.img : UserImage} alt="user-img"/>
      <div>
        <p className="participant__username">{participant.username}</p>
        {
          isOwner && <span className="creator-span">Организатор</span>
        }
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
