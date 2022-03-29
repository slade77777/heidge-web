export const EmailReg =
  /^[a-zA-Z]((_|-|\.)?[a-zA-Z0-9])*@[a-zA-Z0-9-]{2,}(\.[a-zA-Z0-9]{2,4}){1,3}$/;

export enum rankType {
  w = "w",
  m = "m",
  d = "d",
}

export const rankTypeName = {
  [`${rankType.w}`]: "Last 7 days",
  [`${rankType.m}`]: "Last 30 days",
  [`${rankType.d}`]: "All Time",
};
