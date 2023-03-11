import PropTypes from 'prop-types';
import { BsCheckCircleFill } from 'react-icons/bs';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import Image from './../Image/index';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Image
                className={cx('avatar')}
                src=''
                alt='Avatar'
            />
            <div className={cx('info')}>
            <p className={cx('nickname')}>
                    <span>nickname</span>
                    <BsCheckCircleFill className={cx('check')} />
                </p>
                <p className={cx('name')}>Nguyễn Alien</p>
            </div>

        </div>
    );
}
AccountItem.propTypes = {

}
export default AccountItem;