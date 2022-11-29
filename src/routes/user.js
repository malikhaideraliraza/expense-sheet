//components
import Dashboard from "../Pages/Dashboard";
import ExpenseAnalytics from "../Pages/ExpenseAnalytics";
import GridPage from "../Pages/GridPage";

//layout
import UserLayout from "../Layoutes/UserLayout";

export default {
    layout: UserLayout,
    routes: [
        {
            path: '/dashboard',
            page: Dashboard
        },
        {
            path: '/analytics',
            page: ExpenseAnalytics
        },
        {
            path: '/grid-table',
            page: GridPage
        }
    ]
};
