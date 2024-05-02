import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 26286,
  login: 'Sc=@lW\\:E0J8P\\9flgic',
};

export const sampleWithPartialData: IUser = {
  id: 25068,
  login: 'N',
};

export const sampleWithFullData: IUser = {
  id: 5850,
  login: "b@G\\wJUms\\'iKYw4\\^z\\_QjPRME",
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
