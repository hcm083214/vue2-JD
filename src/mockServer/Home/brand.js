import {Random} from "mockjs";

export default [...Array(10)].map(item=>({
    imgUrl:Random.image('110x37', Random.color(),Random.cparagraph(1)),
    id:Random.id(),
}))