import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { BsCheckCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

import Image from "src/components/Image";
import styles from './AccountItem.module.scss';


const cx = classNames.bind(styles);


function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <BsCheckCircleFill className={cx('check')} />}
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}


export default AccountItem;