const FindEmailAccount = () => {
    return ( 
        <div class="content">
        <section class="login-wrap email-account-wrap">
            <div class="container">
                <div class="login-content">
                    <h2>이메일 계정 찾기</h2>
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
                    <button type="submit" onclick="location.href='/forget-email-account';" class="general-btn green-bg mt-3">확인</button>
                </div>
            </div>
        </section>
    </div>
   
     );
}
 
export default FindEmailAccount;
       