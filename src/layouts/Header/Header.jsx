import './Header.scss'
import Logo from "@/components/Logo/Logo";
import classNames from "classnames";
import Button from "@/components/Button";

const Header = (props) => {
    const {url} = props;
    const menuItems = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Movies & Show',
            href: '/movies',
        },
        {
            label: 'Support',
            href: '/support',
        },
        {
            label: 'Subscriptions',
            href: '/subscriptions',
        }
    ];
    return (
        <header className="header">
            <div className="header__inner container">
                <Logo className={"header__logo"} loading={'eager'} />
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        {menuItems.map((item, index) => (
                            <li className="header__menu-item" key={index}>
                                <a
                                    className={classNames('header__menu-link', {
                                        'is-active': url === item.href,
                                    })}
                                    href={item.href}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__actions">
                    <Button
                        className={"header__button"}
                        label={"Search"}
                        isLabelHidden
                        iconName="search"
                        mode={"transparent"}
                    />
                    <Button
                        className={"header__button"}
                        label={"Notifications"}
                        isLabelHidden
                        iconName="notification"
                        mode={"transparent"}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;