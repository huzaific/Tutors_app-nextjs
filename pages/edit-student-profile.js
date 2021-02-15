const EditStudentProfile = () => {
    return ( 
        <div class="content">
        <section class="login-wrap changing-information-wrap advance-search-modal">
            <div class="container">
                <div class="login-content region-selection-main">
                    <h2>내 정보관리</h2>

                    <form action="">
                        <div class="form-group">
                            <label for="">닉네임</label>
                            <input type="text" class="form-control" value="영어수업이세상에서가장어려움" disabled />
                        </div>
                        <div class="form-group">
                            <label for="">성별</label>
                            <input type="text" class="form-control" value="여성" disabled />
                        </div>
                        <div class="form-row custom-radio-btns">
                            <label for="">지금 과외를 구하고 있나요?</label>
                            <div class="form-group col-6 col-sm-6 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio701" name="example11" checked="" disabled />
                                    <label class="custom-control-label" for="customRadio701">과외가 급해요</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-6 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio702" name="example11" disabled />
                                    <label class="custom-control-label" for="customRadio702">생각중이에요</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">과목 선택(중복 선택 가능)</label>
                            <div class="form-row custom-checkbox-btns">
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck51" name="example12" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck51">대전광역시 서구</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck52" name="example12" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck52">대전광역시 유성구</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">교과</label>
                            <input type="text" class="form-control" value="초등학교 1학년" disabled />
                        </div>
                        <div class="form-group">
                            <label for="">실력</label>
                            <input type="text" class="form-control" value="상위" disabled />
                        </div>
                        <div class="form-group">
                            <label for="">과외를 희망하는 과목</label>
                            <div class="form-row custom-checkbox-btns">
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck101" name="example13" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck101">영어</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck102" name="example13" checked="" disabled />
                                        <label class="custom-control-label" for="customCheck102">수학</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">과외 가능 요일 및 시간</label>
                            <input type="text" class="form-control" value="평일(월~금) / 12:00~18:00" disabled />
                        </div>
                        <div class="form-group">
                            <label for="">과외 예산</label>
                            <input type="text" class="form-control" value="30만원 이하" disabled />
                        </div>
                        <div class="form-group">
                            <label for="">과외 선생님께 바라는 점</label>
                            <input type="text" class="form-control" value="집중력이 부족하고 주의가 산만합니다. 학교 수업만으로는 부족한 것 같습니다." disabled />
                        </div>
                        <div class="form-group">
                            <label for="">인증된 휴대폰 번호</label>
                            <input type="text" class="form-control" value="010-1234-5678" disabled />
                        </div>
                        <div class="form-group edit-profile-btn">
                            <a href ="/student-modification-profile" target="_self" class="general-btn green-bg long-btn mb-3">프로필 수정하기</a>
                            <a href="#" class="unsubscribe-btn" data-toggle="modal" data-target="#edit-profile-modal">그루핑 탈퇴하기</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
     );
}
 
export default EditStudentProfile;

       