import React from 'react'
import '../index.css'

export default function SignUp() {
  return (
    <div className="login_body">
        <div className='amuse_login_title'>
            <img className='amuse_logo' src='http://cdn.amusetravel.com/assets/headers/logo.png' alt='어뮤즈 이미지' />
            <h2 className='amuse_title_top'>모두가 즐거운 여행</h2>
            <h2 className='amuse_title_bottom'>어뮤즈 트레블</h2>
        </div>
        <div className="input">
            <div className="user_name">
                <input 
                className='user_name_input'
                placeholder='Uername'
                type='text' />
            </div>
            <div className="email">
                <input 
                className='email_input'
                placeholder='Email'
                type='text' />
            </div>
            <div className="password">
                <input 
                className='password_input'
                placeholder='Password'
                type='password' />
            </div>
        </div>
        <div className="v_box">
        <div className="login_btn_box">
            <button className='login_btn'>
                <i class="fa-solid fa-door-open"></i>회원가입
            </button>
        </div>
        <div className="login_function_box">
            <div className='signup_box'>
                <span>이미 가입하셨나요?</span>
                <span className='signup_link'>로그인</span>
            </div>
        </div>
        </div>
    </div>
  )
}