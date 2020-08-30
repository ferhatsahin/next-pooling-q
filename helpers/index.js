import moment from "moment";

export const dateFormatter = date => {
  return moment(new Date(date)).format("LL");
};