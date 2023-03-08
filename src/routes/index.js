import config from 'src/config'


import Home from "src/pages/Home";
import Following from "src/pages/Following";
import Upload from "src/pages/Upload";
import Profile from "src/pages/Profile";

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: null,
    },
    {
        path: config.routes.profile,
        component: Profile,
    }
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };