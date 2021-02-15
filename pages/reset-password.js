const ResetPassword = () => {
    return ( 
        <div class="content">
        <section class="login-wrap email-account-wrap">
            <div class="container">
                <div class="login-content">
                    <h2>비밀번호 재설정</h2>
                    <p>회원정보에 등록한 휴대폰번호를 입력해주세요.</p>
                    <form>
                        <div class="form-group">
                          <input type="email" class="form-control" placeholder="휴대폰 번호를 입력해주세요" />
                          <button type="button" class="general-btn">인증번호 받기</button>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="인증번호를 입력해주세요" />
                          <button type="button" class="general-btn">인증하기</button>
                        </div>
                    </form>
                    <button type="submit" onclick="location.href='enter-new-password.html';" class="general-btn green-bg mt-3">다음</button>
                </div>
            </div>
        </section>
    </div>
 
     );
}
 
export default ResetPassword;
       