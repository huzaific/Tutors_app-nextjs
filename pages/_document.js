import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="css/bootstrap.min.css" />
            <link rel="stylesheet" href="css/font-awesome.min.css" />
            <link rel="stylesheet" href="css/slick.css" />
            <link rel="stylesheet" href="css/slick-theme.css" />
            <link href="https://cdn.rawgit.com/atatanasov/gijgo/master/dist/combined/css/gijgo.min.css" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="css/style.css" />
            <link rel="shortcut icon" type="image/png" href="images/favicon.png" />
            <title>그루핑</title>
        </Head>
        <body>
          <Main />


          <div class="grouping-service-modal modal fade small-modal" id="grouping-service-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <div class="grouping-service-content">
                            <h6>그루핑 서비스는 로그인 후 이용이 가능합니다.</h6>
                            <p>로그인 또는 회원가입을 이용하시겠습니까?</p>
                        </div>
                        <div class="modal-btn-wrap">
                            <button type="button" class="general-btn" data-dismiss="modal" aria-label="Close">아니요</button>
                            <button type="button" onclick="location.href='login.html'" class="general-btn green-bg">예</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  

        <div class="grouping-service-modal course-selection-modal modal fade small-modal" id="course-selection-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="region-selection-top">
                            <h6>교과 선택</h6>
                            <ul>
                                <li><a href="#">초등 전체<span>&times;</span></a></li>
                            </ul>
                        </div>
                        <div class="region-selection-main">
                            <div class="row">
                                <div class="col-sm-6 col-6">
                                    <div class="custom-radio-btns">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customRadio101" name="example3" checked />
                                            <label class="custom-control-label" for="customRadio101">초등과정</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customRadio102" name="example3" />
                                            <label class="custom-control-label" for="customRadio102">중등과정</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customRadio103" name="example3" />
                                            <label class="custom-control-label" for="customRadio103">고등과정</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customRadio104" name="example3" />
                                            <label class="custom-control-label" for="customRadio104">대학교과</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customRadio105" name="example3" />
                                            <label class="custom-control-label" for="customRadio105">입시/고시</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customRadio106" name="example3" />
                                            <label class="custom-control-label" for="customRadio106">일반 성인</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-6">
                                    <div class="custom-radio-checkbox">
                                        <div class="custom-control custom-radio">
                                            <input type="checkbox" class="custom-control-input" id="customRadio-checkbox101" name="example2" checked />
                                            <label class="custom-control-label" for="customRadio-checkbox101">전체</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="checkbox" class="custom-control-input" id="customRadio-checkbox102" name="example2" checked />
                                            <label class="custom-control-label" for="customRadio-checkbox102">1학년</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="checkbox" class="custom-control-input" id="customRadio-checkbox103" name="example2" checked />
                                            <label class="custom-control-label" for="customRadio-checkbox103">2학년</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="checkbox" class="custom-control-input" id="customRadio-checkbox104" name="example2" checked />
                                            <label class="custom-control-label" for="customRadio-checkbox104">3학년</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="checkbox" class="custom-control-input" id="customRadio-checkbox105" name="example2" checked />
                                            <label class="custom-control-label" for="customRadio-checkbox105">4학년</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="checkbox" class="custom-control-input" id="customRadio-checkbox106" name="example2" checked />
                                            <label class="custom-control-label" for="customRadio-checkbox106">5학년</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="checkbox" class="custom-control-input" id="customRadio-checkbox107" name="example2" checked />
                                            <label class="custom-control-label" for="customRadio-checkbox107">6학년</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-btn-wrap">
                            <button type="button" class="general-btn white-bg">초기화</button>
                            <button type="button" class="general-btn">적용</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grouping-service-modal advance-search-modal modal fade small-modal" id="advance-search-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="region-selection-top">
                            <h6>상세검색</h6>
                        </div>
                        <div class="region-selection-main">
                            <form action="">
                                <div class="form-group">
                                    <label for="">과목 선택(중복 선택 가능)</label>
                                    <div class="form-row mb-ten custom-checkbox-btns">
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" name="example5" />
                                                <label class="custom-control-label" for="customCheck1">국어</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2" name="example5" />
                                                <label class="custom-control-label" for="customCheck2">영어</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck3" name="example5" />
                                                <label class="custom-control-label" for="customCheck3">수학</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck4" name="example5" />
                                                <label class="custom-control-label" for="customCheck4">과학</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck5" name="example5" />
                                                <label class="custom-control-label" for="customCheck5">기타 과목</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck6" name="example5" />
                                                <label class="custom-control-label" for="customCheck6">기타 레슨</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">수업료 선택</label>
                                    <label class="select-warp">
                                        <select class="form-control">
                                            <option value="" default>20만원 이하</option>
                                            <option value="">25만원</option>
                                            <option value="">30만원</option>
                                            <option value="">35만원</option>
                                            <option value="">40만원</option>
                                            <option value="">45만원</option>
                                            <option value="">50만원 이상</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="form-row">
                                    <div class="form-group label-center col-sm-4 form-col">
                                        <label for="">수업기간 선택</label>
                                    </div>
                                    <div class="form-group col-6 col-sm-4 form-col">
                                        <input id="datepicker1" class="form-control datepicker" placeholder="2020-01-01" />
                                        {/* <!-- <input type="text" readonly class="form-control datepicker" placeholder="2020-01-01"> --> */}
                                    </div>
                                    <div class="form-group col-6 col-sm-4 form-col">
                                        <input id="datepicker2" class="form-control datepicker" placeholder="2020-01-01" />
                                        {/* <!-- <input type="text" readonly class="form-control datepicker" placeholder="2020-01-01"> --> */}
                                    </div>
                                </div>
                                <div class="form-row custom-radio-btns">
                                    <div class="label-center form-group col-sm-4 form-col">
                                        <label for="">선생님 성별 선택</label>
                                    </div>
                                    <div class="col-6 col-sm-4 form-col">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customRadio501" name="example9" />
                                            <label class="custom-control-label" for="customRadio501">남성</label>
                                        </div>
                                    </div>
                                    <div class="col-6 col-sm-4 form-col">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customRadio502" name="example9" />
                                            <label class="custom-control-label" for="customRadio502">여성</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-ten">
                                    <label for="">선생님 연령 선택</label>
                                    <div class="form-row mb-ten custom-radio-btns">
                                        <div class="col-6 col-sm-3 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio201" name="example6" />
                                                <label class="custom-control-label" for="customRadio201">20대</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-3 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio202" name="example6" />
                                                <label class="custom-control-label" for="customRadio202">30대</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-3 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio203" name="example6" />
                                                <label class="custom-control-label" for="customRadio203">40대</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-3 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio204" name="example6" />
                                                <label class="custom-control-label" for="customRadio204">50대 이상</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-ten">
                                    <label for="">선생님 직업 선택</label>
                                    <div class="form-row mb-ten custom-radio-btns">
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio301" name="example7" />
                                                <label class="custom-control-label" for="customRadio301">재/휴학생</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio302" name="example7" />
                                                <label class="custom-control-label" for="customRadio302">졸업생</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio303" name="example7" />
                                                <label class="custom-control-label" for="customRadio303">전문강사</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio304" name="example7" />
                                                <label class="custom-control-label" for="customRadio304">현 학원강사</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio305" name="example7" />
                                                <label class="custom-control-label" for="customRadio305">전 학원강사</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio306" name="example7" />
                                                <label class="custom-control-label" for="customRadio306">사립학교 선생님</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-ten">
                                    <label for="">선생님 경력 선택</label>
                                    <div class="form-row mb-ten custom-radio-btns">
                                        <div class="col-6 col-sm-3 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio401" name="example8" />
                                                <label class="custom-control-label" for="customRadio401">신규</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-3 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio402" name="example8" />
                                                <label class="custom-control-label" for="customRadio402">5년미만</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-3 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio403" name="example8" />
                                                <label class="custom-control-label" for="customRadio403">10년미만</label>
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-3 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="customRadio404" name="example8" />
                                                <label class="custom-control-label" for="customRadio404">10년이상</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-btn-wrap">
                            <button type="button" class="general-btn white-bg">초기화</button>
                            <button type="button" class="general-btn">적용</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="teacher-profile-modal modal fade medium-modal" id="teacher-profile-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="teacher-profile-top">
                            <h5>기초부터 탄탄하게, 즐거운 영어 과외</h5>
                            <h4>25<span>만원 / 총 10회</span></h4>
                            <a href="#" class="general-btn green-bg">과외 신청하기</a>
                        </div>
                        <div class="teacher-profile-main teacter-detail-wrap online">
                            <div class="teacter-detail-top-wrap">
                                <div class="teacher-img">
                                    <img src="images/changing-info-img.png" alt="" />
                                </div>
                                <div class="teacher-name">
                                    <h6>Kimdowon 전문영어강사</h6>
                                    <p>영어강사만 10년 이상! 수능 만점을 향한 지름길입니다.<br /> 대전 서구 / 고등·성인 / 영어(고등영어,수능영어,면접영어,영어..)</p>
                                </div>
                                <button type="button" onclick="location.href='my-tutoring-massage.html';" class="general-btn">메시지 보내기</button>
                            </div>
                            <div class="teacter-more-detail-wrap">
                                <div class="row teacter-skills-row">
                                    <div class="teacter-skills-col">
                                        <ul>
                                            <li>
                                                <span>과 목</span>
                                                <span>영어 | 수능영어,면접영어 등</span>
                                            </li>
                                            <li>
                                                <span>교 과</span>
                                                <span> 고등 1~3학년 | 성인</span>
                                            </li>
                                            <li>
                                                <span>난이도</span>
                                                <span>중위</span>
                                            </li>
                                            <li>
                                                <span>진행시간</span>
                                                <span>60분 수업 / 총 10회</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="teacter-skills-col">
                                        <ul>
                                            <li>
                                                <span>현재 등록 인원</span>
                                                <span>2명 / 총 10명</span>
                                            </li>
                                            <li>
                                                <span>모집기간</span>
                                                <span>2020-01-01~2020-01-31</span>
                                            </li>
                                            <li>
                                                <span>과외장소</span>
                                                <span> 대전 서구</span>
                                            </li>
                                            <li>
                                                <span>수업기간</span>
                                                <span>2020-02-01~2020-02-29</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="tutor-intro">
                                <h5>과외 소개</h5>
                                <ul>
                                    <li>[수업교재]</li>
                                    <li>수업은 주교재 및 보조자료로 진행됩니다.</li>
                                    <li> 제가 주로 쓰는 교재가 있지만 학생 및 학부모님과 협의 가능합니다.</li>
                                </ul>
                                <ul>
                                    <li>[진행방식]</li>
                                    <li>1. ~10분 : 숙제 체크 (녹음파일 or 현장 확인) 및 간단한 숙제 테스트(복습차원)</li>
                                    <li>2. ~45분 : 교재 학습</li>
                                    <li>3. ~5분 : 마무리 및 당일 학습에 대한 복습</li>
                                    <li><a href="#">+ 더보기</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="teacher-profile-modal modal fade medium-modal" id="teacher-profile-under-review-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="teacher-profile-top">
                            <h5>기초부터 탄탄하게, 즐거운 영어 과외</h5>
                            <h4>25<span>만원 / 총 10회</span></h4>
                        </div>
                        <div class="teacher-profile-main teacter-detail-wrap online">
                            <div class="teacter-detail-top-wrap">
                                <div class="teacher-img">
                                    <img src="images/changing-info-img.png" alt="" />
                                </div>
                                <div class="teacher-name">
                                    <h6>Kimdowon 전문영어강사</h6>
                                    <p>영어강사만 10년 이상! 수능 만점을 향한 지름길입니다.<br /> 대전 서구 / 고등·성인 / 영어</p>
                                </div>
                                <button type="button" class="general-btn">메시지 보내기</button>
                            </div>
                            <div class="teacter-more-detail-wrap">
                                <div class="row teacter-skills-row">
                                    <div class="teacter-skills-col">
                                        <ul>
                                            <li>
                                                <span>과 목</span>
                                                <span>영어 | 수능영어,면접영어 등</span>
                                            </li>
                                            <li>
                                                <span>교 과</span>
                                                <span> 고등 1~3학년 | 성인</span>
                                            </li>
                                            <li>
                                                <span>난이도</span>
                                                <span>중위</span>
                                            </li>
                                            <li>
                                                <span>진행시간</span>
                                                <span>60분 수업 / 총 10회</span>
                                            </li>
                                            <li>
                                                <span>신청상태</span>
                                                <span><a href="#">선생님 검토중</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="teacter-skills-col">
                                        <ul>
                                            <li>
                                                <span>현재 등록 인원</span>
                                                <span>2명 / 총 10명</span>
                                            </li>
                                            <li>
                                                <span>모집기간</span>
                                                <span>2020-01-01~2020-01-31</span>
                                            </li>
                                            <li>
                                                <span>과외장소</span>
                                                <span> 대전 서구</span>
                                            </li>
                                            <li>
                                                <span>수업기간</span>
                                                <span>2020-02-01~2020-02-29</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="tutor-intro">
                                <h5>과외 소개</h5>
                                <ul>
                                    <li>[수업교재]</li>
                                    <li>수업은 주교재 및 보조자료로 진행됩니다.</li>
                                    <li> 제가 주로 쓰는 교재가 있지만 학생 및 학부모님과 협의 가능합니다.</li>
                                </ul>
                                <ul>
                                    <li>[진행방식]</li>
                                    <li>1. ~10분 : 숙제 체크 (녹음파일 or 현장 확인) 및 간단한 숙제 테스트(복습차원)</li>
                                    <li>2. ~45분 : 교재 학습</li>
                                    <li>3. ~5분 : 마무리 및 당일 학습에 대한 복습</li>
                                    <li><a href="#">+ 더보기</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="student-profile-modal teacher-profile-modal modal fade medium-modal" id="student-profile-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="teacher-profile-top">
                        </div>
                        <div class="teacher-profile-main teacter-detail-wrap online">
                            <div class="teacter-detail-top-wrap">

                                <div class="teacher-name">
                                    <h6>학생의 닉네임 표기</h6>
                                    <p>[과외 구함 상태] 과외 생각중이에요</p>
                                </div>
                                <button type="button" class="general-btn green-bg">메시지 보내기</button>
                            </div>
                            <div class="teacter-more-detail-wrap">
                                <div class="row teacter-skills-row">
                                    <div class="teacter-skills-col">
                                        <ul>
                                            <li>
                                                <span>성 별</span>
                                                <span>여자</span>
                                            </li>
                                            <li>
                                                <span>과 목</span>
                                                <span>수학, 영어, 과학</span>
                                            </li>
                                            <li>
                                                <span>교 과</span>
                                                <span>중학교</span>
                                            </li>
                                            <li>
                                                <span>난이도</span>
                                                <span>3학년 중위</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="teacter-skills-col">
                                        <ul>
                                            <li>
                                                <span>과외장소</span>
                                                <span>대전 서구, 대전 유성구</span>
                                            </li>
                                            <li>
                                                <span>수업요일</span>
                                                <span>평일(월~금)</span>
                                            </li>
                                            <li>
                                                <span>수업시간</span>
                                                <span>12:00pm~17:00pm</span>
                                            </li>
                                            <li>
                                                <span>수업료</span>
                                                <span>30만원 이하</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="tutor-intro">
                                <h5>선생님께 원하는 한마디</h5>
                                <ul>
                                    <li>[수업교재]저는 중학교 3학년 학생입니다.</li>
                                    <li>수학,영어 위주의 과외를 구하는 중이고 과학의 별도로 짧은 시간 과외 생각하고 있습니다.</li>
                                    <li>잘 부탁드리겠습니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="https://cdn.rawgit.com/atatanasov/gijgo/master/dist/combined/js/gijgo.min.js" type="text/javascript"></script>
        <script src="js/custom.js"></script>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument