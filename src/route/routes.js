import Home from "@/pages/Home"; 
import Search from "@/pages/Search";
const routers = [
    { path: '/', component: Home, name: 'home' },
    { path: '/search/:keyword?', component: Search, name: 'search' },

]

export default routers