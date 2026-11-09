export interface IUser {
  _id: string,
  first_name: string,
  last_name: string,
  email: string,
  address: string,
  city: string,
  country: string,
  state: string,
  role: string,
  created_by: string,
  updated_by: string,
  __v: number
}

export interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface IGeo {
  lat: string,
  lng: string,
}

export interface IAddresss {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: IGeo
}

export interface IUserHolder {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IAddresss,
  phone: string,
  website: string,
  company: ICompany
}