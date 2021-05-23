import TheNightOwl from 'assets/media/the-night-owl.png';
import AsideLeft from 'components/AsideLeft';
import AsideRight from 'components/AsideRight';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderMobile() {
    const [toggle, setToggle] = useState(false);
    const [menu, setMenu] = useState(false);

    const onHandleToggle = () => {
        setToggle(true);
    };

    const onHandleMenu = () => {
        setMenu(true);
    };

    return (
        <>
            <header className="header-mobile header-mobile-fixed">
                <Link to="/home">
                    <img alt="logo" src={TheNightOwl} className="logo-default max-h-30px" />
                </Link>
                <div className="d-flex align-items-center">
                    <span href="#" className="btn btn-icon btn-lg btn-borderless mb-1" onClick={onHandleToggle}>
                        <i className="fad fa-align-right fa-2x"></i>
                    </span>
                    <span href="#" className="btn btn-icon btn-lg btn-borderless mb-1" onClick={onHandleMenu}>
                        <i className="fad fa-books fa-2x"></i>
                    </span>
                </div>
            </header>

            <AsideLeft onHandleMenu={menu} />

            <div
                style={{ backgroundColor: '#f6f7f9' }}
                className={`d-block d-lg-none d-md-block header-menu-wrapper header-menu-wrapper-left ${toggle ? `header-menu-wrapper-on` : ''} `}
            >
                <div className="m-5">
                    <AsideRight />
                </div>
            </div>
            {(toggle || menu) && (
                <div
                    className="header-menu-wrapper-overlay"
                    onClick={() => {
                        setToggle(false);
                        setMenu(false);
                    }}
                ></div>
            )}
        </>
    );
}
