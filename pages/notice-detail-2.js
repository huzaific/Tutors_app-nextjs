const NoticeDetail = () => {
    return ( 
        <div class="content">
        <section class="faq-wrap notice-wrap">
            <div class="container">
                <div class="notice-content-wrap">
                    <h5>공지사항</h5>
                    <div class="notice-detail-wrap">
                        <h6>공지사항입니다(제목부분이 노출되는 부분)</h6>
                        <div class="author-detail-wrap">
                            <ul>
                                <li><span>작성자 : </span>관리자</li>
                                <li><span>조회수 : </span>100</li>
                            </ul>
                            <p><span>작성일 : </span>2015-01-01</p>
                        </div>
                        <div class="notice-detail-content">
                            <p>안녕하세요. 그루핑 관리자입니다.</p>
                            <p>년 새해를 맞이하여 그루핑이 새롭게 리뉴얼 될 예정입니다.</p>
                            <p>공지사항 내용이 작성되어서 노출될 부분입니다</p>
                        </div>
                    </div>
                    <a href="notice-writing.html" class="general-btn white-gray-btn long-btn">목록</a>
                </div>
            </div>
        </section>
    </div>
  
     );
}
 
export default NoticeDetail;
      