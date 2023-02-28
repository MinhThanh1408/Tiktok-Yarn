import classNames from "classnames/bind";
import { IoCloseCircle } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';

import styles from './Header.module.scss';
import images from "src/assets/images";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Logo Alien'></img>
                </div>
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
                <div className={cx('actions')}>
                    Actions
                </div>
            </div>

        </header>
    );
}

export default Header;