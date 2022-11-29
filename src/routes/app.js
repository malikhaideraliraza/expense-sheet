//components
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

//layout
import AppLayout from "../Layoutes/AppLayout";

export default {
    layout: AppLayout,
    routes: [
        {
            path: '/',
            page: Login
        },
        {
            path: '/register',
            page: Signup
        }
    ]
};
