import {
    ACCOUNT_ROUTE,
    ADDING_MEMBER_ROUTE,
    ADMIN_ROUTE, BOOKING_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE, QUEST_ID_ROUTE,
    QUESTS_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Quests from "./pages/Quests";
import About from "./pages/About";
import Account from "./pages/Account";
import AddingMember from "./pages/AddingMember";
import QuestId from "./pages/QuestId";
import Booking from "./pages/Booking";

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
    },
    {
        path: QUEST_ID_ROUTE,
        Component: <QuestId/>
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
    },
    {
        path: QUEST_ID_ROUTE,
        Component: <QuestId/>
    },
    {
        path: BOOKING_ROUTE,
        Component: <Booking/>
    }
]