import PropTypes from 'prop-types';
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
Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
}

export default Header;