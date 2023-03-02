import classNames from 'classnames/bind';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({
    title,
    onBack,
}) {

    return (
        <header className={cx('header')}>
            <button className={cx('back-button')} onClick={onBack}>
                <MdKeyboardArrowLeft />
            </button>
            <h4 className={cx('header-title')}>
                {title}
            </h4>
        </header>
    );
}

export default Header;