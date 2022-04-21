export interface User {
  name: string,
  email: string,
  phone: string,
  address: string,
  "city": {
    "id": number,
    "governorate_id": number,
    "name": string,
    "governorate_name": string
}
avatar:string
}

