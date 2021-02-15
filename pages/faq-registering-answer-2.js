const FaqRegisteringAnswer2 = () => {
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
                    <a href="#" class="faq-card-wrap" data-toggle="modal" data-target="#faq-answer-modal">
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
                                <p>아무리 풀어도 답이 안나와서 그러는데 답좀 알려주세요!!ㅠㅠ</p>
                                <img src="images/ask-qns-img.png" alt="" />
                            </div>
                            <div class="faq-comment">
                                <p>답변이 <span>이미 등록되었습니다.</span></p>
                                <h6>답변 보기 <i class="fa fa-angle-down" aria-hidden="true"></i></h6>
                            </div>
                        </div> 
                    </a>
                    <a href="#" class="general-btn">등록 완료</a>
                </div>
            </div>
            </div>
        </section>
    </div>
     );
}
 
export default FaqRegisteringAnswer2;
      