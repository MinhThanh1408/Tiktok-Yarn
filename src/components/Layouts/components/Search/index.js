import classNames from "classnames/bind";
import TippyHeadless from '@tippyjs/react/headless';
import { IoCloseCircle } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useEffect, useState, useRef } from "react";

import * as searchServices from 'src/apiServices/searchServices'
import { Wrapper as PopperWrapper } from "src/components/Popper";
import AccountItem from "src/components/AccountItem";
import styles from "./Search.module.scss";
import { SearchIcon } from "src/components/Icon";
import { useDebounce } from "src/hooks";


const cx = classNames.bind(styles);


function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchValue, 500)

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce);

            setSearchResult(result);
            setLoading(false);

        };

        fetchApi();
    }, [debounce])
    // Cần xem lại useEffect

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
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
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (

                        <button
                            className={cx('clear')}
                            onClick={handleClear}
                        >
                            <IoCloseCircle />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('loading')}>
                            <AiOutlineLoading3Quarters />
                        </button>
                    )}
                    <button className={cx('search-btn')} onMouseDown={e=>e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;