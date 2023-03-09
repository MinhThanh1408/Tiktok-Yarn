import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outlineGray = false,
    outlinePink = false,
    text = false,
    disabled = false,
    round = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon = false,
    rightIcon = false,
    onClick,
    ...passProps }) {

    let Component = 'button';
    const props = {
        onClick,
        ...passProps,

    };

    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] !== 'function') {
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outlineGray,
        outlinePink,
        text,
        disabled,
        round,
        small,
        large,
        [className]: className,

    });



    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>
                {leftIcon}
            </span>}
            <span className={cx('title')}>
                {children}
            </span>
            {rightIcon && <span className={cx('icon')}>
                {rightIcon}
            </span>}
        </Component>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outlineGray: PropTypes.bool,
    outlinePink: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    round: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button;