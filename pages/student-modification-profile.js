const StudentModificationProfile = () => {
    return ( 
<div class="content">
            <section class="login-wrap student-modification-profile advance-search-modal">
                <div class="container">
                    <div class="login-content region-selection-main">
                        <h2>정보 수정</h2>
                        <form action="">
                            <div class="form-group">
                                <label for="">닉네임</label>
                                <input type="text" class="form-control" placeholder="닉네임을 입력해주세요." />
                                <span>※ 문자, 숫자로 조합된 2~10글자 이내</span>
                            </div>
                            <div class="form-group">
                                <label for="">비밀번호를 입력해주세요.</label>
                                <input type="text" class="form-control" placeholder="비밀번호를 입력해주세요" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="비밀번호를 재입력해주세요" />
                                <span>※ 문자, 숫자로 조합된 2~10글자 이내</span>
                            </div>
                            <div class="form-row custom-radio-btns">
                                <label for="">지금 과외를 구하고 있나요?</label>
                                <div class="form-group col-6 col-sm-6 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio751" name="example14" checked="" />
                                        <label class="custom-control-label" for="customRadio751">과외가 급해요</label>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-6 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio752" name="example14" />
                                        <label class="custom-control-label" for="customRadio752">생각중이예요</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row custom-radio-btns">
                                <label for="">학생의 성별을 알려주세요</label>
                                <div class="form-group col-6 col-sm-6 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio801" name="example15" />
                                        <label class="custom-control-label" for="customRadio801">남성</label>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-6 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio802" name="example15" checked="" />
                                        <label class="custom-control-label" for="customRadio802">여성</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group modal-popup-wrap">
                                <label for="">직접 과외 희망 지역을 선택해주세요<span>(중복선택 가능)</span></label>
                                <a href="#" class="modal-popup" data-toggle="modal" data-target="#region-selection-modal">
                                    <span>지역 선택</span><span>&plus;</span>
                                </a>
                                <ul class="search-select-option black-bg">
                                    <li><a href="#">대전광역시 서구<span>×</span></a></li>
                                    <li><a href="#">대전광역시 중구<span>×</span></a></li>
                                    <li><a href="#">대전광역시 유성구<span>×</span></a></li>
                                </ul>
                            </div>
                            <div class="form-group modal-popup-wrap">
                                <label for="">학생의 거주 지역을 선택해주세요</label>
                                <a href="#" class="modal-popup" data-toggle="modal" data-target="#region-selection-modal">
                                    <span>지역 선택</span><span>&plus;</span>
                                </a>
                                <ul class="search-select-option black-bg">
                                    <li><a href="#">대전광역시 서구<span>×</span></a></li>
                                </ul>
                            </div>
                            <div class="form-group modal-popup-wrap">
                                <label for="">과외 받을 학생의 교과를 선택해주세요</label>
                                <a href="#" class="modal-popup" data-toggle="modal" data-target="#course-selection-modal">
                                    <span>교과 선택</span><span>&plus;</span>
                                </a>
                                <ul class="search-select-option black-bg">
                                    <li><a href="#">초등 1학년<span>×</span></a></li>
                                </ul>
                            </div>
                            <div class="form-row">
                                <label for="">재학 중인 학교명을 선택해주세요</label>
                                <div class="form-group col-7 col-sm-8 form-col">
                                    <input type="text" placeholder="재학 중인 학교를 선택해주세요" />
                                </div>
                                <div class="form-group col-5 col-sm-4 form-col">
                                    <a href="#" class="general-btn search-modal-btn" data-toggle="modal" data-target="#school-selection-modal">검색하기</a>
                                </div>
                                <ul class="search-select-option black-bg">
                                    <li><a href="#">대전 탄방초등학교<span>×</span></a></li>
                                </ul>
                            </div>
                            <div class="form-row custom-radio-btns">
                                <label for="">과외받을 학생의 실력은 어느정도인가요?</label>
                                <div class="form-group col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio851" name="example16" checked="" />
                                        <label class="custom-control-label" for="customRadio851">상위</label>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio852" name="example16" />
                                        <label class="custom-control-label" for="customRadio852">중위</label>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio853" name="example16" />
                                        <label class="custom-control-label" for="customRadio853">하위</label>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio854" name="example16" />
                                        <label class="custom-control-label" for="customRadio854">내신 1~2등급</label>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio855" name="example16" />
                                        <label class="custom-control-label" for="customRadio855">내신 3~4등급</label>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio856" name="example16" />
                                        <label class="custom-control-label" for="customRadio856">내신 5~9등급</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row custom-checkbox-btns">
                                <label for="">과의를 희망하는 과목을 선택해주세요(중복선택 가능)</label>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck901" name="example17" />
                                        <label class="custom-control-label" for="customCheck901">국어</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck902" name="example17" checked="" />
                                        <label class="custom-control-label" for="customCheck902">영어</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck903" name="example17" checked="" />
                                        <label class="custom-control-label" for="customCheck903">수학</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck904" name="example17" />
                                        <label class="custom-control-label" for="customCheck904">과학</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck905" name="example17" />
                                        <label class="custom-control-label" for="customCheck905">기타과목</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck906" name="example17" />
                                        <label class="custom-control-label" for="customCheck906">기타레슨</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="">과외 가능 요일/시간을 작성해주세요</label>
                                <input type="text" class="form-control" placeholder="예시) 평일(월~금) / 12:00~18:00" />
                            </div>
                            <div class="form-group">
                                <label for="">과목당 월 최대 예산을 선택해주세요</label>
                                <label class="select-warp">
                                    <select class="form-control">
                                        <option value="" default="">선택</option>
                                        <option value="">선택1</option>
                                        <option value="">선택2</option>
                                        <option value="">선택3</option>
                                    </select>
                                </label>
                            </div>
                            <div class="form-group">
                                <label for="">학생의 상황, 과외 선생님께 바라는 것을 작성해주세요</label>
                                <input type="text" class="form-control" placeholder="예시) 집중력이 부족하고 주의가 산만합니다. 학교 수업만으로는 부족한 것 같습니다." />
                            </div>
                            <div class="form-row verify-number">
                                <label for="">과의를 희망하는 과목휴대폰 번호를 인증해주세요</label>
                                <p>※ 연락처는 선생님들에게 공개되지 않습니다. 가입 및 인증 용도입니다.</p>
                                <div class="form-group col-7 col-sm-8 form-col">
                                    <input type="text" class="form-control" placeholder="휴대폰 번호를 입력해주세요" />
                                </div>
                                <div class="form-group col-5 col-sm-4 form-col">
                                    <button type="button" class="general-btn green-bg">인증번호 받기</button>
                                </div>
                                <div class="form-group col-7 col-sm-8 form-col">
                                    <input type="text" class="form-control" placeholder="인증번호를 입력해주세요" />
                                </div>
                                <div class="form-group col-5 col-sm-4 form-col">
                                    <button type="button" class="general-btn">인증하기</button>
                                </div>
                            </div>
                            <div class="form-group edit-profile-btn">
                                <button type="button" onclick="location.href='edit-student-profile.html';" class="general-btn green-bg">저장하기</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
      
     );
}
 
export default StudentModificationProfile;
        