import moment from "moment";
import { Event } from "../../../../../services/model/event";
import { EventFormType } from "./types";
import { User } from "../../../../../services/model/user";

const convertParticipantsToUsers = (
  participants: Event["participants"],
  users: User[]
): User[] =>
  users.filter((item) => participants.find((val) => val === item.id));

const convertUsersToParticipants = (users: User[]): Event["participants"] =>
  users.map((item) => item.id);

const createDateStringFromMoment = (
  date: moment.Moment,
  time: moment.Moment
) => {
  const day = date.date();
  const month = date.month();
  const year = date.year();

  return new Date(
    year,
    month,
    day,
    time.hour(),
    time.minutes(),
    time.seconds()
  ).toString();
};

export const convertEventToFormEvent = (
  {
    id,
    title,
    link,
    participants,
    periodicity,
    description,
    start,
    end,
  }: Event,
  users: User[] = []
): EventFormType => ({
  id,
  title,
  link,
  participants: convertParticipantsToUsers(participants, users),
  periodicity,
  description,
  date: moment(start),
  start: moment(start),
  end: moment(end),
});

export const convertFormEventToEvent = ({
  id,
  title,
  link,
  participants,
  date,
  start,
  end,
  periodicity,
  description,
}: EventFormType): Event => ({
  id,
  title,
  link,
  participants: convertUsersToParticipants(participants),
  start: createDateStringFromMoment(date, start),
  end: createDateStringFromMoment(date, end),
  periodicity,
  description,
});
