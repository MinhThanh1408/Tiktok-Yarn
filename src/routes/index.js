import routesConfig from 'src/config/routes'


import Home from "src/pages/Home";
import Following from "src/pages/Following";
import Upload from "src/pages/Upload";
import Profile from "src/pages/Profile";

const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: null,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    }
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };