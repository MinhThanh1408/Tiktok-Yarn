import classNames from "classnames/bind";
import TippyHeadless from '@tippyjs/react/headless';
import { IoCloseCircle } from 'react-icons/io5';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useEffect, useState, useRef } from "react";

import { Wrapper as PopperWrapper } from "src/components/Popper";
import AccountItem from "src/components/AccountItem";
import styles from "./Search.module.scss";
import { SearchIcon } from "src/components/Icon";

const cx = classNames.bind(styles);




function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0)
    },[])
    // Cần xem lại useEffect

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    
    return (
        <div className={cx('wrapper')}>
            <TippyHeadless
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type='text'
                        placeholder="Search account and videos"
                        spellCheck='false'
                        onChange={e => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (

                        <button
                            className={cx('clear')}
                            onClick={handleClear}
                        >
                            <IoCloseCircle />
                        </button>
                    )}
                    {/* <button className={cx('loading')}>
                        <AiOutlineLoading3Quarters />
                    </button> */}
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;