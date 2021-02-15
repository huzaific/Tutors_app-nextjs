const Faq = () => {
    return ( 
        <div class="content">
        <section class="faq-wrap">
            <div class="container">
                <div class="ask-question">
                    <h5>Q&A</h5>
                    <div class="ask-question-content">
                        <p>우리지역/우리학교 학생들을 가르치는 과외 선생님들이 직접 답변해주실거에요.</p>
                        <a href="/faq-student-answer" class="general-btn green-bg">질문하기</a>
                    </div>
                </div>
                <div class="faq-search-from-wrap">
                    <form class="faq-search-from">
                        <div class="form-group seacrh-wrap">
                            <input type="text" class="form-control" placeholder="검색어를 입력하세요" />
                            <button class="general-btn">검색</button>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                              <a href="#" data-toggle="modal" data-target="#region-selection-modal">
                                  지역 선택
                              </a>
                          </div>
                          <div class="form-group col-md-6">
                              <a href="#" data-toggle="modal" data-target="#school-selection-modal">
                                  학교 선택
                              </a>
                          </div>
                          <div class="form-group col-md-6">
                              <a href="#" data-toggle="modal" data-target="#course-selection-modal">
                                  교과 선택
                              </a>
                          </div>
                          <div class="form-group col-md-6">
                              <a href="#" data-toggle="modal" data-target="#subject-selection-modal">
                                  과목 선택
                              </a>
                          </div>
                        </div>
                    </form>
                    <ul class="search-select-option black-bg">
                        <li><a href="#">대전광역시 서구<span>×</span></a></li>
                        <li><a href="#">대전초등학교<span>×</span></a></li>
                        <li><a href="#">중등 3학년<span>×</span></a></li>
                    </ul>
                </div>
                <div class="faq-card-wrap mb-3">
                    <div class="faq-card-top">
                        <span>대전 전지역</span> | <span>중3 수학</span> . <span>대전시립중학교</span>
                    </div>
                    <div class="faq-card-content">
                        <div class="faq-student-detail-wrap">
                            <img src="images/comment-student-img.png" alt="" />
                            <div class="faq-student-detail">
                                <h6>수학천재가되는길</h6>
                                <p>대전 서구 / 중학생 중3</p>
                            </div>
                        </div>
                        <div class="faq-answer-img">
                            <img src="images/ask-qns-img.png" alt="" />
                            <div class="faq-answer-detail">
                              사진 문제의 답이 궁금합니다!
                            </div>
                        </div>
                        <div class="faq-comment">
                            <a href="#" data-toggle="modal" data-target="#faq-answer-modal">답변 완료</a>
                        </div>
                    </div>
                </div>
                <div class="faq-card-wrap mb-3">
                    <div class="faq-card-top">
                        <span>대전 전지역</span> | <span>중3 수학</span> . <span>대전시립중학교</span>
                    </div>
                    <div class="faq-card-content">
                        <div class="faq-student-detail-wrap">
                            <img src="images/comment-student-img.png" alt="" />
                            <div class="faq-student-detail">
                                <h6>수학천재가되는길</h6>
                                <p>대전 서구 / 중학생 중3</p>
                            </div>
                        </div>
                        <div class="faq-answer-img">
                            <img src="images/ask-qns-img.png" alt="" />
                            <div class="faq-answer-detail">
                              사진 문제의 답이 궁금합니다!<br/>
                              어떻게 풀어야 하나요?<br/>
                              빨리 알려주세요!!ㅠㅠㅠ<br/>
                              사진 문제의 답이 궁금합니다!<br/>
                              어떻게 풀어야 하나요?<br/>
                              빨리 알려주세요!!ㅠㅠㅠ<br/>
                              사진 문제의 답이 궁금합니다!<br/>
                              어떻게 풀어야 하나요?<br/>
                              빨리 알려주세요!!ㅠㅠㅠ<br/>
                              사진 문제의 답이 궁금합니다!<br/>
                              어떻게 풀어야 하나요?<br/>
                              빨리 알려주세요!!ㅠㅠㅠ<br/>
                              사진 문제의 답이 궁금합니다!<br/>
                              어떻게 풀어야 하나요?<br/>
                              빨리 알려주세요!!ㅠㅠㅠ<br/>
                            </div>
                        </div>
                        <div class="faq-no-comment">
                            <span>답변대기중</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
 
     );
}
 
export default Faq;
       