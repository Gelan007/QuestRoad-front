import {
    ACCOUNT_ROUTE,
    ADD_BOOKING_ROUTE, ADD_COMPANY_ROUTE,
    ADD_QUEST_ROUTE, ADD_USER_ROUTE,
    ADDING_MEMBER_ROUTE,
    ADMIN_ROUTE, BOOKING_ADMIN_ROUTE,
    BOOKING_LIST_ROUTE,
    BOOKING_ROUTE,
    COMPANY_LIST_ROUTE, COMPANY_ROUTE,
    COMPANY_SERVICES_ROUTE,
    EDIT_BOOKING_ROUTE, EDIT_COMPANY_ROUTE,
    EDIT_QUEST_ROUTE, EDIT_USER_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    QUEST_ID_ROUTE,
    QUEST_LIST_ROUTE,
    QUEST_ROUTE,
    QUESTS_ROUTE,
    REGISTRATION_ROUTE, SERVICES_ROUTE,
    USER_LIST_ROUTE, USER_ROUTE
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
import QuestAdmin from "./pages/AdminPanel/Quest";
import QuestList from "./pages/CompanyPanel/QuestList";
import QuestListAdmin from "./pages/AdminPanel/QuestList";
import AddQuest from "./pages/CompanyPanel/AddQuest";
import AddQuestAdmin from "./pages/AdminPanel/AddQuest";
import EditQuest from "./pages/CompanyPanel/EditQuest";
import EditQuestAdmin from "./pages/AdminPanel/EditQuest";
import CompanyService from "./pages/CompanyPanel/CompanyService";
import BookingList from "./pages/AdminPanel/BookingList";
import CompanyList from "./pages/AdminPanel/CompanyList";
import UserList from "./pages/AdminPanel/UserList";
import AddBooking from "./pages/AdminPanel/AddBooking";
import EditBooking from "./pages/AdminPanel/EditBooking";
import AddCompany from "./pages/AdminPanel/AddCompany";
import EditCompany from "./pages/AdminPanel/EditCompany";
import AddUser from "./pages/AdminPanel/AddUser";
import EditUser from "./pages/AdminPanel/EditUser";
import Services from "./pages/AdminPanel/Services";
import Company from "./pages/AdminPanel/Company";
import BookingA from "./pages/AdminPanel/Booking";
import User from "./pages/AdminPanel/User";
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

export const adminRoutes = [
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
        Component: <QuestAdmin/>
    },
    {
        path: QUEST_LIST_ROUTE,
        Component: <QuestListAdmin/>
    },
    {
        path: ADD_QUEST_ROUTE,
        Component: <AddQuestAdmin/>
    },
    {
        path: EDIT_QUEST_ROUTE,
        Component: <EditQuestAdmin/>
    },
    {
        path: COMPANY_SERVICES_ROUTE,
        Component: <CompanyService/>
    },
    {
        path: BOOKING_LIST_ROUTE,
        Component: <BookingList/>
    },
    {
        path: COMPANY_LIST_ROUTE,
        Component: <CompanyList/>
    },
    {
        path: USER_LIST_ROUTE,
        Component: <UserList/>
    },
    {
        path: ADD_BOOKING_ROUTE,
        Component: <AddBooking/>
    },
    {
        path: EDIT_BOOKING_ROUTE,
        Component: <EditBooking/>
    },
    {
        path: COMPANY_SERVICES_ROUTE,
        Component: <CompanyService/>
    },
    {
        path: ADD_COMPANY_ROUTE,
        Component: <AddCompany/>
    },
    {
        path: EDIT_COMPANY_ROUTE,
        Component: <EditCompany/>
    },
    {
        path: ADD_USER_ROUTE,
        Component: <AddUser/>
    },
    {
        path: EDIT_USER_ROUTE,
        Component: <EditUser/>
    },
    {
        path: SERVICES_ROUTE,
        Component: <Services/>
    },
    {
        path: COMPANY_ROUTE,
        Component: <Company/>
    },
    {
        path: BOOKING_ADMIN_ROUTE,
        Component: <BookingA/>
    },
    {
        path: USER_ROUTE,
        Component: <User/>
    }
]
