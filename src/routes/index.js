import Home from "src/pages/Home";
import Following from "src/pages/Following";
import Upload from "src/pages/Upload";
import Profile from "src/pages/Profile";

const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: null,
    },
    {
        path: '/:nickname',
        component: Profile,
    }
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };