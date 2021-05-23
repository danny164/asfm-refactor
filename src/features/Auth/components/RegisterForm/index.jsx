import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import InputMask from 'react-input-mask';

RegisterForm.propTypes = {
    onHandleSubmit: PropTypes.func,
    onLoading: PropTypes.bool,
};
RegisterForm.defaultProps = {
    onHandleSubmit: null,
    onLoading: false,
};

function RegisterForm(props) {
    const { onHandleSubmit, onLoading } = props;

    const { enqueueSnackbar } = useSnackbar();

    const [license, setLicense] = useState(false);

    const schema = yup.object().shape({
        fullname: yup.string().required('Vui lòng điền họ tên').max(50, 'Vượt quá ${max} kí tự được cho phép').min(5, 'Tối thiểu ${min} kí tự'),
        phone: yup
            .string()
            .matches(/^[0-9\s]+$/, 'Định dạng không hợp lệ')
            .required('Vui lòng điền số điện thoại khách hàng'),
        email: yup
            .string()
            .email('Email không hợp lệ')
            .matches(/^[a-z|A-Z|0-9|.@]+$/, 'Không chứa các kí tự đặc biệt')
            .required('Bạn chưa nhập địa chỉ email'),
        password: yup.string().min(6, 'Mật khẩu tối thiểu phải ${min} kí tự').required('Bạn chưa nhập mật khẩu'),
        rePassword: yup.string().oneOf([yup.ref('password'), null], 'Mật khẩu nhập lại không khớp'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const emailRef = useRef();
    const passwordRef = useRef();
    const fullNameRef = useRef();
    const phoneRef = useRef();

    const checkingFullname = `form-control h-auto form-control-solid py-4 px-8 ${errors.fullname ? 'is-invalid' : ''}`;
    const checkingPhone = `form-control h-auto form-control-solid py-4 px-8 ${errors.phone ? 'is-invalid' : ''}`;
    const checkingEmail = `form-control h-auto form-control-solid py-4 px-8 ${errors.email ? 'is-invalid' : ''}`;
    const checkingPw = `form-control h-auto form-control-solid py-4 px-8 ${errors.password ? 'is-invalid' : ''}`;
    const checkingRePw = `form-control h-auto form-control-solid py-4 px-8 ${errors.rePassword ? 'is-invalid' : ''}`;

    const onSubmit = async (e) => {
        if (license === false) {
            enqueueSnackbar('Bạn phải đồng ý với các điều khoản !', { variant: 'error' });
            return;
        }

        if (!onHandleSubmit) return;
        onHandleSubmit(emailRef.current.value, passwordRef.current.value, fullNameRef.current.value, phoneRef.current.value);
    };

    const handleLicense = (e) => {
        if (e.target.checked === true) {
            setLicense(true);
        } else {
            setLicense(false);
        }
    };
    return (
        <>
            <form className="form" id="login_signup_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-5">
                    <input className={checkingFullname} type="text" placeholder="Họ và Tên" {...register('fullname')} ref={fullNameRef} />
                </div>
                <p className="text-chartjs">{errors.fullname?.message}</p>

                <div className="form-group mb-5">
                    <InputMask
                        mask="9999 999 999"
                        className={checkingPhone}
                        type="text"
                        placeholder="Số điện thoại"
                        {...register('phone')}
                        ref={phoneRef}
                    />
                </div>
                <p className="text-chartjs">{errors.phone?.message}</p>

                <div className="form-group mb-5">
                    <input className={checkingEmail} type="text" placeholder="Email" {...register('email')} autoComplete="off" ref={emailRef} />
                </div>
                <p className="text-chartjs">{errors.email?.message}</p>

                <div className="form-group mb-5">
                    <input className={checkingPw} type="password" placeholder="Mật khẩu" {...register('password')} ref={passwordRef} />
                </div>
                <p className="text-chartjs">{errors.password?.message}</p>

                <div className="form-group mb-5">
                    <input className={checkingRePw} type="password" placeholder="Nhập lại mật khẩu" {...register('rePassword')} />
                </div>
                <p className="text-chartjs">{errors.rePassword?.message}</p>

                <div className="form-group mb-5 text-left">
                    <div className="checkbox-inline">
                        <label className="checkbox m-0">
                            <input type="checkbox" name="agree" onClick={handleLicense} />
                            <span />
                            Tôi đồng ý với các{' '}
                            <Link to="#" className="ml-1">
                                điều khoản và quy định
                            </Link>
                            .
                        </label>
                    </div>
                    <div className="form-text text-muted text-center" />
                </div>
                <div className="form-group d-flex flex-wrap flex-center mt-10">
                    <Link to="/login">
                        <span className="btn btn-secondary font-weight-bold px-9 py-4 my-3 mx-2">
                            <i className="fad fa-long-arrow-left" /> Quay lại
                        </span>
                    </Link>
                    <button
                        disabled={onLoading}
                        type="submit"
                        id="login_signup_submit"
                        className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-2"
                    >
                        Đăng ký
                    </button>
                </div>
            </form>
        </>
    );
}

export default RegisterForm;
