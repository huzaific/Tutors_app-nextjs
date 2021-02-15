const PointRecharge = () => {
    return ( 
        <div class="content">
        <section class="charging-points-wrap">
            <div class="container">
                <div class="charging-points-content">
                    <h6>포인트 충전</h6>
                    <p>충전할 금액을 선택해주세요.</p>
                    <div class="select-point-wrap round-custom-radio">
                        <div class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" id="customRadio151" name="example18" />
                            <label class="custom-control-label" for="customRadio151"><span>5,000</span> <span>포인트</span> (5,500원 VAT 포함)</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" id="customRadio152" name="example18" checked />
                            <label class="custom-control-label" for="customRadio152"><span>10,000</span> <span>포인트</span> (5,500원 VAT 포함)</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" id="customRadio153" name="example18" />
                            <label class="custom-control-label" for="customRadio153"><span>20,000</span> <span>포인트</span> (5,500원 VAT 포함)</label>
                        </div>
                    </div>
                    <a href="completion-charging-point.html" target="_self" class="general-btn green-bg long-btn">결제하기</a>
                </div>
            </div>
        </section>
    </div>
   
     );
}
 
export default PointRecharge;
       