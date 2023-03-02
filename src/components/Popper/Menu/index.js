import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';


import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from "src/components/Popper";
import MenuItem from './MenuItem';



const cx = classNames.bind(styles);

function Menu({
    children,
    items = []
}) {
    const renderItems = () => {
        return items.map((item, index) =>
            <MenuItem key={index} data={item} />
        )

    }
    return (
        <Tippy
            delay={[0, 200]}
            placement="bottom-end"
            interactive={true}
            // visible={searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('menu-wrapper')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;