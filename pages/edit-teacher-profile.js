const EditTeacherProfile = () => {
    return ( 
        <div class="content">
        <section class="login-wrap changing-information-wrap advance-search-modal edit-teacher-profile-wrap">
            <div class="container">
                <div class="login-content region-selection-main">
                    <h2>내 정보관리</h2>

                    <form action="">
                        <div class="form-group">
                            <img class="teacher-img-edit" src="images/changing-info-img.png" alt="" />
                        </div>
                        <div class="form-group">
                            <label for="">닉네임</label>
                            <input type="text" class="form-control" value="주토피아 국어" disabled />
                        </div>
                        <div class="form-group">
                            <label for="">성별</label>
                            <input type="text" class="form-control" value="여성" disabled />
                        </div>
                        <div class="form-group">
                            <label for="">선생님의 연령</label>
                            <div class="form-row mb-ten custom-checkbox-btns">
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck51" name="example12" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck51">40대</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">선생님의 경력</label>
                            <div class="form-row mb-ten custom-checkbox-btns">
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck61" name="example26" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck61">5년 미만</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">선생님의 직업</label>
                            <div class="form-row mb-ten custom-checkbox-btns">
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck71" name="example27" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck71">전문 강사</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">직접 과외 희망 지역</label>
                            <div class="form-row mb-ten custom-checkbox-btns">
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck81" name="example28" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck81">대전광역시 서구</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck82" name="example28" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck82">대전광역시 유성구</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">선생님의 거주지</label>
                            <div class="form-row mb-ten custom-checkbox-btns">
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck91" name="example29" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck91">대전광역시 서구</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">선생님의 최종학력</label>
                            <input type="text" class="form-control" value="한국대학교 수학교육과 학사" disabled />
                        </div>
                        <div class="form-group">
                            <label for="">전문 과외 교과</label>
                            <div class="form-row mb-ten custom-checkbox-btns">
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck101" name="example13" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck101">초등 전체</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck102" name="example13" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck102">중등 전체</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck103" name="example13" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck103">고등 전체</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">전문 과외 과목</label>
                            <div class="form-row mb-ten custom-checkbox-btns">
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck121" name="example25" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck121">영어</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck122" name="example25" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck122">수학</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">한줄 소개글</label>
                            <input type="text" class="form-control" value="영어 수학 과외 경력만 10년, 어떤 선생님한테 배우냐에 따라 다릅니다." disabled />
                        </div>
                        <div class="form-group">
                            <label for="">선생님 신분증</label>
                            <input type="text" class="form-control" value="[선생님 닉네임]은 그루핑에 신분이 인증되었습니다." disabled />
                        </div>
                        <div class="form-group">
                            <label for="">인증된 휴대폰 번호</label>
                            <input type="text" class="form-control" value="010-1234-5678" disabled />
                        </div>
                        <div class="form-group edit-profile-btn">
                            <a href ="/teacher-information-modification" target="_self" class="general-btn green-bg long-btn mb-3">프로필 수정하기</a>
                            <a href="#" class="unsubscribe-btn" data-toggle="modal" data-target="#edit-profile-modal">그루핑 탈퇴하기</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
     );
}
 
export default EditTeacherProfile;
