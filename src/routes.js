import {
    ACCOUNT_ROUTE, ADD_QUEST_ROUTE,
    ADDING_MEMBER_ROUTE,
    ADMIN_ROUTE, BOOKING_ROUTE, COMPANY_SERVICES_ROUTE, EDIT_QUEST_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE, QUEST_ID_ROUTE, QUEST_LIST_ROUTE, QUEST_ROUTE,
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
import Quest from "./pages/CompanyPanel/Quest";
import QuestList from "./pages/CompanyPanel/QuestList";
import AddQuest from "./pages/CompanyPanel/AddQuest";
import EditQuest from "./pages/CompanyPanel/EditQuest";
import CompanyService from "./pages/CompanyPanel/CompanyService";

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

export const companyRoutes = [
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
    },
    {
        path: QUEST_ROUTE,
        Component: <Quest/>
    },
    {
        path: QUEST_LIST_ROUTE,
        Component: <QuestList/>
    },
    {
        path: ADD_QUEST_ROUTE,
        Component: <AddQuest/>
    },
    {
        path: EDIT_QUEST_ROUTE,
        Component: <EditQuest/>
    },
    {
        path: COMPANY_SERVICES_ROUTE,
        Component: <CompanyService/>
    }
]
