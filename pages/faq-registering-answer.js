const FaqRegisteringAnswer = () => {
    return ( 
        <div class="content">
        <section class="faq-wrap faq-registering-answer">
            <div class="container">
                <div class="ask-question">
                    <h5>Q&A</h5>
                    <div class="ask-question-content">
                        <p>선생님은 1개의 질문에 1개의 답변만 등록가능합니다.<br /> 답변등록 시 <span>1,000Point</span> 충전</p>
                    </div>
                </div>
                <div class="faq-card-outer-wrap">
                    <div class="faq-card-wrap">
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
                            <div class="faq-comment">
                                  <p>답변<span> 이 아직 등록되지 않았습니다.</span></p>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="general-btn green-bg" data-toggle="modal" data-target="#answer-info-modal">답변 등록</a>

                    <div class="faq-card-wrap">
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
                                <p>답변이<span> 이미 등록되었습니다.</span></p>
                                <h6 style="cursor: pointer;" data-toggle="modal" data-target="#faq-answer-modal">답변 보기 <i class="fa fa-angle-down" aria-hidden="true"></i></h6>
                          </div>
                      </div>
                </div>
                <a style="cursor: default;" class="general-btn">등록 완료</a>
            </div>
            </div>
        </section>
    </div>

     );
}
 
export default FaqRegisteringAnswer;
       