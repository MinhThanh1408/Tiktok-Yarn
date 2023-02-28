import classNames from "classnames/bind";
import { BsCheckCircleFill } from 'react-icons/bs';


import images from "src/assets/images";
import styles from './AccountItem.module.scss';


const cx = classNames.bind(styles);


function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.avatarDefault} alt='useravatar' />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Minh Thanh</span>
                    <BsCheckCircleFill className={cx('check')} />
                </p>
                <span className={cx('username')}>minhthanh</span>
            </div>
        </div>
    );
}

export default AccountItem;