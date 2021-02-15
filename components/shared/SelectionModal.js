import React, { useEffect, useState } from 'react'
import { toast , ToastContainer } from 'react-toastify'
export default function SelectionModal({ id ,  category , formik , name , isSingle = false , handleDel}) {


    const [currentCategory , setCurrentCategory] = useState(category[0])
   
    const [currentSubCategory , setCurrentSubCategory] = useState(category[0].subCategory[0])




    useEffect(() => {

        setCurrentSubCategory(currentCategory.subCategory[0])
        console.log(currentCategory.subCategory[0])

    },[currentCategory])



    const handleApplyBtn = (e) => {
        e.preventDefault()
        // setValues([...values , { id:currentSubCategory.id }])


        if(isSingle){

            if(formik.values[name].length > 0){
                toast.warn('Can only select one value')
                
            }else {
                formik.setFieldValue(name ,[...formik.values[name] , {...currentSubCategory , mainCtgryname:currentCategory.name}])
                $(`#${id}`).modal('hide')
            }

        }else {

           const valueExists = formik.values[name].find(val => val.id == currentSubCategory.id)
            if(valueExists === undefined){
                formik.setFieldValue(name , [...formik.values[name] , {...currentSubCategory , mainCtgryname:currentCategory.name}])
                $(`#${id}`).modal('hide')
            }else {
                toast.warn('Value is already selected');
                // alert('value already selected');
            }
        }
      
    }


    


    return (
    

        <div class="grouping-service-modal region-selection-modal modal fade small-modal" id={id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="region-selection-top">
                        <h6>지역 선택</h6>
                        <ul>
                            {
                                formik.values[name].map(value => {
                                    return  <li key={value.id}><a href="#">{value.name} , {value.mainCtgryname}<span onClick={(e) => handleDel(e , value.id)}>&times;</span></a></li>
                                })
                            }
                           
                            {/* <li><a href="#">대전광역시 중구<span>&times;</span></a></li> */}
                        </ul>
                    </div>
                    <div class="region-selection-main">
                        <div class="row">
                            <div class="col-sm-6 col-6">
                                <div class="custom-radio-btns">
                                    {
                                        category.map(ctgry => {
                                            return (
                                                <div key={`${id}-${ctgry.name}-${ctgry.id}`} class="custom-control custom-radio">
                                                <input onChange={(e) => setCurrentCategory(ctgry)} type="radio" class="custom-control-input" id={`${id}-${ctgry.name}-${ctgry.id}`} name={`${id}-main-category`} defaultChecked={currentCategory.id == ctgry.id ? true:false} />
                                                <label class="custom-control-label" for={`${id}-${ctgry.name}-${ctgry.id}`}>{ctgry.name}</label>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div class="col-sm-6 col-6">
                                <div class="custom-radio-checkbox">
                                    {
                                        currentCategory.subCategory.map(subCtgry => {
                                            return (
                                                <div key={`${id}-${subCtgry.name}-${subCtgry.id}`} class="custom-control custom-radio">
                                                <input type="radio" onChange={(e) => setCurrentSubCategory(subCtgry)} class="custom-control-input" id={`${id}-${subCtgry.name}-${subCtgry.id}`} name={`${id}-sub-category`} defaultChecked={currentSubCategory.id == subCtgry.id ? true:false} />
                                                <label class="custom-control-label" for={`${id}-${subCtgry.name}-${subCtgry.id}`}>{subCtgry.name}</label>
                                               </div>
                                           
                                            )
                                        })
                                    }
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-btn-wrap">
                        <button type="button" class="general-btn white-bg">초기화</button>
                        <button onClick={handleApplyBtn} type="button" class="general-btn">적용</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
