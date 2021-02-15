const PointTeacher = () => {
  return ( 
    <div class="content">
    <section class="faq-wrap purchasing-point-voucher-wrap">
        <div class="container">
            <div class="ask-question">
                <h5>포인트</h5>
            </div>
            <div class="point-held-wrap">
                <div class="point-held">
                    <h6><span>P</span>보유포인트</h6>
                    <p>6,000<span>Point</span></p>
                </div>
                <div class="student-premium-member">
                    <ul>
                        <li><span>[전문수학강사 Seosim]</span><b> 선생님은 프리미엄 회원입니다.</b></li>
                        <li>남은 기간 : 21일(2020-01-01 까지)</li>
                    </ul>
                    <a href="point-recharge-teacher.html" target="_self" class="general-btn green-bg">포인트 충전</a>
                </div>
            </div>
            <div class="point-usage-history">
                <h5>포인트 사용내역</h5>
                <div class="point-usage-history-date-wrap">
                    <h6>조회기간</h6>
                    <div class="calender-wrap">
                        <input type="text" id="datepicker3" class="form-control" placeholder="2020- 01- 01" readonly />
                        <span>	&sim;</span>
                        <input type="text" id="datepicker4" class="form-control" placeholder="2020- 01- 01" readonly />
                    </div>
                    <button type="button" class="general-btn">조회</button>
                </div>
                <div class="point-usage-history-table">
                    <table class="table">
                        <thead>
                          <tr>
                            <th>사용날짜</th>
                            <th>내용</th>
                            <th>포인트</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2020-01-01</td>
                            <td>신규 클래스 개설</td>
                            <td><span>-10,000</span></td>
                          </tr>
                          <tr>
                            <td>2020-01-01</td>
                            <td>질문 등록</td>
                            <td><span>-100</span></td>
                          </tr>
                          <tr>
                            <td>2020-01-01</td>
                            <td>포인트 충전</td>
                            <td><span class="green-clr">+100,000</span></td>
                          </tr>
                          <tr>
                            <td>2020-01-01</td>
                            <td>프리미엄 이용권 선물</td>
                            <td><span>0</span></td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    </section>
</div>

   );
}
 
export default PointTeacher;
      