const FindEmailAccount = () => {
    return ( 
        <div class="content">
        <section class="login-wrap email-account-wrap forget-email-wrap">
            <div class="container">
                <div class="login-content">
                    <h2>이메일 계정 찾기</h2>
                    <p>입력하신 휴대폰번호로 찾은 이메일 계정입니다.<br />
                        개인정보보호를 위해 이메일의 일부는 *로 표기됩니다.</p>
                    <div class="forget-mail">
                        <img src="images/n-icon.jpg" alt="" />
                        <span>Grouping***@naver.com | 가입일: 2020.01.01</span>
                    </div>
                    <button type="submit" onclick="location.href='/login';" class="general-btn green-bg mb-4">로그인</button>
                    <a href="reset-password.html">비밀번호 재설정</a>
                </div>
            </div>
        </section>
    </div>

     );
}
 
export default FindEmailAccount;
      