import { useRouter } from 'next/router'
import { STRAPI_HOST_URL } from '../config/strapiConfig';

const Login = () => {

    const router = useRouter()

    return (
<div class="content">
            <section class="login-wrap">
                <div class="container">
                    <div class="login-content">
                        <h2>로그인</h2>
                        <form>
                            <div class="form-group">
                              <label>이메일</label>
                              <input type="email" class="form-control" placeholder="이메일 계정을 입력해주세요" />
                            </div>
                            <div class="form-group">
                              <label >비밀번호</label>
                              <input type="password" class="form-control" placeholder="비밀번호를 입력해주세요" />
                            </div>
                        </form>
                        <button type="submit" onclick="location.href='index-student-login-sidebar.html';" class="general-btn mt-3">로그인</button>
                        <h4>간편하게 그루핑 시작하기</h4>
                        <ul class="continous-with">
                            <li><button onClick={() => router.push(`${STRAPI_HOST_URL}/connect/kakao`)} type="button" class="general-btn yellow-bg"><img src="images/chat-icon.jpg" alt="" /> Kakao로 시작하기</button></li>
                            <li><button onClick={() => router.push(`${STRAPI_HOST_URL}/connect/naver`)} type="button" class="general-btn dark-green-bg"><img src="images/n-icon.png" alt="" />Naver로 시작하기</button></li>
                        </ul>
                        <ul class="login-btn">
                            <li><a href="/find-email-account">이메일 계정 찾기</a>|</li>
                            <li><a href="/reset-password">비밀번호 재설정</a>|</li>
                            <li><a href="/signup">학생·학부모 회원가입</a>|</li>
                            <li><a href="/signup-teacher">선생님 회원가입</a></li>
                        </ul>
                        <p>회원가입 또는 로그인을 진행할 경우, </p>
                        <p class="text-center lasttext2-contact">그루핑의 <a href="terms-of-service.html">이용약관</a> 및 <a href="privacy-policy.html">개인정보 보호정책</a>에 동의할 것으로 간주됩니다.</p>
                    </div>
                </div>
            </section>
        </div>
      
      );
}
 
export default Login;
        