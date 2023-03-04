import classNames from "classnames/bind";
import { BsCheckCircleFill } from 'react-icons/bs';

import Image from "src/components/Image";
import styles from './AccountItem.module.scss';


const cx = classNames.bind(styles);


function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/333794981_573345321494830_6626873759492579978_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=-1-p8XyjDP8AX-NYhgZ&_nc_ht=scontent.fsgn15-1.fna&oh=00_AfCHalmsf9xjH7fIkgkBGOaQ1dhmcGhRzXsWsHzEzU1Iow&oe=64062F3C'
                alt='useravatar'
            />
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