import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { STRAPI_HOST_URL } from '../config/strapiConfig'
import { toast } from 'react-toastify'

export default function FinalSchoolSelectionModal({ universities , name , formik2 }) {

    const formik = useFormik({
        initialValues:{
            isdomestic:'true',
            degree:'학사',
            university:{ id:universities[0].id },
            major:'',
            country:'',
            universityName:''
        },
        isInitialValid:() => false,
        initialErrors:{
            major:"Please select Your major",
            // country:"Please select a country",
            // universityName:"Please select a university name",


        },
        validate:(values) => {

            const errors = {}
            if(values.isdomestic === 'true'){
                if(!values.major){
                    errors.major = "Please select Your major"
                }
                return errors
            }else{
                if(!values.country){
                    errors.country = "Please select a country"
                }

                if(!values.universityName){
                    errors.universityName = "Please select a university name"
                }

                return errors
            }
           
        },
        onSubmit:(values) => {

            if(values.isdomestic === 'true'){


                formik2.setFieldValue(name , { 
                    isdomestic:values.isdomestic ,
                    degree:values.degree,
                    university:values.university,
                    major:values.major,
                    universityName:universities.find(uni => uni.id == values.university.id).name
                
                 })

              
            }else {

                    formik2.setFieldValue(name , { 
                        isdomestic:values.isdomestic ,
                        degree:values.degree,
                        university:null,
                        major:values.major,
                        universityName:values.universityName
                     })
              
            }

            $(`#final-school-overseas-modal`).modal('hide')


     
        }
    })

    // useEffect(() => {

    //     formik.setFieldValue('major' , '')
    //     formik.setFieldValue('country' , '')
    //     formik.setFieldValue('universityName' , '')

    // }, [formik.values.isdomestic])



    return (
        <div class="grouping-service-modal advance-search-modal final-school-modal final-school-overseas-modal modal fade small-modal" id="final-school-overseas-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="region-selection-top">
                        <h6>최종 학력 선택</h6>
                    </div>
                    <div class="region-selection-main">
                        <form action="">
                            <div class="form-row custom-radio-btns">
                                <div class="label-center form-group col-sm-4 form-col">
                                    <label for="">학교 구분</label>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" onChange={formik.handleChange} value={true} id="customRadio941" name="isdomestic" defaultChecked />
                                        <label class="custom-control-label" for="customRadio941">국내</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 form-col">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" onChange={formik.handleChange} value={false} id="customRadio942" name="isdomestic"  />
                                        <label class="custom-control-label" for="customRadio942">해외</label>
                                    </div>
                                </div>
                            </div>
                            {
                                formik.values.isdomestic === "false" ?
                                (
                                    <div class="form-group">
                                        <label for="" class="search-wrap">
                                            <input type="text" name="country" onChange={formik.handleChange} class="form-control" placeholder="국가를 선택해 주세요" />
                                        </label>
                                    </div>
                                ):null
                            }
                            
                            <div class="form-group">
                            {
                                formik.values.isdomestic === "true" ?
                                (
                 
                                    <label class="select-warp">
                                        <select onChange={formik.handleChange} name="university.id" class="form-control">
                                            {
                                                universities.map(uni => {
                                                    return  <option key={uni.id}  value={uni.id}>{uni.name}</option>
                                                })
                                            }
                                       
                                        </select>
                                    </label>

                                ):(
                                    <input type="text" name="universityName" onChange={formik.handleChange} class="form-control" placeholder="학교명을 입력해 주세요" />
                                )
                            }
                            </div>
                            <div class="form-row">
                                <div class="col-12 col-sm-6">
                                    <input type="text" name="major" onChange={formik.handleChange} class="form-control" placeholder="학과를 입력해 주세요" />
                                </div>
                                <div class="col-12 col-sm-6">
                                    <label class="select-warp">
                                        <select class="form-control" name="degree" onChange={formik.handleChange}>
                                            <option value="학사" default>학사</option>
                                            <option value="주인">주인</option>
                                            <option value="의사들">의사들</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-btn-wrap">
                        <button type="button" class="general-btn white-gray-btn">초기화</button>
                        <button onClick={() => {
                            if(formik.isValid){
                                formik.handleSubmit()
                            }else {
                                console.log(formik.errors)
                                toast.error(formik.errors[Object.keys(formik.errors)[0].toString()])
                            }
                        }} type="button" class="general-btn">적용</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
