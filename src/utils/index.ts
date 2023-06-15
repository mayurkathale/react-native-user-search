import { UserType } from '../types';
import users from '../data';

export function getUserIndexByName(data: UserType[], name: string): number {
  let index = -1;
  // eslint-disable-next-line consistent-return
  data.forEach((user, i) => {
    if (user.name === name) {
      index = i;
      return true;
    }
  });
  return index;
}

export function readAndSortJson(): UserType[] {
  return Object.values(users).sort((currentUser, nextUser) => {
    return nextUser.bananas - currentUser.bananas;
  });
}
