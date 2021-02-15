const GiftCoupons = () => {
    return ( 
        <div class="content">
        <section class="faq-wrap gift-coupons-wrap purchasing-point-voucher-wrap">
            <div class="container">
                <div class="ask-question">
                    <h5>프리미엄 이용권 선물하기</h5>
                </div>
                <div class="point-held-wrap">
                    <div class="point-held">
                        <h6><span>P</span>보유포인트</h6>
                        <p>6,000<span>Point</span></p>
                    </div>
                </div>
                <a href="#" class="purchase-pass-btn general-btn green-bg">이용권 선물하기</a>
                <div class="premium-voucher-purchase-wrap">
                    <div class="premium-voucher-purchase">
                        <h3>프리미엄 이용권 구매 혜택</h3>
                        <div class="premium-teacher-list-wrap">
                            <div class="premium-teacher-list">
                                <div class="premium-package-wrap">
                                    <h2>10,000</h2>
                                    <div class="time-limt-point">
                                        <h4>Point</h4>
                                        <span>1개월 /30일</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>- 질문게시판 1개월(30일) 무제한 이용권</li>
                                    <li>- 화상과외 광고 프리패스</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <form action="">
                            <div class="form-row">
                                <label for="">선물받을 학생 ID검색</label>
                                <div class="form-group col-sm-8">
                                    <input type="text" class="form-control" placeholder="휴대폰 번호를 입력해주세요" />
                                </div>
                                <div class="form-group col-sm-4">
                                    <button type="button" class="general-btn">인증번호 받기</button>
                                </div>
                                <span>수학천재가되는길 / 대전서구 / 010-****-1234 /프리미엄 이용중</span>
                            </div>
                        </form>
                        <a href="#" class="general-btn green-bg long-btn">선물하기</a>
                    </div>
                    <p>※ 이용권 사용기간 : 구매한 날짜로부터 1개월</p>
                </div>
            </div>
        </section>
    </div>
 
     );
}
 
export default GiftCoupons;
       