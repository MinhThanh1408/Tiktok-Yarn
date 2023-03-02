import classNames from "classnames/bind";

import styles from './Menu.module.scss';
import Button from "src/components/Button";

const cx = classNames.bind(styles);

function MenuItem({data}) {
    return ( 
        <Button text className={cx('menu-item')} leftIcon={data.icon} to={data.to}>{data.text}</Button>
     );
}

export default MenuItem;