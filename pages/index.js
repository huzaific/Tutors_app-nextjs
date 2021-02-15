
export default function Home() {
  return (
    <>
     <div class="banner">
            <div class="container">
                <div class="banner-content-wrap">
                    <div class="banner-content">
                        <p>학생 및 학부모님 이용 압도적 1위, 선생님 풀 압도적 1위, 전문과외 플랫폼 <span> 전문 과외 플랫폼 그루핑은 많은 분들께 신뢰받고 있습니다.</span></p>
                        <h1><span>나에게 딱 맞는 과외</span> 전문 선생님을 찾아드립니다!</h1>
                    </div>
                    <div class="banner-img">
                        <img src="images/banner-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <section class="profile-section">
                <div class="container">
                    <div class="profile-section-content">
                        <h4><span><img src="images/icon1.png" style={{width:'24px'}}/></span>프리미엄 선생님 프로필</h4>
                        <form action="">
                            <div class="form-row">
                                <div class="form-group col-md-6 col-lg-3">
                                  <a href="#" data-toggle="modal" data-target="#region-selection-modal">
                                      <img src="images/location-icon.png" alt="" />
                                      <span>지역 선택</span>
                                  </a>
                                </div>
                                <div class="form-group col-md-6 col-lg-3">
                                    <a href="#" data-toggle="modal" data-target="#course-selection-modal">
                                        <img src="images/subject-icon.png" alt="" />
                                        <span>교과 선택</span>
                                    </a>
                                </div>
                                <div class="form-group col-md-12 col-lg-6">
                                    <a href="#" class="search" data-toggle="modal" data-target="#advance-search-modal">
                                        <i class="fa fa-search text-white" aria-hidden="true"></i>
                                        <span>상세 검색</span>
                                    </a>
                                  </div>
                              </div>
                        </form>
                        <div class="row card-row">
                            <div class="col-md-6 col-lg-4 col-xl-3 col-6 card-col">
                                <a href="#" data-toggle="modal" data-target="#teacher-profile-modal" class="card-wrap">
                                    <img class="card-img-top" src="images/people1.jpg" />
                                    <div class="card-content">
                                        <ul class="card-btn-wrap">
                                            <li><span>Premium</span></li>
                                        </ul>

                                        <h6>영어전문 Kimdowon</h6>
                                        <ul class="card-icons">
                                            <li><img class="" src="images/flag-icon.png" /><span class="item-classification">교과</span><span class="text-over">고등, 성인</span></li>
                                            <li><img class="" src="images/note-icon.png" /><span class="item-classification">전문</span><span class="text-over">영어 (수능영어, 토익, 회화)</span></li>
                                            <li><img class="" src="images/location-icon2.png" /><span class="item-classification">지역</span><span class="text-over">대전 서구, 대전 중구</span></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3 col-6 card-col">
                                 <a href="#" data-toggle="modal" data-target="#teacher-profile-modal" class="card-wrap">
                                    <img class="card-img-top" src="images/people2.jpg" />
                                    <div class="card-content">
                                        <ul class="card-btn-wrap">
                                            <li><span>Premium</span></li>
                                        </ul>

                                        <h6>연신내rapture</h6>
                                        <ul class="card-icons">
                                            <li><img class="" src="images/flag-icon.png" /><span class="item-classification">교과</span><span class="text-over">중등, 고등, 성인</span></li>
                                            <li><img class="" src="images/note-icon.png" /><span class="item-classification">전문</span><span class="text-over">영어 (중·고등영어, 토익)</span></li>
                                            <li><img class="" src="images/location-icon2.png" /><span class="item-classification">지역</span><span class="text-over">서울, 경기</span></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3 col-6 card-col">
                                 <a href="#" data-toggle="modal" data-target="#teacher-profile-modal" class="card-wrap">
                                    <img class="card-img-top" src="images/people3.jpg" />
                                    <div class="card-content">
                                        <ul class="card-btn-wrap">
                                            <li><span>Premium</span></li>
                                        </ul>
                                        <h6>_AVA_</h6>
                                        <ul class="card-icons">
                                            <li><img class="" src="images/flag-icon.png" /><span class="item-classification">교과</span><span class="text-over">중등, 고등, 성인</span></li>
                                            <li><img class="" src="images/note-icon.png" /><span class="item-classification">전문</span><span class="text-over">수학 (중·고등수학, 미적분)</span></li>
                                            <li><img class="" src="images/location-icon2.png" /><span class="item-classification">지역</span><span class="text-over">서울, 경기, 대전(서구)</span></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3 col-6 card-col">
                                 <a href="#" data-toggle="modal" data-target="#teacher-profile-modal" class="card-wrap">
                                    <img class="card-img-top" src="images/people4.jpg" />
                                    <div class="card-content">
                                        <ul class="card-btn-wrap">
                                            <li><span>Premium</span></li>
                                        </ul>

                                        <h6>주토피아 국어</h6>
                                        <ul class="card-icons">
                                            <li><img class="" src="images/flag-icon.png" /><span class="item-classification">교과</span><span class="text-over">초등,중등</span></li>
                                            <li><img class="" src="images/note-icon.png" /><span class="item-classification">전문</span><span class="text-over">국어 (인문논술,초등국어)</span></li>
                                            <li><img class="" src="images/location-icon2.png" /><span class="item-classification">지역</span><span class="text-over">서울</span></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="row card-row">
                            <div class="col-md-6 col-lg-4 col-xl-3 col-6 card-col">
                                <a href="#" data-toggle="modal" data-target="#teacher-profile-modal" class="card-wrap">
                                    <img class="card-img-top" src="images/people1.jpg" />
                                    <div class="card-content">
                                        <ul class="card-btn-wrap">
                                            <li><span>Premium</span></li>
                                        </ul>

                                        <h6>영어전문 Kimdowon</h6>
                                        <ul class="card-icons">
                                            <li><img class="" src="images/flag-icon.png" /><span class="item-classification">교과</span><span class="text-over">고등, 성인</span></li>
                                            <li><img class="" src="images/note-icon.png" /><span class="item-classification">전문</span><span class="text-over">영어 (수능영어, 토익, 회화)</span></li>
                                            <li><img class="" src="images/location-icon2.png" /><span class="item-classification">지역</span><span class="text-over">대전 서구, 대전 중구</span></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3 col-6 card-col">
                                 <a href="#" data-toggle="modal" data-target="#teacher-profile-modal" class="card-wrap">
                                    <img class="card-img-top" src="images/people2.jpg" />
                                    <div class="card-content">
                                        <ul class="card-btn-wrap">
                                            <li><span>Premium</span></li>
                                        </ul>

                                        <h6>연신내rapture</h6>
                                        <ul class="card-icons">
                                            <li><img class="" src="images/flag-icon.png" /><span class="item-classification">교과</span><span class="text-over">중등, 고등, 성인</span></li>
                                            <li><img class="" src="images/note-icon.png" /><span class="item-classification">전문</span><span class="text-over">영어 (중·고등영어, 토익)</span></li>
                                            <li><img class="" src="images/location-icon2.png" /><span class="item-classification">지역</span><span class="text-over">서울, 경기</span></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3 col-6 card-col">
                                 <a href="#" data-toggle="modal" data-target="#teacher-profile-modal" class="card-wrap">
                                    <img class="card-img-top" src="images/people3.jpg" />
                                    <div class="card-content">
                                        <ul class="card-btn-wrap">
                                            <li><span>Premium</span></li>
                                        </ul>
                                        <h6>_AVA_</h6>
                                        <ul class="card-icons">
                                            <li><img class="" src="images/flag-icon.png" /><span class="item-classification">교과</span><span class="text-over">중등, 고등, 성인</span></li>
                                            <li><img class="" src="images/note-icon.png" /><span class="item-classification">전문</span><span class="text-over">수학 (중·고등수학, 미적분)</span></li>
                                            <li><img class="" src="images/location-icon2.png" /><span class="item-classification">지역</span><span class="text-over">서울, 경기, 대전(서구)</span></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3 col-6 card-col">
                                 <a href="#" data-toggle="modal" data-target="#teacher-profile-modal" class="card-wrap">
                                    <img class="card-img-top" src="images/people4.jpg" />
                                    <div class="card-content">
                                        <ul class="card-btn-wrap">
                                            <li><span>Premium</span></li>
                                        </ul>

                                        <h6>주토피아 국어</h6>
                                        <ul class="card-icons">
                                            <li><img class="" src="images/flag-icon.png" /><span class="item-classification">교과</span><span class="text-over">초등,중등</span></li>
                                            <li><img class="" src="images/note-icon.png" /><span class="item-classification">전문</span><span class="text-over">국어 (인문논술,초등국어)</span></li>
                                            <li><img class="" src="images/location-icon2.png" /><span class="item-classification">지역</span><span class="text-over">서울</span></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>


    </>
  )
}
