import { useAuth } from 'context/AuthContext';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';

ForgotPwForm.propTypes = {
    onHandleOnSubmit: PropTypes.func,
    onLoading: PropTypes.bool,
};

ForgotPwForm.propTypes = {
    onHandleOnSubmit: null,
    onLoading: false,
};

function ForgotPwForm(props) {
    const emailRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!onHandleOnSubmit) return;
        onHandleOnSubmit(emailRef.current.value);
    }
    return (
        <>
            <form className="form" id="login_forgot_form" onSubmit={handleSubmit}>
                <div className="form-group mb-10">
                    <input
                        className="form-control form-control-solid h-auto py-4 px-8"
                        type="text"
                        placeholder="Email"
                        name="email"
                        autoComplete="off"
                        ref={emailRef}
                    />
                </div>
                <div className="form-group d-flex flex-wrap flex-center mt-10">
                    <Link to="login">
                        <span className="btn btn-secondary font-weight-bold px-9 py-4 my-3 mx-2">
                            <i className="fad fa-long-arrow-left" /> Quay lại
                        </span>
                    </Link>
                    <button
                        disabled={loading}
                        type="submit"
                        id="login_forgot_submit"
                        className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-2"
                    >
                        Lấy mật khẩu
                    </button>
                </div>
            </form>
        </>
    );
}

export default ForgotPwForm;
