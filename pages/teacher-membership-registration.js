const TeacherMembershipRegisteration = () => {
    return ( 
        <div class="content">
        <section class="login-wrap signup-wrap student-modification-profile advance-search-modal teacher-membership-registration-wrap">
            <div class="container">
                <div class="login-content region-selection-main">
                    <div class="signup-content">
                        <h2>회원가입</h2>
                    </div>
                    <form action="">
                        <div class="form-group">
                            <label for="">프로필 사진을 등록해주세요</label>
                            <div class="register-image-wrap">
                                <img src="images/comment-student-img.png" alt="" />
                                <div class="register-content">
                                    <a href="#">프로필 사진 등록하기</a>
                                    <p>※얼굴이 잘 보이는 사진으로 등록해주시기 바랍니다!</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">이메일 계정을 입력해주세요</label>
                            <input type="text" class="form-control" placeholder="예시) grouping1004@gmail.com" />
                        </div>
                        <div class="form-group">
                            <label for="">비밀번호를 입력해주세요</label>
                            <input type="text" class="form-control" placeholder="비밀번호를 입력해주세요" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="비밀번호를 재입력해주세요" />
                            <span>※ 8~16자 이내의 영문, 숫자, 특수문자 중 2가지 이상 포함</span>
                        </div>
                        <div class="form-group">
                            <label for="">닉네임을 입력해주세요</label>
                            <input type="text" class="form-control" placeholder="닉네임을 입력해주세요." />
                            <span>※ 문자, 숫자로 조합된 2~10글자 이내</span>
                        </div>
                        <div class="form-row custom-radio-btns">
                            <label for="">성별을 선택해주세요</label>
                            <div class="form-group col-6 col-sm-6 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio751" name="example14" checked="" />
                                    <label class="custom-control-label" for="customRadio751">남성</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-6 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio752" name="example14" />
                                    <label class="custom-control-label" for="customRadio752">여성</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row custom-radio-btns">
                            <label for="">선생님의 연령을 선택해주세요</label>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio801" name="example15" />
                                    <label class="custom-control-label" for="customRadio801">20대</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio802" name="example15" />
                                    <label class="custom-control-label" for="customRadio802">30대</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio803" name="example15" />
                                    <label class="custom-control-label" for="customRadio803">40대</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio804" name="example15" checked="" />
                                    <label class="custom-control-label" for="customRadio804">50대 이상</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row custom-radio-btns">
                            <label for="">선생님의 연령을 선택해주세요</label>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio821" name="example19" />
                                    <label class="custom-control-label" for="customRadio821">신규</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio822" name="example19" />
                                    <label class="custom-control-label" for="customRadio822">5년 미만</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio823" name="example19" checked="" />
                                    <label class="custom-control-label" for="customRadio823">10년 미만</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio824" name="example19" />
                                    <label class="custom-control-label" for="customRadio824">10년 이상</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row custom-radio-btns">
                            <label for="">선생님의 연령을 선택해주세요</label>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio831" name="example20" /> 
                                    <label class="custom-control-label" for="customRadio831">재/휴학생</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio832" name="example20" />
                                    <label class="custom-control-label" for="customRadio832">졸업생</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio833" name="example20" checked="" />
                                    <label class="custom-control-label" for="customRadio833">전문강사</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio834" name="example20" />
                                    <label class="custom-control-label" for="customRadio834">현 학원강사</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio835" name="example20" />
                                    <label class="custom-control-label" for="customRadio835">전 학원강사</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customRadio836" name="example20" />
                                    <label class="custom-control-label" for="customRadio836">사립학교 선생님</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group modal-popup-wrap">
                            <label for="">직접 과외 가능 지역을 선택해주세요<span>(중복선택 가능)</span></label>
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
                        <div class="form-group">
                            <label for="">선생님의 최종 학력을 입력해주세요</label>
                            <div class="form-row">
                                <div class="form-group col-7 col-sm-8 form-col">
                                    <input type="text" placeholder="최종 학력을 입력해주세요" />
                                </div>
                                <div class="form-group col-5 col-sm-4 form-col">
                                    <a href="#" class="general-btn search-modal-btn" data-toggle="modal" data-target="#final-school-modal">검색하기</a>
                                </div>
                            </div>
                            <ul class="search-select-option black-bg">
                                <li><a href="#">서울시립대학교<span>×</span></a></li>
                            </ul>
                        </div>
                        <div class="form-group modal-popup-wrap">
                            <label for="">전문 과의 교과를 선택해주세요<span>(중복선택 가능)</span></label>
                            <a href="#" class="modal-popup" data-toggle="modal" data-target="#course-selection-modal">
                                <span>교과 선택</span><span>&plus;</span>
                            </a>
                            <ul class="search-select-option black-bg">
                                <li><a href="#">초등교과<span>×</span></a></li>
                                <li><a href="#">중등교과<span>×</span></a></li>
                            </ul>
                        </div>
                        <div class="form-row custom-checkbox-btns">
                            <label for="">전문 과외 과목을 선택해주세요<span>(중복선택 가능)</span></label>
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
                            <label for="">선생님의 신분증을 등록해주세요</label>
                            <div class="form-row">
                                <div class="col-12 col-sm-6 form-col textarea-wrap">
                                    <textarea type="text" class="form-control"></textarea>
                                </div>
                                <div class="col-12 col-sm-6 form-col textarea-wrap">
                                    <textarea type="text" class="form-control"></textarea>
                                </div>
                            </div>
                            <span>※ 학생증, 졸업증명서, 개인과외교습신고증명서 등이 가능합니다.</span>
                            <span class="mt-0"> 본 절차는 그루핑 인증을 위한 절차이며 등록해주신 증명서는 전체 비공개 입니다.</span>
                        </div>
                        <div class="form-group">
                            <label for="">선생님의 간단한 한줄 소개를 작성해주세요</label>
                            <input type="text" class="form-control" placeholder="예시) 수학 과외경력만 10년, 어떤 선생님한테 배우냐에 따라 다릅니다." />
                        </div>
                        <div class="form-row verify-number">
                            <label for="">휴대폰 번호를 인증해주세요</label>
                            <p>※ 연락처는 선생님들에게 공개되지 않습니다. 가입 및 인증 용도입니다.</p>
                            <div class="form-group col-7 col-sm-8 form-col">
                                <input type="text" class="form-control" placeholder="휴대폰 번호를 입력해주세요" />
                            </div>
                            <div class="form-group col-5 col-sm-4 form-col">
                                <button type="button" class="general-btn">인증번호 받기</button>
                            </div>
                            <div class="form-group col-7 col-sm-8 form-col">
                                <input type="text" class="form-control" placeholder="인증번호를 입력해주세요" />
                            </div>
                            <div class="form-group col-5 col-sm-4 form-col">
                                <button type="button" class="general-btn">인증하기</button>
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                <span>전체약관 동의</span>
                                개인정보 취급방침, <a href="#">그루핑의 이용약관</a> 및 <a href="#">환불규정</a>에 동의합니다.
                            </label>
                        </div>
                        <div class="form-group edit-profile-btn">
                            <button type="button" class="general-btn green-bg">그루핑 선생님으로 가입하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
    
     );
}
 
export default TeacherMembershipRegisteration;
      