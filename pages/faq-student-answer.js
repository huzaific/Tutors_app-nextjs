const FaqStudentAnswer = () => {
    return ( 
        <div class="content">
        <section class="faq-wrap student-answer-wrap">
            <div class="container">
                <div class="ask-question student-answer">
                    <h5>Q&A</h5>
                    <div class="ask-question-content">
                        <p>우리지역/우리학교 학생들을 가르치는 과외 선생님들이 직접 답변해주실거에요.</p>
                    </div>
                </div>
                <div class="point-held-wrap">
                    <div class="point-held">
                        <h6><span>P</span>보유포인트</h6>
                        <p>6,000<span>Point</span></p>
                    </div>
                    <div class="student-premium-member">
                        <ul>
                            <li><span>[수학천재]</span>학생은 <b>프리미엄</b> 회원입니다.</li>
                            <li>남은 기간 : 21일(2020-01-01 까지)</li>
                        </ul>
                        <a href="/point-recharge" class="general-btn green-bg">포인트 충전</a>
                    </div>
                </div>
                <div class="faq-search-from-wrap">
                    <form class="faq-search-from">
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
                            <div class="form-group col-md-12">
                                <textarea class="form-control" placeholder="질문내용 입력해주세요"></textarea>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="" class="choose-file">
                                    <input type="file" class="form-control" value="파일첨부" />
                                    파일첨부
                                </label>
                            </div>
                        </div>
                        <div class="form-btn-wrap">
                            <button type="button" onclick="location.href='/faq';" class="general-btn">목록</button>
                            <button type="button" onclick="location.href='/faq';" class="general-btn green-bg">등록</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>

     );
}
 
export default FaqStudentAnswer;
     