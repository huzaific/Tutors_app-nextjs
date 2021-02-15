const MyTutoring = () => {
    return ( 
        <div class="content">
        <section class="my-tutoring teacher-profile-wrap">
            <div class="container">
                <div class="teacher-profile-content">
                    <h5>내 과외</h5>
                    <div class="teacher-profile-row">
                        <div class="teacher-profile-right">
                            <nav>
                                <ul class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <li>
                                        <a class="nav-item nav-link active" id="tutoring-application-tab" data-toggle="tab" href="#tutoring-application" role="tab" aria-controls="tutoring-application" aria-selected="true">신청중인 과외</a>
                                    </li>
                                    <li>
                                        <a class="nav-item nav-link" id="completed-tutoring-tab" data-toggle="tab" href="#completed-tutoring" role="tab" aria-controls="completed-tutoring" aria-selected="false">완료된 과외</a>
                                    </li>
                                    <li>
                                        <a class="nav-item nav-link" id="class-reviews-tab" data-toggle="tab" href="#class-reviews" role="tab" aria-controls="class-reviews" aria-selected="false">메시지</a>
                                    </li>
                                </ul>
                                <label class="search-term">
                                    <input type="text" placeholder="검색어를 입력해주세요" />
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </label>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="tutoring-application" role="tabpanel" aria-labelledby="tutoring-application-tab">
                                    <div class="row tutoring-row">
                                        <div class="col-lg-6 tutoring-col">
                                            <a href="#" class="teacter-detail-wrap" data-toggle="modal" data-target="#teacher-profile-under-review-modal">
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
                                                                    <span>[영어 | 수능영어,면접영어...</span>
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
                                            </a>
                                        </div>
                                        <div class="col-lg-6 tutoring-col">
                                            <a href="#" class="teacter-detail-wrap" data-toggle="modal" data-target="#teacher-profile-under-review-modal">
                                                <div class="teacter-more-detail-wrap">
                                                    <div class="teacter-more-detail">
                                                        <h4>기초부터 탄탄하게! 올바른 영어 스타트</h4>
                                                        <span>17만원</span>
                                                    </div>
                                                    <div class="row teacter-skills-row">
                                                        <div class="teacter-skills-col">
                                                            <ul>
                                                                <li>
                                                                    <span>과목</span>
                                                                    <span>[영어 | 수능영어,면접영어...</span>
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
                                            </a>
                                        </div>
                                        <div class="col-lg-6 tutoring-col">
                                            <a href="#" class="teacter-detail-wrap" data-toggle="modal" data-target="#teacher-profile-under-review-modal">
                                                <div class="teacter-more-detail-wrap">
                                                    <div class="teacter-more-detail">
                                                        <h4>수업 타이틀 표기 영역</h4>
                                                        <span>금액영역</span>
                                                    </div>
                                                    <div class="row teacter-skills-row">
                                                        <div class="teacter-skills-col">
                                                            <ul>
                                                                <li>
                                                                    <span>과목</span>
                                                                    <span>[영어 | 수능영어,면접영어...</span>
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
                                            </a>
                                        </div>
                                        <div class="col-lg-6 tutoring-col">
                                            <a href="#" class="teacter-detail-wrap" data-toggle="modal" data-target="#teacher-profile-under-review-modal">
                                                <div class="teacter-more-detail-wrap">
                                                    <div class="teacter-more-detail">
                                                        <h4>수업 타이틀 표기 영역</h4>
                                                        <span>금액영역</span>
                                                    </div>
                                                    <div class="row teacter-skills-row">
                                                        <div class="teacter-skills-col">
                                                            <ul>
                                                                <li>
                                                                    <span>과목</span>
                                                                    <span>[영어 | 수능영어,면접영어...</span>
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="completed-tutoring" role="tabpanel" aria-labelledby="completed-tutoring-tab">
                                    <div class="row tutoring-row">
                                        <div class="col-lg-6 tutoring-col">
                                            <a href="#" class="teacter-detail-wrap" data-toggle="modal" data-target="#teacher-profile-under-review-modal2">
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
                                                                    <span>[영어 | 수능영어,면접영어...</span>
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
                                            </a>
                                        </div>
                                        <div class="col-lg-6 tutoring-col">
                                            <a href="#" class="teacter-detail-wrap" data-toggle="modal" data-target="#teacher-profile-under-review-modal2">
                                                <div class="teacter-more-detail-wrap">
                                                    <div class="teacter-more-detail">
                                                        <h4>기초부터 탄탄하게! 올바른 영어 스타트</h4>
                                                        <span>17만원</span>
                                                    </div>
                                                    <div class="row teacter-skills-row">
                                                        <div class="teacter-skills-col">
                                                            <ul>
                                                                <li>
                                                                    <span>과목</span>
                                                                    <span>[영어 | 수능영어,면접영어...</span>
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
                                            </a>
                                        </div>
                                        <div class="col-lg-6 tutoring-col">
                                            <a href="#" class="teacter-detail-wrap" data-toggle="modal" data-target="#teacher-profile-under-review-modal2">
                                                <div class="teacter-more-detail-wrap">
                                                    <div class="teacter-more-detail">
                                                        <h4>수업 타이틀 표기 영역</h4>
                                                        <span>금액영역</span>
                                                    </div>
                                                    <div class="row teacter-skills-row">
                                                        <div class="teacter-skills-col">
                                                            <ul>
                                                                <li>
                                                                    <span>과목</span>
                                                                    <span>[영어 | 수능영어,면접영어...</span>
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
                                            </a>
                                        </div>
                                        <div class="col-lg-6 tutoring-col">
                                            <a href="#" class="teacter-detail-wrap" data-toggle="modal" data-target="#teacher-profile-under-review-modal2">
                                                <div class="teacter-more-detail-wrap">
                                                    <div class="teacter-more-detail">
                                                        <h4>수업 타이틀 표기 영역</h4>
                                                        <span>금액영역</span>
                                                    </div>
                                                    <div class="row teacter-skills-row">
                                                        <div class="teacter-skills-col">
                                                            <ul>
                                                                <li>
                                                                    <span>과목</span>
                                                                    <span>[영어 | 수능영어,면접영어...</span>
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="class-reviews" role="tabpanel" aria-labelledby="class-reviews-tab">
                                    <ul class="chat-with-teacher-wrap">
                                        <li>
                                            <a href="#" class="chat-with-teacher">
                                                <div class="chat-teacher-img-wrap online">
                                                    <div class="chat-teacher-img">
                                                        <img src="images/changing-info-img.png" alt="" />
                                                    </div>
                                                </div>
                                                <div class="chat-teacher-detail-wrap">
                                                    <div class="chat-teacher-detail">
                                                        <ul>
                                                            <li>
                                                                <h6>선생님 대학교 정보 표시 </h6>
                                                                |
                                                            </li>
                                                            <li>
                                                                <span> 지역 표시 / 교과 표시 / 담당 과목 표시</span>
                                                            </li>
                                                        </ul>
                                                        <p>메시지 일부(1줄) 표시 영역 예시) 안녕하세요. 수학/영어 전문 과외 선생님입니다...</p>
                                                    </div>
                                                    <div class="online-hours-ago">
                                                        <p>3시간 전</p>
                                                        <span>1</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="chat-dialogue-wrap">
                                                <div class="chat-dialogue">
                                                    <ul>
                                                        <li class="text-receive">
                                                            <p>안녕하세요 수학/영어 전문 과외 선생님입니다<br /> 7년동안 초등학생~N수생까지 다양하고 수많은 학생들을 가르쳐온 노하우로 학생에게 맞춤형 수업방식으로 지도합니다. 그룹과외/학원강사로도 경험이 많습니다.<br /> 과외수업만으로 공부를 잘할 수 있고 성적이 향상되지는 않습니다. 저는 평소에 공부하는 방법과 방향성까지 제시합니다. 수업때 정확하고 탄탄한 개념다지기와 문제풀이 방식을 알려주고 나중에 학생 혼자서도 공부할 수 있도록 하는것입니다.</p>
                                                            <span>20시간 전</span>
                                                        </li>
                                                        <li class="text-send">
                                                            <p>안녕하세요. 문의주셔서 감사해요^^ 보내주신 내용 잘 읽어봤습니다!! 과외 수업 받고 싶어요. 어떻게 해야하나요?</p>
                                                            <span>방금 전</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="type-your-text-here">
                                                    <input type="text" placeholder="대화의 내용을 입력해주세요" />
                                                    <button type="button" class="general-btn green-bg">메시지 보내기</button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#" class="chat-with-teacher">
                                                <div class="chat-teacher-img-wrap online">
                                                    <div class="chat-teacher-img">
                                                        <img src="images/changing-info-img.png" alt="" />
                                                    </div>
                                                </div>
                                                <div class="chat-teacher-detail-wrap">
                                                    <div class="chat-teacher-detail">
                                                        <ul>
                                                            <li>
                                                                <h6>선생님 대학교 정보 표시 </h6>
                                                                |
                                                            </li>
                                                            <li>
                                                                <span> 지역 표시 / 교과 표시 / 담당 과목 표시</span>
                                                            </li>
                                                        </ul>
                                                        <p>메시지 일부(1줄) 표시 영역 예시) 안녕하세요. 수학/영어 전문 과외 선생님입니다...</p>
                                                    </div>
                                                    <div class="online-hours-ago">
                                                        <p>3시간 전</p>
                                                        <span>1</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="chat-dialogue-wrap">
                                                <div class="chat-dialogue">
                                                    <ul>
                                                        <li class="text-receive">
                                                            <p>안녕하세요 수학/영어 전문 과외 선생님입니다<br /> 7년동안 초등학생~N수생까지 다양하고 수많은 학생들을 가르쳐온 노하우로 학생에게 맞춤형 수업방식으로 지도합니다. 그룹과외/학원강사로도 경험이 많습니다.<br /> 과외수업만으로 공부를 잘할 수 있고 성적이 향상되지는 않습니다. 저는 평소에 공부하는 방법과 방향성까지 제시합니다. 수업때 정확하고 탄탄한 개념다지기와 문제풀이 방식을 알려주고 나중에 학생 혼자서도 공부할 수 있도록 하는것입니다.</p>
                                                            <span>20시간 전</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="type-your-text-here">
                                                    <input type="text" placeholder="대화의 내용을 입력해주세요" />
                                                    <button type="button" class="general-btn green-bg">메시지 보내기</button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#" class="chat-with-teacher">
                                                <div class="chat-teacher-img-wrap online">
                                                    <div class="chat-teacher-img">
                                                        <img src="images/changing-info-img.png" alt="" />
                                                    </div>
                                                </div>
                                                <div class="chat-teacher-detail-wrap">
                                                    <div class="chat-teacher-detail">
                                                        <ul>
                                                            <li>
                                                                <h6>선생님 대학교 정보 표시 </h6>
                                                                |
                                                            </li>
                                                            <li>
                                                                <span> 지역 표시 / 교과 표시 / 담당 과목 표시</span>
                                                            </li>
                                                        </ul>
                                                        <p>메시지 일부(1줄) 표시 영역 예시) 안녕하세요. 수학/영어 전문 과외 선생님입니다...</p>
                                                    </div>
                                                    <div class="online-hours-ago">
                                                        <p>3시간 전</p>
                                                        <span>1</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="chat-dialogue-wrap">
                                                <div class="chat-dialogue">
                                                </div>
                                                <div class="type-your-text-here">
                                                    <input type="text" placeholder="대화의 내용을 입력해주세요" />
                                                    <button type="button" class="general-btn green-bg">메시지 보내기</button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
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
 
export default MyTutoring;
      