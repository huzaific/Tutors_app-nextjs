const TeacherProfile = () => {
    return ( 
        <div class="content">
        <section class="teacher-profile-wrap">
            <div class="container">
                <div class="teacher-profile-content">
                    <h5>프로필</h5>
                    <div class="teacher-profile-row">
                        <div class="teacher-profile-left">
                            <div class="teacher-profile online">
                                <div class="teacher-profile-img">
                                    <img src="images/changing-info-img.png" alt="" />
                                </div>
                                <h6>Kimdowon의 프로필</h6>
                                <ul>
                                    <li>대전 서구, 대전 중구</li>
                                    <li>고등, 성인</li>
                                    <li>전문 | 영어 (수능영어, 토익, S..)</li>
                                </ul>
                            </div>
                            <a href="#" data-toggle="modal" data-target="#report-modal">신고하기</a>
                        </div>
                        <div class="teacher-profile-right">
                            <nav>
                                <ul class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <li>
                                        <a class="nav-item nav-link active" id="teacher-profile-tab" data-toggle="tab" href="#teacher-profile" role="tab" aria-controls="teacher-profile" aria-selected="true">선생님 프로필</a>
                                    </li>
                                    <li>
                                        <a class="nav-item nav-link" id="tutoring-tab" data-toggle="tab" href="#tutoring" role="tab" aria-controls="tutoring" aria-selected="false">모집중인 과외</a>
                                    </li>
                                    <li>
                                        <a class="nav-item nav-link" id="closed-tutoring-tab" data-toggle="tab" href="#closed-tutoring" role="tab" aria-controls="closed-tutoring" aria-selected="false">마감된 과외</a>
                                    </li>
                                    <li>
                                        <a class="nav-item nav-link" id="class-reviews-tab" data-toggle="tab" href="#class-reviews" role="tab" aria-controls="class-reviews" aria-selected="false">수업 후기 / 질문</a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="teacher-profile" role="tabpanel" aria-labelledby="teacher-profile-tab">
                                    <ul class="teacher-intro-wrap">
                                        <li>
                                            <h6>선생님 소개</h6>
                                            <p>안녕하세요^^ 바이올린을 할때, 그리고 가르칠때 가장 행복한 바이올린 전공생입니다!<br />
                                                어릴때부터 대회를 나갈때마다 상을 자주 타오면서도 바이올린을 하는게 너무 즐거워서 전공을 결심하게 되었는데요 ㅎㅎ<br />
                                                열심히 해서 대학합격하구 입학하자마자 오브리와 오케스트라, 바이올린 레슨을 또다시 즐겁게... +더보기</p>
                                        </li>
                                        <li>
                                            <h6>선생님 직업</h6>
                                            <p>재/휴학생</p>
                                        </li>
                                        <li>
                                            <h6>선생님 학력</h6>
                                            <p>한국대학교 영어영문학과</p>
                                        </li>
                                        <li>
                                            <h6>선생님 경력</h6>
                                            <p>3년 이상</p>
                                        </li>
                                        <li>
                                            <h6>학생증 / 졸업증명서</h6>
                                            <p>[선생님 닉네임] 회원님은 그루핑에 신분이 인증되었습니다.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="tutoring" role="tabpanel" aria-labelledby="tutoring-tab">
                                  <ul class="tutoring-wrap">
                                    <li class="teacter-detail-wrap"  data-toggle="modal" data-target="#teacher-profile-modal" >
                                        <div class="teacter-more-detail-wrap">
                                            <div class="teacter-more-detail">
                                                <h4>수능영어 쉽고 빠르게, 완벽 독해 영어수업</h4>
                                                <span>30만원</span>
                                            </div>
                                            <div class="row teacter-skills-row">
                                                <div class="teacter-skills-col">
                                                    <ul>
                                                        <li>
                                                            <span>과목</span>
                                                            <span>영어 | 고교 교과 영어, 수능 전용 영어, 면접영어, SLT...</span>
                                                        </li>
                                                        <li>
                                                            <span>교과</span>
                                                            <span>고등 1~3학년 | 성인</span>
                                                        </li>
                                                        <li>
                                                            <span>지역</span>
                                                            <span>충남, 대전 전지역</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="teacter-skills-col">
                                                    <ul>
                                                        <li>
                                                            <span>모집기간</span>
                                                            <span>20.01.01 ~ 2020.02.01</span>
                                                        </li>
                                                        <li>
                                                            <span>과외기간</span>
                                                            <span>20.02.02 ~ 2020.03.01(8회)</span>
                                                        </li>
                                                        <li>
                                                            <span>신청/모집</span>
                                                            <span>2 / 5</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="teacter-detail-wrap">
                                        <div class="teacter-more-detail-wrap" data-toggle="modal" data-target="#teacher-profile-modal" >
                                            <div class="teacter-more-detail" >
                                                <h4>수능영어 쉽고 빠르게, 완벽 독해 영어수업</h4>
                                                <span>30만원</span>
                                            </div>
                                            <div class="row teacter-skills-row">
                                                <div class="teacter-skills-col">
                                                    <ul>
                                                        <li>
                                                            <span>과목</span>
                                                            <span>영어 | 고교 교과 영어, 수능 전용 영어, 면접영어, SLT...</span>
                                                        </li>
                                                        <li>
                                                            <span>교과</span>
                                                            <span>고등 1~3학년 | 성인</span>
                                                        </li>
                                                        <li>
                                                            <span>지역</span>
                                                            <span>충남, 대전 전지역</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="teacter-skills-col">
                                                    <ul>
                                                        <li>
                                                            <span>모집기간</span>
                                                            <span>20.01.01 ~ 2020.02.01</span>
                                                        </li>
                                                        <li>
                                                            <span>과외기간</span>
                                                            <span>20.02.02 ~ 2020.03.01(8회)</span>
                                                        </li>
                                                        <li>
                                                            <span>신청/모집</span>
                                                            <span>2 / 5</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="teacter-detail-wrap">
                                        <div class="teacter-more-detail-wrap" data-toggle="modal" data-target="#teacher-profile-modal">
                                            <div class="teacter-more-detail"  >
                                                <h4>수능영어 쉽고 빠르게, 완벽 독해 영어수업</h4>
                                                <span>30만원</span>
                                            </div>
                                            <div class="row teacter-skills-row">
                                                <div class="teacter-skills-col">
                                                    <ul>
                                                        <li>
                                                            <span>과목</span>
                                                            <span>영어 | 고교 교과 영어, 수능 전용 영어, 면접영어, SLT...</span>
                                                        </li>
                                                        <li>
                                                            <span>교과</span>
                                                            <span>고등 1~3학년 | 성인</span>
                                                        </li>
                                                        <li>
                                                            <span>지역</span>
                                                            <span>충남, 대전 전지역</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="teacter-skills-col">
                                                    <ul>
                                                        <li>
                                                            <span>모집기간</span>
                                                            <span>20.01.01 ~ 2020.02.01</span>
                                                        </li>
                                                        <li>
                                                            <span>과외기간</span>
                                                            <span>20.02.02 ~ 2020.03.01(8회)</span>
                                                        </li>
                                                        <li>
                                                            <span>신청/모집</span>
                                                            <span>2 / 5</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                  </ul>
                                </div>
                                <div class="tab-pane fade" id="closed-tutoring" role="tabpanel" aria-labelledby="closed-tutoring-tab">
                                    <ul class="tutoring-wrap">
                                        <li class="teacter-detail-wrap">
                                            <div class="teacter-more-detail-wrap" data-toggle="modal" data-target="#teacher-profile-under-review-modal">
                                                <div class="teacter-more-detail">
                                                    <h4>수능영어 쉽고 빠르게, 완벽 독해 영어수업</h4>
                                                    <span>30만원</span>
                                                </div>
                                                <div class="row teacter-skills-row">
                                                    <div class="teacter-skills-col">
                                                        <ul>
                                                            <li>
                                                                <span>과목</span>
                                                                <span>영어 | 고교 교과 영어, 수능 전용 영어, 면접영어, SLT...</span>
                                                            </li>
                                                            <li>
                                                                <span>교과</span>
                                                                <span>고등 1~3학년 | 성인</span>
                                                            </li>
                                                            <li>
                                                                <span>지역</span>
                                                                <span>충남, 대전 전지역</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="teacter-skills-col">
                                                        <ul>
                                                            <li>
                                                                <span>모집기간</span>
                                                                <span>20.01.01 ~ 2020.02.01</span>
                                                            </li>
                                                            <li>
                                                                <span>과외기간</span>
                                                                <span>20.02.02 ~ 2020.03.01(8회)</span>
                                                            </li>
                                                            <li>
                                                                <span>신청/모집</span>
                                                                <span>2 / 5</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="teacter-detail-wrap">
                                            <div class="teacter-more-detail-wrap" data-toggle="modal" data-target="#teacher-profile-under-review-modal">

                                                <div class="teacter-more-detail">
                                                    <h4>수능영어 쉽고 빠르게, 완벽 독해 영어수업</h4>
                                                    <span>30만원</span>
                                                </div>
                                                <div class="row teacter-skills-row">
                                                    <div class="teacter-skills-col">
                                                        <ul>
                                                            <li>
                                                                <span>과목</span>
                                                                <span>영어 | 고교 교과 영어, 수능 전용 영어, 면접영어, SLT...</span>
                                                            </li>
                                                            <li>
                                                                <span>교과</span>
                                                                <span>고등 1~3학년 | 성인</span>
                                                            </li>
                                                            <li>
                                                                <span>지역</span>
                                                                <span>충남, 대전 전지역</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="teacter-skills-col">
                                                        <ul>
                                                            <li>
                                                                <span>모집기간</span>
                                                                <span>20.01.01 ~ 2020.02.01</span>
                                                            </li>
                                                            <li>
                                                                <span>과외기간</span>
                                                                <span>20.02.02 ~ 2020.03.01(8회)</span>
                                                            </li>
                                                            <li>
                                                                <span>신청/모집</span>
                                                                <span>2 / 5</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="teacter-detail-wrap">
                                            <div class="teacter-more-detail-wrap" data-toggle="modal" data-target="#teacher-profile-under-review-modal">
                                                <div class="teacter-more-detail">
                                                    <h4>수능영어 쉽고 빠르게, 완벽 독해 영어수업</h4>
                                                    <span>30만원</span>
                                                </div>
                                                <div class="row teacter-skills-row">
                                                    <div class="teacter-skills-col">
                                                        <ul>
                                                            <li>
                                                                <span>과목</span>
                                                                <span>영어 | 고교 교과 영어, 수능 전용 영어, 면접영어, SLT...</span>
                                                            </li>
                                                            <li>
                                                                <span>교과</span>
                                                                <span>고등 1~3학년 | 성인</span>
                                                            </li>
                                                            <li>
                                                                <span>지역</span>
                                                                <span>충남, 대전 전지역</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="teacter-skills-col">
                                                        <ul>
                                                            <li>
                                                                <span>모집기간</span>
                                                                <span>20.01.01 ~ 2020.02.01</span>
                                                            </li>
                                                            <li>
                                                                <span>과외기간</span>
                                                                <span>20.02.02 ~ 2020.03.01(8회)</span>
                                                            </li>
                                                            <li>
                                                                <span>신청/모집</span>
                                                                <span>2 / 5</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="class-reviews" role="tabpanel" aria-labelledby="class-reviews-tab">
                                    <div class="class-reviews-wrap">
                                        <form class="answer-here">
                                            <div class="form-group">
                                                <textarea class="form-control" rows="3" placeholder="수업 후기 또는 질문을 입력해주세요 예시) 선생님 수업 정말 잘 들었습니다. 너무 잘 가르쳐주셔서 감사합니다."></textarea>
                                            </div>
                                            <button type="submit" class="general-btn green-bg">답변작성</button>
                                        </form>
                                        <ul class="student-comment-wrap">
                                            <li>
                                                <div class="student-img-thumbnail">
                                                    <img src="images/comment-student-img.png" alt="" />
                                                </div>
                                                <div class="student-comment">
                                                    <h6>학생 닉네임 표시</h6>
                                                    <div class="student-info">
                                                        <span>학생 정보(학년) 표시 | 지역 표시</span><span>2시간 전</span>
                                                    </div>
                                                    <p>수업후기/질문이 표시되는 부분</p>
                                                    <span class="comment">답글 2</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="student-img-thumbnail">
                                                    <img src="images/comment-student-img.png" alt="" />
                                                </div>
                                                <div class="student-comment">
                                                    <h6>고쓰리수험생마더</h6>
                                                    <div class="student-info">
                                                        <span>고등학교 3학년 | 대전 서구 / 영어</span><span>2020-11-01</span>
                                                    </div>
                                                    <p>선생님 정말로 감사합니다! 딸아이가 유독 영어만 약해서 고민하다가 수업진행했는데 이번 성적이 많이 올랐어요ㅜ 조금 더 빨리 선생님을 알았더라면 1학년 때부터 맡겼었을 껀데.... 정말 감사드리고 남은 수업도 잘 부탁드릴께요!!</p>
                                                    <span class="comment">답글 1</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="student-img-thumbnail">
                                                    <img src="images/comment-student-img.png" alt="" />
                                                </div>
                                                <div class="student-comment">
                                                    <h6>고쓰리수험생마더</h6>
                                                    <div class="student-info">
                                                        <span>고등학교 3학년 | 대전 서구 / 영어</span><span>2020-11-01</span>
                                                    </div>
                                                    <p>선생님 정말로 감사합니다! 딸아이가 유독 영어만 약해서 고민하다가 수업진행했는데 이번 성적이 많이 올랐어요ㅜ 조금 더 빨리 선생님을 알았더라면 1학년 때부터 맡겼었을 껀데.... 정말 감사드리고 남은 수업도 잘 부탁드릴께요!!</p>
                                                    <span class="comment">답글 1</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
 
     );
}
 
export default TeacherProfile;
       