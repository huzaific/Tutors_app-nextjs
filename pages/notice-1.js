const Notice1 = () => {
  return ( 
    <div class="content">
    <section class="faq-wrap notice-wrap notice1-wrap">
        <div class="container">
            <div class="notice-content-wrap">
                <h5>공지사항</h5>
                <table class="notice1-table">
                  <thead>
                    <tr>
                      <th class="col1">번호</th>
                      <th class="col2">제목</th>
                      <th class="col3">작성자</th>
                      <th class="col4">날짜</th>
                      <th class="col5">조회수</th>
                    </tr>
                  </thead>
                    <tbody>
                        <tr onClick="location.href='notice-detail.html'" style="cursor:pointer;">
                          <td class="col1"><span>중요</span></td>
                          <td class="col2">공지사항입니다.</td>
                          <td class="col3">홍길동</td>
                          <td class="col4">2021-01-01</td>
                          <td class="col5">10</td>
                        </tr>
                        <tr>
                          <td class="col1">5</td>
                          <td class="col2">공지사항입니다.</td>
                          <td class="col3">홍길동</td>
                          <td class="col4">2021-01-01</td>
                          <td class="col5">10</td>
                        </tr>
                        <tr>
                          <td class="col1">4</td>
                          <td class="col2">공지사항입니다.</td>
                          <td class="col3">홍길동</td>
                          <td class="col4">2021-01-01</td>
                          <td class="col5">10</td>
                        </tr>
                        <tr>
                          <td class="col1">3</td>
                          <td class="col2">공지사항입니다.</td>
                          <td class="col3">홍길동</td>
                          <td class="col4">2021-01-01</td>
                          <td class="col5">10</td>
                        </tr>
                        <tr>
                          <td class="col1">2</td>
                          <td class="col2">공지사항입니다.</td>
                          <td class="col3">홍길동</td>
                          <td class="col4">2021-01-01</td>
                          <td class="col5">10</td>
                        </tr>
                        <tr>
                          <td class="col1">1</td>
                          <td class="col2">공지사항입니다.</td>
                          <td class="col3">홍길동</td>
                          <td class="col4">2021-01-01</td>
                          <td class="col5">10</td>
                        </tr>
                    </tbody>
                  </table>
                <div class="notice1-search-wrap">
                    <label for="" class="select-wrap">
                        <select name="" id="" class="form-control">
                            <option value="" default disabled>선택</option>
                            <option value="">제목</option>
                            <option value="">내용</option>
                        </select>
                    </label>
                    <div class="search-wrap">
                        <input type="text" class="form-control" placeholder="검색어를 입력하세요" />
                        <button type="button" class="general-btn">검색</button>
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
 
export default Notice1;
     