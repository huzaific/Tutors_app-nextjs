const Header = () => {
    return ( 
         <header>
            <div class="container">
                <nav class="navbar navbar-expand-md">
                    <a class="navbar-brand" href="/"><img src="images/logo.png" alt="" /></a>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto ml-auto">
                          <li class="nav-item active">
                            <a class="nav-link" href="#" data-toggle="modal" data-target="#grouping-service-modal">과외찾기</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" data-toggle="modal" data-target="#grouping-service-modal">학생찾기</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" data-toggle="modal" data-target="#grouping-service-modal">Q&A</a>
                          </li>
                        </ul>
                      </div>

                    <button class="extra-menu"><i class="fa fa-bars" aria-hidden="true"></i></button>
                  </nav>
            </div>
            <div class="before-login-sidebar-outer-wrap">
                <div class="before-login-sidebar-wrap">
                    <div class="before-login-sidebar">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <div class="before-login-top">
                            <h5>로그인을 해주세요</h5>
                            <ul class="signing-btn">
                                <li>
                                    <a href="/login" class="general-btn green-bg">로그인</a>
                                </li>
                                <li>
                                    <a href="/signup" class="general-btn gray-bg">회원가입</a>
                                </li>
                            </ul>
                        </div>
                        <div class="before-login-list">
                            <h6>과외</h6>
                            <ul>
                                <li><a href="#" data-toggle="modal" data-target="#grouping-service-modal">과외찾기</a></li>
                                <li><a href="#" data-toggle="modal" data-target="#grouping-service-modal">학생찾기</a></li>
                                <li><a href="#" data-toggle="modal" data-target="#grouping-service-modal">Q&A</a></li>
                            </ul>
                        </div>
                        <div class="before-login-list">
                            <h6>커뮤니티</h6>
                            <ul>
                                <li><a href="/notice-1" target="_self">공지사항</a></li>
                                <li><a href="/events" target="_self">이벤트</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </header>
     );
}
 
export default Header;
