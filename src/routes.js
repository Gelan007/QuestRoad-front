import {
    ACCOUNT_ROUTE,
    ADDING_MEMBER_ROUTE,
    ADMIN_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    QUESTS_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Quests from "./pages/Quests";
import About from "./pages/About";
import Account from "./pages/Account";
import AddingMember from "./pages/AddingMember";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Login/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Registration/>
    },
    {
        path: QUESTS_ROUTE,
        Component: <Quests/>
    },
    {
        path: HOME_ROUTE,
        Component: <About/>
    }
]

export const authRoutes = [
    {
        path: ACCOUNT_ROUTE,
        Component: <Account/>
    },
    {
        path: QUESTS_ROUTE,
        Component: <Quests/>
    },
    {
        path: HOME_ROUTE,
        Component: <About/>
    },
    {
        path: ADDING_MEMBER_ROUTE,
        Component: <AddingMember/>
    }
]