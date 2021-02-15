
const EnterNewPassword = () => {
    return ( 
        <div class="content">
        <section class="login-wrap enter-new-password">
            <div class="container">
                <div class="login-content">
                    <h2>비밀번호 재설정</h2>
                    <p>새로운 비밀번호를 설정해주세요.</p>
                    <form>
                        <div class="form-group">

                            <label>비밀번호 재설정</label>
                            <input type="email" class="form-control" placeholder="새로운 비밀번호를 입력해주세요" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="새로운 비밀번호를 재입력해주세요" />
                            <span>※8~16자 이내의 영문,숫자,특수문자 중 2가지 이상 포함</span>
                        </div>
                    </form>
                    <button type="submit" onclick="location.href='/login';" class="general-btn green-bg mt-3">비밀번호 변경 확인</button>
                </div>
            </div>
        </section>
    </div>
     );
}
 
export default EnterNewPassword;
