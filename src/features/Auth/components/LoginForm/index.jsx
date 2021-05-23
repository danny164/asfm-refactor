import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

LoginForm.propTypes = {
    onHandleSubmit: PropTypes.func,
    onLoading: PropTypes.bool,
};
LoginForm.defaultProps = {
    onHandleSubmit: null,
    onLoading: false,
};

function LoginForm(props) {
    const { onHandleSubmit, onLoading } = props;

    const schema = yup.object().shape({
        email: yup.string().email('Email không hợp lệ'),
        password: yup.string().min(6, 'Mật khẩu tối thiểu phải ${min} kí tự'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const { enqueueSnackbar } = useSnackbar();

    const checkRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const checkingEmail = `form-control h-auto form-control-solid py-4 px-8 ${errors.email ? 'is-invalid' : ''}`;
    const checkingPw = `form-control h-auto form-control-solid py-4 px-8 ${errors.password ? 'is-invalid' : ''}`;

    const onSubmit = async (e) => {
        if (emailRef.current.value === '' || passwordRef.current.value === '') {
            return enqueueSnackbar('Đăng nhập không thành công !', { variant: 'error' });
        }

        if (!onHandleSubmit) return;

        onHandleSubmit(emailRef.current.value, passwordRef.current.value);
    };

    const isRemember = (e) => {
        if (e.target.checked === true) {
            localStorage.setItem('check', e.target.checked);
            localStorage.setItem('username', emailRef.current.value);
            localStorage.setItem('password', passwordRef.current.value);
        } else {
            localStorage.removeItem('check');
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
    };

    return (
        <>
            <form className="form" id="login_signin_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-5">
                    <input
                        className={checkingEmail}
                        type="text"
                        placeholder="Email"
                        defaultValue={localStorage.getItem('username')}
                        {...register('email')}
                        autoComplete="off"
                        ref={emailRef}
                    />
                </div>
                <p className="text-chartjs">{errors.email?.message}</p>
                <div className="form-group mb-5">
                    <input
                        className={checkingPw}
                        type="password"
                        placeholder="Mật khẩu"
                        defaultValue={localStorage.getItem('password')}
                        {...register('password')}
                        ref={passwordRef}
                    />
                </div>
                <p className="text-chartjs">{errors.password?.message}</p>
                <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
                    <div className="checkbox-inline">
                        <label className="checkbox m-0 text-muted">
                            <input type="checkbox" defaultChecked={localStorage.getItem('check')} ref={checkRef} onClick={isRemember} />
                            <span />
                            Ghi nhớ đăng nhập
                        </label>
                    </div>
                    <Link to="forgot-pw" id="login_forgot" className="text-muted text-hover-primary">
                        Quên mật khẩu?
                    </Link>
                </div>
                <button disabled={onLoading} type="submit" id="login_signin_submit" className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4">
                    Đăng nhập
                </button>
            </form>
        </>
    );
}

export default LoginForm;
