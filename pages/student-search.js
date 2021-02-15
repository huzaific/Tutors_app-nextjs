const StudentSearch = () => {
    return ( 
        <div class="content">
        <section class="teacter-search-form-wrap">
            <div class="container">
                <div class="teacter-search-form-content">
                    <h4>학생 찾기</h4>
                    <form action="">
                        <div class="form-row custom-radio-btns">
                            <div class="form-group col-6 col-sm-4 col-md-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio961" name="example24" checked />
                                    <label class="custom-control-label" for="customRadio961">대면[직접]과외</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-4 col-md-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio962" name="example24" />
                                    <label class="custom-control-label" for="customRadio962">화상과외</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-sm-6">
                                <a href="#" class="modal-popup-btn" data-toggle="modal" data-target="#region-selection-modal">
                                    <span>지역을 선택해주세요</span>
                                    <span>&plus;</span>
                                </a>
                            </div>
                            <div class="form-group col-sm-6">
                                <a href="#" class="modal-popup-btn" data-toggle="modal" data-target="#course-selection-modal">
                                    <span>교과를 선택해주세요</span>
                                    <span>&plus;</span>
                                </a>
                            </div>
                        </div>
                        <button type="button" class="general-btn" data-toggle="modal" data-target="#student-detail-search-modal">상세검색</button>
                    </form>
                    <ul class="search-select-option">
                        <li><a href="#">#대전 서구 영어<span>×</span></a></li>
                        <li><a href="#">#대전 영어<span>×</span></a></li>
                        <li><a href="#">#여자<span>×</span></a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="teacter-search-result-wrap">
            <div class="container">
                <div class="teacter-search-result-content">
                    <h4><span>759</span><b>명</b>의 학생이 검색되었습니다.</h4>
                </div>
                <div class="row teacter-detail-row">
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>영어성적아 올라라~</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 2학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>방탄♥태형이부인이되고파</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 3학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 2학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 3학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 2학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 3학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 2학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 3학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 2학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 3학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 2학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 3학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 2학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                    <div class="col-lg-6 teacter-detail-col">
                        <a href="javascript:void();" data-toggle="modal" data-target="#student-profile-modal" class="student-detail-wrap">
                            <div class="student-detail-header">
                                <h5>학생 닉네임 표시</h5>
                                <span>과외구함</span>
                            </div>
                            <ul>
                                <li><img src="images/flag-icon.png" alt="" />교과 고등 3학년</li>
                                <li><img src="images/note-icon.png" alt="" />과목 영어</li>
                                <li><img src="images/location-icon2.png" alt="" />지역 대전 서구</li>
                            </ul>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
   
     );
}
 
export default StudentSearch;
       