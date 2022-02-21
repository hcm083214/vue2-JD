import {Random} from "mockjs";

export default [...Array(6)].map(item=>({
    imgUrl:Random.image('142x142', Random.color()),
    id:Random.id(),
    title:Random.cparagraph(1),
    price:Random.float(1000, 10000)
}))