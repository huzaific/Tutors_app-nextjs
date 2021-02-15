const NoticeWriting = () => {
    return ( 
        <div class="content">
        <section class="faq-wrap notice-wrap notice1-wrap">
            <div class="container">
                <div class="notice-content-wrap">
                    <h5>공지사항</h5>
                    <div class="notice1-table">
                        <div class="notice1-table-content">
                            <div class="notice-table-th">
                                <p>번호</p>
                                <p>제목</p>
                                <p>작성자</p>
                                <p>날짜</p>
                                <p>조회수</p>
                            </div>
                            <a href="notice-detail-2.html" class="notice-table-td">
                                <p><span class="imp-no">중요</span></p>
                                <p>공지사항 입니다.</p>
                                <p>홍길동</p>
                                <p>2020-01-01</p>
                                <p>10</p>
                            </a>
                            <a href="#" class="notice-table-td">
                                <p>5</p>
                                <p>공지사항 입니다.공지사항 입니다.공지사항 입니다.공지사항 입니다.공지사항 입니다.</p>
                                <p>홍길동</p>
                                <p>2020-01-01</p>
                                <p>10</p>
                            </a>
                            <a href="#" class="notice-table-td">
                                <p>4</p>
                                <p>공지사항 입니다.</p>
                                <p>홍길동</p>
                                <p>2020-01-01</p>
                                <p>10</p>
                            </a>
                            <a href="#" class="notice-table-td">
                                <p>3</p>
                                <p>공지사항 입니다.</p>
                                <p>홍길동</p>
                                <p>2020-01-01</p>
                                <p>10</p>
                            </a>
                            <a href="#" class="notice-table-td">
                                <p>2</p>
                                <p>공지사항 입니다.</p>
                                <p>홍길동</p>
                                <p>2020-01-01</p>
                                <p>10</p>
                            </a>
                            <a href="#" class="notice-table-td">
                                <p>1</p>
                                <p>공지사항 입니다.</p>
                                <p>홍길동</p>
                                <p>2020-01-01</p>
                                <p>10</p>
                            </a>
                        </div>
                    </div>
                    <div class="notice1-search-wrap search-writing-btn-wrap">
                        <label for="" class="select-wrap">
                            <select name="" id="" class="form-control">
                                <option value="" default disabled>선택</option>
                                <option value="">10</option>
                                <option value="">25</option>
                                <option value="">50</option>
                            </select>
                        </label>
                        <div class="search-wrap writing-btn-wrap">
                            <div class="table-search-wrap">
                                <input type="text" class="form-control" placeholder="검색어를 입력하세요" />
                                <button type="button" class="general-btn">검색</button>
                            </div>
                            <button type="button" class="general-btn green-bg">글쓰기</button>
                        </div>
                    </div>
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">&laquo;</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">&raquo;</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>

     );
}
 
export default NoticeWriting;
      