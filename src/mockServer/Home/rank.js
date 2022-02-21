import {Random} from "mockjs";

export default [...Array(4)].map(item=>({
    imgUrl:Random.image('200x200', Random.color()),
    id:Random.id(),
    title:Random.cparagraph(1),
    price:Random.float(1000, 10000)
}))