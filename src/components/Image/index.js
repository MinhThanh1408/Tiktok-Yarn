import classNames from "classnames/bind";
import { useState, forwardRef } from "react";

import styles from './Image.module.scss'
import images from "src/assets/images";
const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, classNames, fallBack, ...props }, ref) => {
    const [_fallBack, _setFallBack] = useState('')

    const handleError = () => {
        _setFallBack(fallBack ? fallBack : images.imageError1)
    };
    const classes = classNames;
    return (
        <img
            src={_fallBack || src}
            alt={alt}
            className={cx('wrapper', classes)}
            ref={ref} 
            {...props}
            onError={handleError} />
    );
})

export default Image;