import moment from 'moment';

export default function transformEvents(events) {
  return events.map(event => ({
    id: event.id,
    title: event.title,
    start: moment(event.dateStart).toDate(),
    end: moment(event.dateStart).toDate(),
    endDate: event.dateEnd ? moment(event.dateEnd).toDate() : moment(event.dateStart).endOf('day').toDate(),
    description: event.description,
    location: event.location,
    participants: event.participants,
    photos: event.photos,
    owner: event.owner,
  }));
}
