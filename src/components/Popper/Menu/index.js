import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from "src/components/Popper";
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';



const cx = classNames.bind(styles);

const defaltFn = () => { };

function Menu({
    children,
    items = [],
    onChange = defaltFn,
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory(prev => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        }
        )

    }
    return (
        <Tippy
            offset={[12, 10]}
            delay={[0, 200]}
            placement="bottom-end"
            interactive={true}
            // visible={searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('menu-wrapper')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title='Language' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }}
                        />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() =>
                setHistory(prev => prev.slice(0, 1))
            }
        >
            {children}
        </Tippy>
    );
}

export default Menu;