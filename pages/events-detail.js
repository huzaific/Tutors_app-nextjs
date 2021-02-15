const EventsDetail = () => {
    return ( 
        <div class="content">
        <section class="faq-wrap notice-wrap event-detail-wrap">
            <div class="container">
                <div class="notice-content-wrap">
                    <h5>이벤트</h5>
                    <div class="notice-detail-wrap">
                        <h6>제목</h6>
                        <div class="author-detail-wrap">
                            <ul>
                                <li><span>작성자 : </span>관리자</li>
                                <li><span>조회수 : </span>100</li>
                            </ul>
                            <p><span>작성일 : </span>2015-01-01</p>
                        </div>
                        <div class="notice-detail-content">
                            <div class="event-detail-img">
                                <img src="images/event-table-img.png" alt="" />
                            </div>
                            <p>이벤트 내용이 작성되어서 노출될 부분입니다.</p>
                        </div>
                    </div>
                    <a href="/events" class="general-btn white-gray-btn long-btn">목록</a>
                </div>
            </div>
        </section>
    </div>

     );
}
 
export default EventsDetail;


     