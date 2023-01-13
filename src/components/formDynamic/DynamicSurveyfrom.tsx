import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "../customer_forms/customer.scss";
import ShapeSvg from "../../assets/images/Combined-Shape.svg";
import whiteSvg from "../../assets/images/white.svg";
import LogoBlackSvg from "../../assets/images/Logo-Black.svg";
import apiRes from "../tempData.Json";



function CustomerForm() {
  const copyOfJsonData = apiRes.data.slice();

  const [inputValues, setInputValues] = useState<any>([]);
  const [errObj, setErrorObj] = useState<any>({});

  const [data, setData] = useState(copyOfJsonData);

  useEffect(() => {
    const tempJsonData = [...copyOfJsonData];
    tempJsonData.map((item:any, index) => {
      item.isCommentErrorMsg = false;
      item.isOptionErrorMsg = false;
      if (item.sub_question.length > 0) {
        item.sub_question.map((subItem:any, subIndex:number) => {
          subItem.isCommentErrorMsg = false;
          subItem.isOptionErrorMsg = false;
        });
      }
    });

    setData(tempJsonData);
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let tempData = [...data];

    tempData.map((item:any, index:number) => {
      if (item.sub_question.length > 0) {
        item.sub_question.map((subItem:any, subIndex:number) => {
          if (
            subItem.option_response.every(
              (optItem:any) => optItem.is_selected === false
            )
          ) {
            subItem.isOptionErrorMsg = true;
          } else {
            subItem.isCommentErrorMsg = false;
            subItem.isOptionErrorMsg = false;
          }
        });
      }

      if (!item.comment) {
        item.isCommentErrorMsg = true;
      }
      if (
        item.option_response.every((optItem:any) => optItem.is_selected === false && optItem.option != 'No options' ) 
      ) {
        item.isOptionErrorMsg = true;
      } 
      else {
        item.isCommentErrorMsg = false;
        item.isOptionErrorMsg = false;
      }
    });

    setData(tempData);
    let ar:any = []
    data.forEach((ques:any)=>{
      if(!ques.isCommentErrorMsg&&!ques.isOptionErrorMsg){
      let obj:any = {}
        obj.questionId = ques.question_id
        obj.value= ques.option_response.length > 1 ?ques.option_response.filter((op:any)=>op.is_selected==true)[0].option : ''
        obj.comment = ques.comment 
      
        if(ques.sub_question.length > 0){
          ques.sub_question.forEach((subQues:any)=>{
            let subObj:any = {}
            if(!subQues.isCommentErrorMsg &&!subQues.isOptionErrorMsg){
            subObj.questionId = subQues.question_id
            subObj.value= subQues.option_response.length > 1 ?subQues.option_response.filter((op:any)=>op.is_selected==true)[0].option : ''
            subObj.comment = subQues.comment 
            
               ar.push(subObj)
            }
          })
        }
       
        ar.push(obj)
    }
    })

    //check the final values
    console.log(ar,"sdsds")
    
      };

  const renderInput = (inputObj: any) => {
    const inputType = checkInput(inputObj);
    switch (inputType) {
      case "INPUT_RADIO": {
        return renderRadioInput(inputObj);
      }
      case "INPUT_STAR": {
        return renderStarInput(inputObj);
      }

      case "SUB_INPUT_RADIO": {
        return renderRadioSubInput(inputObj);
      }
      case "INPUT_TEXT_AREA": {
        return renderParentQuestionTextInput(inputObj);
      }
      default:
        return null;
    }
  };

  const checkInput = (inputObj: any) => {
    if (
      inputObj.has_comment &&
      !inputObj.is_rated &&
      inputObj.option_response.length > 1
    ) {
      return "INPUT_RADIO";
    } else if (inputObj.is_rated) {
      return "INPUT_STAR";
    } else if (!inputObj.is_rated && inputObj.option_response.length > 1) {
      return "SUB_INPUT_RADIO";
    } else if (
      inputObj.has_comment &&
      !inputObj.is_rated &&
      inputObj.option_response[inputObj.option_response.length - 1].option ==
        "No options"
    ) {
      return "INPUT_TEXT_AREA";
    }
  };

  const handleRadioInput = (
    event: any,
    questionID: string,
    parentQuestionId?: string
  ) => {
    let tempData = [...data];

    tempData.map((item, index) => {
      // console.log("CALLEDDD", item.question_id, questionID, item.question_id.toString() === questionID.toString(),item.question_id.toString() === parentQuestionId?.toString())
      if (
        item.sub_question.length > 0 &&
        item.question_id.toString() === parentQuestionId?.toString()
      ) {
        item.sub_question.map((subItem, subIndex) => {
          if (subItem.question_id.toString() === questionID.toString()) {
            subItem.option_response.map((subOptItem, subOptIndex) => {
              if (subOptItem.option === event.target.value) {
                subOptItem.is_selected = !subOptItem.is_selected;
              } else {
                subOptItem.is_selected = false;
              }
            });
          }
          return subItem;
        });
      }
      if (item.question_id.toString() === questionID.toString()) {
        item.option_response.map((optItem, optIndex) => {
          if (optItem.option === event.target.value) {
            optItem.is_selected = !optItem.is_selected;
          } else {
            optItem.is_selected = false;
          }
        });
      }
      return item;
    });
    setData(tempData);
  };

  const handleCommentsInput = (event: any, questionId: String) => {
    let tempData = [...data];

    tempData.map((item, index) => {
      if (item.question_id.toString() === questionId.toString()) {
        item.comment = event.target.value;
      }
    });
    setData(tempData);
  };

  const renderRadioInput = (questionObj: any) => {
    return (
      <>
        <p className="title">
          {questionObj.question_id}.{questionObj.question}
          {questionObj.is_required && <span className="text-red">*</span>}
        </p>
        <div className="radio-btn">
          {questionObj.option_response.map((eachOption: any) => {
            return (
              <div key={eachOption.order_id} className="yesNoOption">
                <input
                  type="radio"
                  onChange={(eve) => {
                    handleRadioInput(eve, eachOption.question_id);
                  }}
                  value={eachOption.option}
                  name={eachOption.question_id}
                  id={
                    eachOption.question_id.toString() +
                    eachOption.order_id.toString()
                  }
                />
                <label
                  htmlFor={
                    eachOption.question_id.toString() +
                    eachOption.order_id.toString()
                  }
                >
                  {eachOption.option}
                </label>
              </div>
            );
          })}
        </div>
        {questionObj.is_required && questionObj.isOptionErrorMsg ? (
          <label className="warningText">Please fill out this field.</label>
        ) : (
          <></>
        )}
        {renderTextInput(questionObj)}
        {questionObj.is_comment_required && questionObj.isCommentErrorMsg ? (
          <label className="warningText">Please fill out this field.</label>
        ) : (
          <></>
        )}
        <hr />
      </>
    );
  };

  const renderStarInput = (questionObj: any) => {
    // this will return starInput html
    return (
      <>
        <h6 className="title">
          {questionObj.question_id}.{questionObj.question}
          {questionObj.is_required && <span className="text-red">*</span>}
        </h6>

        <div className="star-rating__stars">
          {(questionObj.option_response || []).map(
            (eachOption: any, index: number) => (
              <>
              <input key={
                    eachOption.question_id.toString() +
                    eachOption.order_id.toString()
                  } className="star-rating__input" type="radio" id={ eachOption.question_id.toString() +
                    eachOption.order_id.toString()} name={eachOption.question_id} value={eachOption.option}
                    onChange={(eve) => {
                      handleRadioInput(
                        eve,
                        eachOption.question_id,
                        questionObj.parent_question_id
                      );
                    }}
                     />
                {/* <input
                  key={
                    eachOption.question_id.toString() +
                    eachOption.order_id.toString()
                  }
                  type="radio"
                  id={
                    eachOption.question_id.toString() +
                    eachOption.order_id.toString()
                  }
                  name={eachOption.question_id}
                  value={eachOption.option}
                  onChange={(eve) => {
                    handleRadioInput(
                      eve,
                      eachOption.question_id,
                      questionObj.parent_question_id
                    );
                  }}
                /> */}
                <label
                  title={eachOption.rating}
                  htmlFor={
                    eachOption.question_id.toString() +
                    eachOption.order_id.toString()
                  }
                  className="star-rating__label"
                >
                </label>
              </>
            )
          )}
        </div>
        <p className="rate_txt ">
          (1 Poor, 2 Average, 3 Satisfied, 4 Good, 5 I am impressed)
        </p>
        {questionObj.is_required && questionObj.isOptionErrorMsg ? (
          <label className="warningText">Please fill out this field.</label>
        ) : (
          <></>
        )}
        <hr />
      </>
    );
  };

  const renderParentQuestionTextInput = (questionObj: any) => {
    return (
      <div
        key={questionObj.question_id}
        className="inputFontColor border_bottom"
      >
        <p className="title mb-15">
          {questionObj.question_id}.{questionObj.question}{" "}
        </p>
        <textarea
          value={questionObj.comment || ""}
          onChange={(e: ChangeEvent) =>
            handleCommentsInput(e, questionObj.question_id)
          }
          name={`question${questionObj?.question_id}`}
          placeholder={(questionObj.is_comment_required) ? "Comment" : "Comment (optional)"}

        ></textarea>
        {questionObj.is_comment_required && questionObj.isCommentErrorMsg ? (
          <label className="warningText">Please fill out this field.</label>
        ) : (
          <></>
        )}
        <hr />
      </div>
    );
  };

  const renderTextInput = (questionObj: any) => {
    // this will return textInput html

    return (
      <div className="inputFontColor mt-15">
        <textarea
          value={questionObj.comment || ""}
          onChange={(e: ChangeEvent) =>
            handleCommentsInput(e, questionObj.question_id)
          }
          placeholder="Comment (optional)"
          name={`question${questionObj?.question_id}`}
        ></textarea>
        {/* <label className="warningText">Please fill out this field.</label> */}
      </div>
    );
  };

  console.log("KKMKMMK", data);

  const renderRadioSubInput = (questionObj: any) => {
    return (
      <>
        <p className="title">
          {"-"}.{questionObj.question}
          {questionObj.is_required && <span className="text-red">*</span>}
        </p>
        {questionObj.option_response.map((eachOption: any) => {
          return (
            <div key={eachOption.order_id} className="radio-btn">
              <div className="yesNoOption">
                <input
                  type="radio"
                  onChange={(eve) => {
                    handleRadioInput(
                      eve,
                      eachOption.question_id,
                      eachOption.parent_question_id
                    );
                  }}
                  value={eachOption.option}
                  name={eachOption.question_id}
                  id={
                    eachOption.question_id.toString() +
                    eachOption.order_id.toString()
                  }
                />
                <label
                  htmlFor={
                    eachOption.question_id.toString() +
                    eachOption.order_id.toString()
                  }
                >
                  {eachOption.option}
                </label>
              </div>
            </div>
          );
        })}
        {questionObj.is_required && questionObj.isOptionErrorMsg ? (
          <label className="warningText">Please fill out this field.</label>
        ) : (
          <></>
        )}
        {questionObj.is_comment_required && questionObj.isCommentErrorMsg ? (
          <label className="warningText">Please fill out this field.</label>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <div className="container-section">
      <div className="rightSection">
        <form
          className="formoid-metro-red"
          name="form"
          id="myForm"
          onSubmit={handleSubmit}
        >
          <div className="dashboard">
            <div className="header-title-content">
              <h2>CUSTOMER SATISFACTION SURVEY - 2022</h2>
              <img src={LogoBlackSvg} alt="logo" />
            </div>
            <div className="dashboardSpacing">
              <div className="dashboardInnerSection">
                <p className="wish_txt">
                  Dear customer, it was a pleasure doing business with you and
                  we hope we get to work together again. Please fill out this
                  feedback form to help us evaluate our processes, learn and
                  improve.
                </p>
                <div className="inputFontColor mb-15">
                  {/* <p className="title">Your name:<span>*</span></p> */}
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name *"
                  />
                  {/* <label className="warningText mt-2">Please fill out this field.</label> */}
                </div>
                <div className="inputFontColor mb-15">
                  {/* <p className="title">Name of the project:<span>*</span></p> */}
                  <input
                    type="text"
                    name="project_name"
                    placeholder="Name of the project *"
                  />
                  {/* <label className="warningText mt-2">Please fill out this field.</label> */}
                </div>
                <div className=" inputFontColor mb-15">
                  {/* <p className="title ">Point of contact at [x]cube LABS you have interacted with:<span */}
                  {/* className="text-red">*</span></p> */}
                  <input
                    type="text"
                    name="point_of_contact"
                    placeholder="Point of contact at [x]cube LABS you have interacted with*"
                  />
                  {/* <label className="warningText">Please fill out this field.</label> */}
                </div>
                {data.map((inputObj: any, index: number) => {
                  if (inputObj.sub_question.length > 0) {
                    return (
                      <div>
                        <p>
                          {inputObj.question_id}.{inputObj.question}
                        </p>
                        {inputObj.sub_question.map((subInputObj:any, subIndex:number) => {
                          return (
                            <div key={subIndex}>{renderInput(subInputObj)}</div>
                          );
                        })}
                      </div>
                    );
                  }
                  return (
                    <div key={index} className="element-radio">
                      {renderInput(inputObj)}
                    </div>
                  );
                })}
                <div className="submit">
                  <button type="submit">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <h2 className="verticalAlign">CUSTOMER SATISFACTION SURVEY - 2022</h2>
    </div>
  );
}

export default CustomerForm;
