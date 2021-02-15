import axios from "axios";
import { useFormik } from "formik";
import FinalSchoolSelectionModal from "../components/FinalSchoolSelectionModal";
import SelectionModal from "../components/shared/SelectionModal";
import { STRAPI_HOST_URL } from "../config/strapiConfig";
import { toast } from 'react-toastify'
import ImageUpload from "../components/shared/ImageUpload";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

const SignupTeacher = ({ subjects , cities , schoolLevels , universities }) => {

    const router = useRouter()

    const [profileImage , setProfileImage] = useState({ file:{}  , url:'images/comment-student-img.png'})

    let cityCategory , schoolLevelsCategory
    if(cities.length > 0){

        cityCategory = cities.map(city => {
            return {
                id:city.id,
                name:city.name,
                subCategory:city.areas.map(area => {
                    return {
                        id:area.id,
                        name:area.name,
                    }
                })
            }
        })
    }

    if(schoolLevels.length > 0){
        schoolLevelsCategory = schoolLevels.map(level => {
            return {
                id:level.id,
                name:level.level,
                subCategory:level.school_grades.map(grade => {
                    return {
                        id:grade.id,
                        name:grade.grade
                    }
                })
            }
        })
    }
  

    

    const handleTutoringareasDel = (e , id) => {

        e.preventDefault()
        const filtered = formik.values.available_tutoring_areas.filter(val => val.id != id)
        formik.setFieldValue('available_tutoring_areas' , filtered)

    }

    const handleResidenceareaDel = (e) => {
        e.preventDefault()
        formik.setFieldValue('residence_area' , [])
    }

    const handleSchoolTypeDel = (e , id) => {
        e.preventDefault()
        const filtered = formik.values.school_types.filter(val => val.id != id)
        formik.setFieldValue('school_types' , filtered)
    }


    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
            re_password:'',
            phone_number:'',
            nickname:'',
            gender:'male',
            age:'20대',
            career:'신규',
            job:'재/휴학생',
            available_tutoring_areas:[],
            residence_area:[],
            school_types:[],
            subjects:[],
            tutor_documents:[],
            tutor_final_school:null,
            comment:'',
        },
        initialErrors:{

            email:'Enter your email address',
            password :"Enter password",
            re_password :"Password does not match",
            nickname :"Enter your nickname",
            available_tutoring_areas : "Please select atleast one area for tutoring",
            residence_area : "Please select your residence area",
            tutor_final_school: "Select your final school",
            school_types : "Please select atleast one school type",
            subjects : "Please select atleast one subject",
            comment : "Enter your comments",
            phone_number: "Please enter your phone number",
            accept_the_terms : "Please accept the terms and conditions"

        },
        validate:(values) => {

            const errors = {}

            if (!values.email) {
                errors.email = 'Enter your email address';
         
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
    
            if(!values.password) {
                errors.password = "Enter password"
            }
    
            if(!values.re_password){
                errors.re_password = "retype your password"
            }else if(values.password !== values.re_password){
                errors.re_password = "Password does not match"
            }

            if(!values.nickname){
                errors.nickname = "Enter your nickname"
            }
    
          
            if(values.available_tutoring_areas.length <= 0){
                errors.available_tutoring_areas = "Please select atleast one area for tutoring"
            }
            
            if(values.residence_area.length <= 0){
                errors.residence_area = "Please select your residence area"
                }

            if(values.tutor_final_school === null){
                errors.tutor_final_school = "Please select Your final school"
            }
            if(values.school_types.length <= 0){
                errors.school_types = "Please select atleast one school type"
            }

           
            if(values.subjects.length <= 0) {
                errors.subjects = "Please select atleast one subject"
            }
            
            
            if(!values.comment){
                errors.comment = "Enter your comments"
            }

            if(values.accept_the_terms == false){
                errors.accept_the_terms = "Please accept the terms and conditions"
            }

            return errors
            

        },
        onSubmit:async (values) => {

            const available_tutoring_area = values.available_tutoring_areas.map(area => {
                return { id:area.id }
            })

            const residence_area =  { id:values.residence_area[0].id }

            const school_type = values.school_types.map(val => {
                return { id:val.id }
            })
            
            const subjects = values.subjects.map(val => {return { id:val }})

            const user = {
                email:values.email,
                username:values.nickname,
                password:values.password,
                phone_number:values.phone_number,
                phone_number_verification_code:345
            }

            const tutor = {

                nickname:values.nickname,
                gender:values.gender,
                age:values.age,
                career:values.career,
                job:values.job,
                comment:values.comment,
                accept_the_terms:true,
                school_type,
                available_tutoring_area,
                residence_area,
                subjects
            }
         
            let tutorFinalSchool = {}

            try {
            if(values.tutor_final_school.isdomestic === 'true'){
                tutorFinalSchool = {
                    major:values.tutor_final_school.major,
                    degree:values.tutor_final_school.degree,
                    isdomestic:true,
                    university:values.tutor_final_school.university
                }
            }else {
                const university = await axios.post(`${STRAPI_HOST_URL}/universities` , { name:values.tutor_final_school.universityName , country:values.tutor_final_school.country})
                tutorFinalSchool = {
                    major:values.tutor_final_school.major,
                    degree:values.tutor_final_school.degree,
                    isdomestic:false,
                    university:{ id:university.data.id}
                }
            }

            const userResponse = await axios.post(`${STRAPI_HOST_URL}/users` , user)
            console.log(userResponse.data.id)
            const tutorResponse = await axios.post(`${STRAPI_HOST_URL}/tutors` , {...tutor , user:{id:userResponse.data.id}})
            const finalSchoolResponse =  await axios.post(`${STRAPI_HOST_URL}/tutor-final-schools` , { tutorFinalSchool , tutor:{ id:tutorResponse.data.id } })

            toast.success("Tutor added succesfully" , {
                onClose:(props)=> {
                    router.push('/')
                }
            })
        }
        catch(err){
            console.log(JSON.stringify(err))
            // toast.error(JSON.stringify(err))
            toast.error('Tutor registeration failed')
        }
            console.log(values)
        }
    })


    useEffect(() => {

        console.log(formik.values.tutor_final_school)
    },[formik.values.tutor_final_school])
    return ( 
        <>
        <div class="content">
        <section class="login-wrap signup-wrap student-modification-profile advance-search-modal">
            <div class="container">
                <div class="login-content region-selection-main">
                    <div class="signup-content">
                        <h2>회원가입</h2>
                    </div>
                    <form action="">
                        <div class="form-group2">
                            <label for="">프로필 사진을 등록해주세요</label>
                            <div class="register-image-wrap">
                            <div style={{width:'100px' , height:'100px'}}>
                                    <ImageUpload image={profileImage} setImage={setProfileImage} />
                                </div>
                                <div class="register-profilephoto">
                                    <label for="register-profilephoto">프로필 사진 등록하기</label>
                                    <input type="file" id="register-profilephoto" />
                                    <p>※얼굴이 잘 보이는 사진으로 등록해주시기 바랍니다!</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">이메일 계정을 입력해주세요</label>
                            <input name="email" onChange={formik.handleChange} type="text" class="form-control" placeholder="예시) grouping1004@gmail.com" />
                        </div>
                        <div class="form-group">
                            <label for="">비밀번호를 입력해주세요</label>
                            <input name="password" onChange={formik.handleChange} type="password" class="form-control" placeholder="··········" />
                        </div>
                        <div class="form-group">
                            <input name="re_password" onChange={formik.handleChange} type="password" class="form-control" placeholder="··········" />
                            <span>※ 8~16자 이내의 영문, 숫자, 특수문자 중 2가지 이상 포함</span>
                        </div>
                        <div class="form-group">
                            <label for="">닉네임을 입력해주세요</label>
                            <input name="nickname" onChange={formik.handleChange} type="text" class="form-control" placeholder="닉네임을 입력해주세요." />
                            <span>※ 문자, 숫자로 조합된 2~10글자 이내</span>
                        </div>
                        <div class="form-row custom-radio-btns">
                            <label for="">성별을 선택해주세요</label>
                            <div class="form-group col-6 col-sm-6 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" value="male" onChange={formik.handleChange}  id="customRadio751" name="gender" defaultChecked/>
                                    <label class="custom-control-label" for="customRadio751">남성</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-6 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" value="female"  onChange={formik.handleChange} id="customRadio752" name="gender" />
                                    <label class="custom-control-label" for="customRadio752">여성</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row custom-radio-btns">
                            <label for="">선생님의 연령을 선택해주세요</label>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" value="20대" onChange={formik.handleChange}  id="customRadio801" name="age" defaultChecked />
                                    <label class="custom-control-label" for="customRadio801">20대</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" value="30대" onChange={formik.handleChange}  id="customRadio802" name="age" />
                                    <label class="custom-control-label" for="customRadio802">30대</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" value="40대" onChange={formik.handleChange}  id="customRadio803" name="age" />
                                    <label class="custom-control-label" for="customRadio803">40대</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" value="50대 이상" onChange={formik.handleChange} id="customRadio804" name="age"  />
                                    <label class="custom-control-label" for="customRadio804">50대 이상</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row custom-radio-btns">
                            <label for="">선생님의 경력을 선택해주세요</label>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" value="신규" onChange={formik.handleChange}  id="customRadio821" name="career" defaultChecked />
                                    <label class="custom-control-label" for="customRadio821">신규</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" value="5년 미만" onChange={formik.handleChange}  id="customRadio822" name="career" />
                                    <label class="custom-control-label" for="customRadio822">5년 미만</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" value="10년 미만" onChange={formik.handleChange}  id="customRadio823" name="career"/>
                                    <label class="custom-control-label" for="customRadio823">10년 미만</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-3 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" value="10년 이상" onChange={formik.handleChange}  id="customRadio824" name="career" />
                                    <label class="custom-control-label" for="customRadio824">10년 이상</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row custom-radio-btns">
                            <label for="">선생님의 직업을 선택해주세요</label>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" onChange={formik.handleChange} value="재/휴학생" id="customRadio831" name="job" defaultChecked />
                                    <label class="custom-control-label" for="customRadio831">재/휴학생</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input"  onChange={formik.handleChange} value="졸업생" id="customRadio832" name="job" />
                                    <label class="custom-control-label" for="customRadio832">졸업생</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" onChange={formik.handleChange}  value="전문강사" id="customRadio833" name="job"  />
                                    <label class="custom-control-label" for="customRadio833">전문강사</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input"  onChange={formik.handleChange} value="현 학원강사" id="customRadio834" name="job" />
                                    <label class="custom-control-label" for="customRadio834">현 학원강사</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input"  onChange={formik.handleChange} value="전 학원강사" id="customRadio835" name="job" />
                                    <label class="custom-control-label" for="customRadio835">전 학원강사</label>
                                </div>
                            </div>
                            <div class="form-group col-6 col-sm-4 form-col">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input"  onChange={formik.handleChange} value="사립학교 선생님" id="customRadio836" name="job" />
                                    <label class="custom-control-label" for="customRadio836">사립학교 선생님</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group modal-popup-wrap">
                            <label for="">직접 과외 가능 지역을 선택해주세요<span>(중복선택 가능)</span></label>
                            <a href="#" class="modal-popup" data-toggle="modal" data-target="#region-selection-modal"  onClick={() => {
                                if(cities.length <= 0) {
                                    toast.info("No cities available")
                                }
                            }}>
                                <span>지역 선택</span><span>&plus;</span>
                            </a>
                            <ul class="search-select-option black-bg">
                                {
                                    formik.values.available_tutoring_areas.map(value => {
                                        return  <li key={value.id}><a href="#">{value.name} , {value.mainCtgryname}<span onClick={(e) => handleTutoringareasDel(e , value.id)}>×</span></a></li>
                                    })
                                }
                            </ul>
                        </div>
                        <div class="form-group modal-popup-wrap">
                            <label for="">선생님의 거주 지역을 선택해주세요</label>
                            <a href="#" class="modal-popup" data-toggle="modal" data-target="#residence-selection-modal" onClick={() => {
                                if(cities.length <= 0) {
                                    toast.info("No cities available")
                                }
                            }}>
                                <span>지역 선택</span><span>&plus;</span>
                            </a>
                            <ul class="search-select-option black-bg">
                            {
                                        formik.values.residence_area.map(value => {
                                            return <li key={value.id}><a href="#">{value.name} , {value.mainCtgryname}<span onClick={(e) => handleResidenceareaDel(e , value.id)} >×</span></a></li>
                                        })
                                    }
                            </ul>
                        </div>
                        <div class="form-group">
                            <label for="">선생님의 최종 학력을 입력해주세요</label>
                            <div class="form-row">
                                <div class="form-group col-7 col-sm-8 form-col">
                                    <input type="text" placeholder="최종 학력을 입력해주세요" />
                                </div>
                                <div class="form-group col-5 col-sm-4 form-col">
                                    <a href="#" class="general-btn search-modal-btn" data-toggle="modal" data-target="#final-school-overseas-modal">검색하기</a>
                                </div>
                            </div>
                            <ul class="search-select-option black-bg">
                                {
                                    formik.values.tutor_final_school?
                                    (
                                        <li><a href="#">{formik.values.tutor_final_school.universityName}<span>×</span></a></li>
                                    ):null
                                }
                               
                            </ul>
                        </div>
                        <div class="form-group modal-popup-wrap">
                            <label for="">전문 과의 교과를 선택해주세요<span>(중복선택 가능)</span></label>
                            <a href="#" class="modal-popup" data-toggle="modal" data-target={schoolLevels.length > 0 ? "#course-selection-modal":null} onClick={() => {
                                if(schoolLevels.length <= 0){
                                    toast.info("No schools available")
                                }
                            }}>
                                <span>교과 선택</span><span>&plus;</span>
                            </a>
                            <ul class="search-select-option black-bg">
                            {
                                        formik.values.school_types.map(value => {
                                            return <li key={value.id}><a href="#">{value.name} , {value.mainCtgryname}<span onClick={(e) => handleSchoolTypeDel(e , value.id)}>×</span></a></li>
                                        })
                                    }
                            </ul>
                        </div>
                        <div class="form-row custom-checkbox-btns">
                            <label for="">전문 과외 과목을 선택해주세요<span>(중복선택 가능)</span></label>
                            {
                                subjects.map(subject => {
                                    return (
                                        <div key={subject.id} class="col-6 col-sm-4 form-col">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" value={subject.id} onChange={formik.handleChange} class="custom-control-input" id={`subject-${subject.id}`} name="subjects" />
                                            <label class="custom-control-label" for={`subject-${subject.id}`}>{subject.name}</label>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                          
                          
                        </div>
                        <div class="form-group">
                            <label for="">선생님의 신분증을 등록해주세요</label>
                            <label for="" class="choose-file">
                                <input type="file" class="form-control" />
                                파일첨부
                            </label>
                            <span>※ 학생증, 졸업증명서, 개인과외교습신고증명서 등이 가능합니다.</span>
                            <span class="mt-0"> 본 절차는 그루핑 인증을 위한 절차이며 등록해주신 증명서는 전체 비공개 입니다.</span>
                        </div>
                        <div class="form-group">
                            <label for="">선생님의 간단한 한줄 소개를 작성해주세요</label>
                            <input type="text" class="form-control" name="comment" onChange={formik.handleChange} placeholder="예시) 수학 과외경력만 10년, 어떤 선생님한테 배우냐에 따라 다릅니다." />
                        </div>
                        <div class="form-row verify-number">
                            <label for="">휴대폰 번호를 인증해주세요</label>
                            <p>※ 연락처는 선생님들에게 공개되지 않습니다. 가입 및 인증 용도입니다.</p>
                            <div class="form-group col-7 col-sm-8 form-col">
                                <input name="phone_number" onChange={formik.handleChange} type="text" class="form-control" placeholder="휴대폰 번호를 입력해주세요" />
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

                        <div class="form-group edit-profile-btn">
                            <button type="button" onClick={() => {
                                if(formik.isValid){
                                    formik.handleSubmit()
                                }else {
                                    console.log(formik.errors)
                                    toast.error(formik.errors[Object.keys(formik.errors)[0].toString()])
                                }
                            }} class="general-btn green-bg">그루핑 선생님으로 가입하기</button>
                        </div>
                    </form>
                </div>
            
            </div>
        </section>
    </div>
  {
      cities.length > 0 ?
      (
          <>
            <SelectionModal id="region-selection-modal" name="available_tutoring_areas" formik={formik} handleDel={handleTutoringareasDel} category={cityCategory} />
            <SelectionModal id="residence-selection-modal" name="residence_area" formik={formik} handleDel={handleResidenceareaDel} category={cityCategory} isSingle={true} />
          </>
      ):null
  }
  {
      schoolLevels.length > 0 ?
      (  <SelectionModal id="course-selection-modal" name="school_types" formik={formik} handleDel={handleSchoolTypeDel} category={schoolLevelsCategory}  />):null
  }
            
          
            <FinalSchoolSelectionModal formik2={formik} name="tutor_final_school" universities={universities} />
  
    </>
   
     );
}
 
export default SignupTeacher;

export const getStaticProps = async (context) => {

    const cities = await axios.get(`${STRAPI_HOST_URL}/cities`)
    const schoolLevels = await axios.get(`${STRAPI_HOST_URL}/school-levels`)
    const subjects = await axios.get(`${STRAPI_HOST_URL}/subjects`)
    const universities = await axios.get(`${STRAPI_HOST_URL}/universities`)

    return {
        props: {
            cities:cities.data,
            schoolLevels:schoolLevels.data,
            subjects:subjects.data,
            universities:universities.data
        }
    }
}
       