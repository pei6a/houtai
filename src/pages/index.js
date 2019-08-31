import Loadable from "react-loadable"
import Loading from "../common/loading"
const Home=Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Addbooks=Loadable({
    loader:()=>import("./books/addbooks"),
    loading:Loading
})

const Hotbooks=Loadable({
    loader:()=>import("./books/hotbooks"),
    loading:Loading
})

const PublicArticle=Loadable({
    loader:()=>import("./books/publicArticle"),
    loading:Loading
})

const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

const Auth=Loadable({
    loader:()=>import("./users/auth"),
    loading:Loading
})

const Info=Loadable({
    loader:()=>import("./users/info"),
    loading:Loading
})

export {
    Home,
    Addbooks,
    Hotbooks,
    PublicArticle,
    Login,
    Auth,
    Info

}

