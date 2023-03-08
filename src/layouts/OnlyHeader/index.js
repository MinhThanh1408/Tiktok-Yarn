import classNames from "classnames/bind";

import styles from './OnlyHeader.module.scss';
import Header from "src/components/Layouts/components/Header";
import Sidebar from "src/components/Layouts/components/Sidebar";

const cx = classNames.bind(styles);

function OnlyHeader({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default OnlyHeader;