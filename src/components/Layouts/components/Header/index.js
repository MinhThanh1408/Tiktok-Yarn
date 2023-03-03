import classNames from "classnames/bind";
import { IoCloseCircle, IoAddOutline, IoSettingsOutline, IoMoonOutline } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { BsThreeDotsVertical, BsQuestionCircle, BsKeyboard, BsCoin, BsCameraVideo } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { FiSend, FiLogOut } from 'react-icons/fi';
import { BiMessageAltMinus, BiUser } from 'react-icons/bi';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// import { useEffect, useState } from "react";

import styles from './Header.module.scss';
import images from "src/assets/images";
import { Wrapper as PopperWrapper } from "src/components/Popper";
import AccountItem from "src/components/AccountItem";
import Button from "src/components/Button";
import Menu from "src/components/Popper/Menu";

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

    // const [searchResults, setSearchResults] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResults([1]);
    //     }, 1000)
    // })

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
                <a href='/' className={cx('logo')}>
                    <img src={images.logo} alt='Logo Alien' />
                </a>
                <div className={cx('search-tippyheadless')}>
                    <TippyHeadless
                        interactive={true}
                        visible={false}
                        // visible={searchResults.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input type='text' placeholder="Search account and video" spellCheck='false' />
                            <button className={cx('clear')}>
                                <IoCloseCircle />
                            </button>
                            <button className={cx('loading')}>
                                <AiOutlineLoading3Quarters />

                            </button>
                            <button className={cx('search-btn')}>
                                <GoSearch />
                            </button>
                        </div>
                    </TippyHeadless>
                </div>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button outlineGray leftIcon={<IoAddOutline />}>
                                Upload
                            </Button>
                            <Tippy
                                trigger="click"
                                content='Messages'
                                placement="bottom"
                            >
                                <button className={cx('action-button')}>
                                    <FiSend />
                                </button>
                            </Tippy>
                            <Tippy
                                content='Inbox'
                                placement="bottom"
                            >
                                <button className={cx('action-button')}>
                                    <BiMessageAltMinus />
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
                    >
                        {currentUser ? (
                            <img className={cx('avatar')} src={images.avatarDefault} alt='useravatar' />
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