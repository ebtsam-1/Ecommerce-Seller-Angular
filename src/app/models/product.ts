export interface Product {
  id: number
  name:string
  price:number
  discount:number
  image?:string
  "category": {
    "id": number,
    "name": string,
    "image"?: "https://via.placeholder.com/640x480.png/0011dd?text=animals+recusandae",
    "description"?: "Aut voluptas praesentium quas ipsam temporibus."
}
  description:string,
  available:number,
  quantity:number

}
