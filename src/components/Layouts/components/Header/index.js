import classNames from "classnames/bind";
import { IoAddOutline, IoSettingsOutline, IoMoonOutline } from 'react-icons/io5';
import { BsThreeDotsVertical, BsQuestionCircle, BsKeyboard, BsCoin, BsCameraVideo } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from "src/assets/images";
import Button from "src/components/Button";
import Menu from "src/components/Popper/Menu";
import Image from "src/components/Image";
import Search from "src/components/Layouts/components/Search";
import { MessageIcon, InboxIcon } from "src/components/Icon";
import routesConfig from 'src/config/routes'

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <MdLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },

            ]
        }
    },
    {
        icon: <BsQuestionCircle />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <BsKeyboard />,
        title: 'Keyboard shortcuts',
    }
]
const USER_MENU = [
    {
        icon: <BiUser />,
        title: 'View profile',
        to: '/alien',

    },
    {
        icon: <BsCoin />,
        title: 'Get Coins',
        to: '/coins',
    },
    {
        icon: <BsCameraVideo />,
        title: 'LIVE Studio',
        to: '/live',
    },
    {
        icon: <IoSettingsOutline />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <IoMoonOutline />,
        title: 'Dark mode',
    },
    {
        icon: <FiLogOut />,
        title: 'Log out',
        separate: true,
    },
]

function Header() {
    const currentUser = true;

    

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem.code)
                break;
            default:
                break;
        }
    }


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt='Logo Alien' />
                </Link>
                <Search/>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button outlineGray leftIcon={<IoAddOutline />}>
                                Upload
                            </Button>
                            <Tippy
                                content='Messages'
                                placement="bottom"
                            >
                                <button className={cx('action-button')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content='Inbox'
                                placement="bottom"
                            >
                                <button className={cx('action-button')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (

                        <>
                            <Button outlineGray leftIcon={<IoAddOutline />}>
                                Upload
                            </Button>
                            <Button primary>
                                Register
                            </Button>

                        </>
                    )}

                    <Menu
                        items={currentUser ? USER_MENU : MENU_ITEMS}
                        onChange={handleMenuChange}
                        hideOnClick={false}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('avatar')}
                                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/333794981_573345321494830_6626873759492579978_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=-1-p8XyjDP8AX-NYhgZ&_nc_ht=scontent.fsgn15-1.fna&oh=00_AfCHalmsf9xjH7fIkgkBGOaQ1dhmcGhRzXsWsHzEzU1Iow&oe=64062F3C'
                                alt='useravatar'
                                fallback={images.avatarError}
                            />
                        ) : (
                            <button className={cx('more-button')}>
                                <BsThreeDotsVertical />
                            </button>
                        )}

                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;