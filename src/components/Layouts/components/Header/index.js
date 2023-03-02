import classNames from "classnames/bind";
import { IoCloseCircle, IoAddOutline } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { BsThreeDotsVertical, BsQuestionCircle, BsKeyboard } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import Tippy from '@tippyjs/react/headless';
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

function Header() {
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
                <div className={cx('search-tippy')}>
                    <Tippy
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
                    </Tippy>
                </div>
                <div className={cx('actions')}>
                    <Button outlineGray leftIcon={<IoAddOutline />}>
                        Upload
                    </Button>
                    <Button primary>
                        Register
                    </Button>
                    <Menu
                        items={MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        <button className={cx('more-button')}>
                            <BsThreeDotsVertical />
                        </button>
                    </Menu>
                </div>
            </div>

        </header>
    );
}

export default Header;