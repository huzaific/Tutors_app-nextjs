import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import SelectionModal from "../components/shared/SelectionModal";
import { STRAPI_HOST_URL } from "../config/strapiConfig";
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const Signup = ({ cities , schoolLevels , studentSkills , subjects }) => {
    const router = useRouter()
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
        const filtered = formik.values.desired_area_for_direct_tutorings.filter(val => val.id != id)
        formik.setFieldValue('desired_area_for_direct_tutorings' , filtered)

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
            isstudent:true,
            isurgent:false,
            gender:'male',
            last_school_attending_name:"",
            available_day_time_for_tutoring:'',
            budget:'',
            comment:'',
            student_skill:studentSkills.length > 0 ? { id:studentSkills[0].id } : null,
            subjects:[],
            desired_area_for_direct_tutorings:[],
            residence_area:[],
            school_types:[],
            accept_the_terms:false,
            agree_to_the_privacy_policy:false,
            refund_policy:false
        },
        initialErrors: {
            email:'Enter your email address',
            password :"Enter password",
            re_password :"Password does not match",
            nickname :"Enter your nickname",
            desired_area_for_direct_tutorings : "Please select atleast one area for tutoring",
            residence_area : "Please select your residence area",
            school_types : "Please select atleast one school type",
            available_day_time_for_tutoring : "Enter the available time for tutoring",
            subjects : "Please select atleast one subject",
            comment : "Enter your comments",
            accept_the_terms : "Please accept the terms and conditions"


        },
        isInitialValid:() => false ,
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
                errors.re_password = "Field is required"
            }else if(values.password !== values.re_password){
                errors.re_password = "Password does not match"
            }

            if(!values.nickname){
                errors.nickname = "Enter your nickname"
            }
    
          
            if(values.desired_area_for_direct_tutorings.length <= 0){
                errors.desired_area_for_direct_tutorings = "Please select atleast one area for tutoring"
            }
            
            if(values.residence_area.length <= 0){
                errors.residence_area = "Please select your residence area"
                }
    
            if(values.school_types.length <= 0){
                errors.school_types = "Please select atleast one school type"
            }

           

            if(!values.available_day_time_for_tutoring){
                errors.available_day_time_for_tutoring = "Enter the available time for tutoring"
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


            return errors;

        },
        onSubmit: (values) => {

            const desired_area_for_direct_tutorings = values.desired_area_for_direct_tutorings.map(value => {
                return {
                    id:value.id
                }
            })

            const residence_area =  { id:values.residence_area[0].id }

            const school_types = values.school_types.map(val => {
                return { id:val.id }
            })

            const subjects = values.subjects.map(val => JSON.parse(val))

            
            const user = {
                email:values.email,
                password:values.password,
                username:values.nickname,
                phone_number:values.phone_number,
                phone_number_verification_code:3454
            }

            const student = {
                nickname:values.nickname,
                isstudent:values.isstudent,
                isurgent:values.isurgent,
                gender:values.gender,
                last_school_attending_name:values.last_school_attending_name,
                available_day_time_for_tutoring:values.available_day_time_for_tutoring,
                budget:values.budget,
                comment:values.comment,
                accept_the_terms:values.accept_the_terms,
                agree_to_the_privacy_policy:values.agree_to_the_privacy_policy,
                refund_policy:values.refund_policy,
                student_skill:values.student_skill,
                subjects,
                desired_area_for_direct_tutorings,
                residence_area,
                school_types
            }

            console.log(student)

            axios.post(`${STRAPI_HOST_URL}/users` , user)
            .then(response => {
                return axios.post(`${STRAPI_HOST_URL}/students` , {...student , user:{id:response.data.id }})
            })
            .then(response => {
                toast.success('Student registered' , { onClose:(props) => router.push('/')})
            })
            .catch(err => {
                toast.error('Student registeration failed')
            })

       
            
            


    
        }
    })
    
    return ( 
        <>
   
  <div class="content">
            <section class="login-wrap signup-wrap student-modification-profile advance-search-modal">
                <div class="container">
                    <div class="login-content region-selection-main">
                        <div class="signup-content">
                            <h2>회원가입</h2>
                            <p>반갑습니다. 학생 또는 학부님이 맞으신가요? <a href="/signup-teacher">선생님께서는 여기에서 가입해주세요!</a></p>
                            <div class="radio-btn-wrap">
                                <div class="form-check">
                                    <input class="form-check-input" onChange={formik.handleChange} type="radio" name="isstudent" id="exampleRadios1" value={true} defaultChecked />
                                    <label class="form-check-label" for="exampleRadios1">
                                        네,학생입니다.
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" onChange={formik.handleChange} type="radio" name="isstudent" id="exampleRadios2" value={false} />
                                    <label class="form-check-label" for="exampleRadios2">
                                        네, 학부모입니다.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <form action="">
                            <div class="form-group">
                                <label for="">이메일 계정을 입력해주세요.</label>
                                <input type="text" name="email" onChange={formik.handleChange} class="form-control" placeholder="예시) grouping1004@gmail.com" />
                            </div>
                            <div class="form-group">
                                <label for="">비밀번호를 입력해주세요.</label>
                                <input type="text" name="password" onChange={formik.handleChange} class="form-control" placeholder="비밀번호를 입력해주세요" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="re_password" onChange={formik.handleChange} class="form-control" placeholder="비밀번호를 재입력해주세요" />
                                <span>※ 8~16자 이내의 영문, 숫자, 특수문자 중 2가지 이상 포함</span>
                            </div>
                            <div class="form-group">
                                <label for="">닉네임을 입력해주세요.</label>
                                <input type="text" name="nickname" onChange={formik.handleChange} class="form-control" placeholder="닉네임을 입력해주세요." />
                                <span>※ 문자, 숫자로 조합된 2~10글자 이내</span>
                            </div>
                            <div class="form-row custom-radio-btns">
                                <label for="">지금 과외를 구하고 있나요?</label>
                                <div class="form-group col-6 col-sm-6 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" onChange={formik.handleChange} value={true} id="customRadio751" name="isurgent" />
                                        <label class="custom-control-label" for="customRadio751">과외가 급해요</label>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-6 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" onChange={formik.handleChange} value={false} id="customRadio752" name="isurgent" defaultChecked/>
                                        <label class="custom-control-label" for="customRadio752">생각중이예요</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row custom-radio-btns">
                                <label for="">학생의 성별을 알려주세요</label>
                                <div class="form-group col-6 col-sm-6 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio801" value="male" onChange={formik.handleChange} name="gender" defaultChecked />
                                        <label class="custom-control-label" for="customRadio801">남성</label>
                                    </div>
                                </div>
                                <div class="form-group col-6 col-sm-6 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="customRadio802" value="female" onChange={formik.handleChange} name="gender" />
                                        <label class="custom-control-label" for="customRadio802">여성</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group modal-popup-wrap">
                                <label for="">직접 과외 희망 지역을 선택해주세요<span>(중복선택 가능)</span></label>
                                <a href="#" class="modal-popup" data-toggle="modal" data-target="#region-selection-modal" onClick={() => {
                                    if(cities.length <= 0){
                                        toast.info("No cities available")
                                    }
                                }}>
                                    <span>지역 선택</span><span>&plus;</span>
                                </a>
                                <ul class="search-select-option black-bg">
                                    {
                                        formik.values.desired_area_for_direct_tutorings.map(value => {
                                            return  <li key={value.id}><a href="#">{value.name} , {value.mainCtgryname}<span onClick={(e) => handleTutoringareasDel(e , value.id)}>×</span></a></li>
                                        })
                                    }
                                    {/* <li><a href="#">대전광역시 서구<span>×</span></a></li>
                                    <li><a href="#">대전광역시 중구<span>×</span></a></li>
                                    <li><a href="#">대전광역시 유성구<span>×</span></a></li> */}
                                </ul>
                            </div>
                            <div class="form-group modal-popup-wrap">
                                <label for="">학생의 거주 지역을 선택해주세요</label>
                                <a href="#" class="modal-popup" data-toggle="modal" data-target="#residence-selection-modal" onClick={() => {
                                    if(cities.length <= 0){
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
                            <div class="form-group modal-popup-wrap">
                                <label for="">과외 받을 학생의 교과를 선택해주세요</label>
                                <a href="#" class="modal-popup" data-toggle="modal" data-target="#course-selection-modal" onClick={() => {
                                    if(schoolLevels.length <= 0){
                                        toast.info("No cities available")
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
                            <div class="form-row">
                                <label for="">재학 중인 학교명을 선택해주세요</label>
                                <div class="form-group col-7 col-sm-8 form-col">
                                    <input name="last_school_attending_name" onChange={formik.handleChange} type="text" placeholder="재학 중인 학교를 선택해주세요" />
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
                                {
                                    studentSkills.map(skill => {
                                        return (
                                            <div class="form-group col-6 col-sm-4 form-col">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id={`skill-${skill.id}`} onChange={formik.handleChange} name="student_skill.id" value={skill.id} defaultChecked={formik.values.student_skill.id == skill.id ? true:false} />
                                                <label class="custom-control-label" for={`skill-${skill.id}`}>{skill.skill}</label>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                             
                            </div>
                            <div class="form-row custom-checkbox-btns">
                                <label for="">과의를 희망하는 과목을 선택해주세요(중복선택 가능)</label>
                                {
                                    subjects.map(subject => {
                                        return (
                                            <div class="col-6 col-sm-4 form-col">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" value={JSON.stringify({ id:subject.id })} onChange={formik.handleChange} class="custom-control-input" id={`subject-${subject.id}`} name="subjects" />
                                                    <label class="custom-control-label" for={`subject-${subject.id}`}>{subject.name}</label>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                           
                            </div>
                            <div class="form-group">
                                <label for="">과외 가능 요일/시간을 작성해주세요</label>
                                <input name="available_day_time_for_tutoring" onChange={formik.handleChange} type="text" class="form-control" placeholder="예시) 평일(월~금) / 12:00~18:00" />
                            </div>
                            <div class="form-group">
                                <label for="">과목당 월 최대 예산을 선택해주세요</label>
                                <label class="select-warp">
                                    <select onChange={formik.handleChange} name="budget" class="form-control">
                                        <option value="Choice 0" default>선택</option>
                                        <option value="Choice 1">선택1</option>
                                        <option value="Choice 2">선택2</option>
                                        <option value="Choice 3">선택3</option>
                                    </select>
                                </label>
                            </div>
                            <div class="form-group">
                                <label for="">학생의 상황, 과외 선생님께 바라는 것을 작성해주세요</label>
                                <input type="text" name="comment" onChange={formik.handleChange} class="form-control" placeholder="예시) 집중력이 부족하고 주의가 산만합니다. 학교 수업만으로는 부족한 것 같습니다." />
                            </div>
                            <div class="form-row verify-number">
                                <label for="">과의를 희망하는 과목휴대폰 번호를 인증해주세요</label>
                                <p>※ 연락처는 선생님들에게 공개되지 않습니다. 가입 및 인증 용도입니다.</p>
                                <div class="form-group col-7 col-sm-8 form-col">
                                    <input type="text" name="phone_number" onChange={formik.handleChange} class="form-control" placeholder="휴대폰 번호를 입력해주세요" />
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
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" onChange={formik.handleChange} defaultValue={false} name="accept_the_terms"  id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    <span>전체약관 동의</span>
                                    개인정보 취급방침, <a href="#">그루핑의 이용약관</a> 및 <a href="#">환불규정에</a> 동의합니다.
                                </label>
                            </div>
                            <div class="form-group edit-profile-btn">
                                <button onClick={() => {
                                    if(formik.isValid){
                                        formik.handleSubmit()
                                    }else {
                                        console.log(formik.errors)
                                        toast.info(formik.errors[Object.keys(formik.errors)[0].toString()])
                                    }
                                }} type="button" class="general-btn green-bg">가입완료하고 과외선생님 찾기</button>
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
            <SelectionModal id="region-selection-modal" name="desired_area_for_direct_tutorings" formik={formik} handleDel={handleTutoringareasDel} category={cityCategory} />
        <SelectionModal id="residence-selection-modal" name="residence_area" formik={formik} handleDel={handleResidenceareaDel} category={cityCategory} isSingle={true} />
          </>
      ):null
  }
  {
      schoolLevels.length > 0 ?
      (  <SelectionModal id="course-selection-modal" name="school_types" formik={formik} handleDel={handleSchoolTypeDel} category={schoolLevelsCategory}  />):null
  }

      
       
        </>
       
     );
}

export const getStaticProps = async (context) => {

        const cities = await axios.get(`${STRAPI_HOST_URL}/cities`)
        const schoolLevels = await axios.get(`${STRAPI_HOST_URL}/school-levels`)
        const studentSkills = await axios.get(`${STRAPI_HOST_URL}/student-skills`)
        const subjects = await axios.get(`${STRAPI_HOST_URL}/subjects`)

        return {
            props:{
                cities:cities.data,
                schoolLevels:schoolLevels.data,
                studentSkills:studentSkills.data,
                subjects:subjects.data
            }
        }

   
  
}

export default Signup;
        