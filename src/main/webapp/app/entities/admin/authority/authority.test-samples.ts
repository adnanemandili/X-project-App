import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '75745c46-8e41-4d64-bf7e-c7d33c0b2e2e',
};

export const sampleWithPartialData: IAuthority = {
  name: '459198df-268f-4084-b83f-c3f0391d5020',
};

export const sampleWithFullData: IAuthority = {
  name: '402e17cf-4a24-4a80-ae64-13f025d6bda3',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
