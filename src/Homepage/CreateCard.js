import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function CreateCard() {
    const [facilitiesFields, setfacilitiesFields] = useState([]);
    const [chargableFacilitiesFields, setchargableFacilitiesFields] = useState([]);
    const [extraImagesFields, setextraImagesFields] = useState([]);
    const [roomTypesDetailsFields, setroomTypesDetailsFields] = useState([]);
//Other Errors
    const RemoveError=errorElement => e =>{
        if(document.getElementById(errorElement).classList.contains("error-show"))
            document.getElementById(errorElement).classList.replace("error-show","error-hide");
    }

    function ShowError(errorElement, errText) {
        if (document.getElementById(errorElement).classList.contains("error-hide")) {
            document.getElementById(errorElement).classList.replace("error-hide", "error-show");
            document.getElementById(errorElement).innerText = errText;
        }
    }
//Validation
    const CardCheckCreditionals=(e)=>{
        e.preventDefault();
        let formElements=document.getElementById("CreateCardForm").elements;
        let minPrice=document.getElementById("MinPrice");
        let image=document.getElementById("Image");
        let imageBtn=document.getElementById("Image-btn");
        let checkInvalidity=false;
        let validFileExtensions = /\.(jpg|JPG|gif|GIF|jpeg|JPEG|bmp|BMP|png|PNG|svg|SVG)$/;
//Invalid Min Price
        if(minPrice.value!=="" && parseInt(minPrice.value)<0)
          {
              ShowError("hotel-minprice-error","Enter valid Price!!");
              if(!checkInvalidity)  minPrice.focus();
              checkInvalidity=true;
          }
//Empty Normal Fields
        for(var i = 0; i < 7; i++)
        {
            if(formElements[i].value==="")
            {
                let name=formElements[i].name;
                ShowError(`hotel-${name}-error`,`Enter Hotel's ${name}!!`);
                if(!checkInvalidity)  {
                    if(name==="image")
                        imageBtn.focus();
                    else
                        formElements[i].focus();
                }
                checkInvalidity=true;
            }
        } 
//Invalid Extension of normal Field image
        if(image.value!=="")
          {
              let result = validFileExtensions.test(image.value);
              if(!result){
                ShowError("hotel-image-error","Valid Extensions are: jpg/gif/jpeg/bmp/png/svg ");
                if(!checkInvalidity)  image.focus();
                checkInvalidity=true;
              }
          }  

        //facilities Fields
        for (let index = 0; index < facilitiesFields.length; index++) {
            const field = document.getElementById("FacilitiesFields-"+facilitiesFields[index]);
            if(field.value==="" || field.value===undefined){
                ShowError("hotel-FacilitiesFields-error","Enter all facilities fields");
                if(!checkInvalidity)  field.focus();
                checkInvalidity=true;
                break;
            }
        }

        //chargable facilities fields
        for (let index = 0; index < chargableFacilitiesFields.length; index++) {
            const field = document.getElementById("ChargeableFacilities-"+chargableFacilitiesFields[index]);
            const fieldCost = document.getElementById("ChargeableFacilities-Cost-"+chargableFacilitiesFields[index]);
            if(field.value==="" || field.value===undefined){
                ShowError("hotel-ChargeableFacilities-error","Enter All Chargeable Facilities Fields");
                if(!checkInvalidity)  field.focus();
                checkInvalidity=true;
                break;
            }
            if(fieldCost.value==="" || fieldCost.value===undefined){
                ShowError("hotel-ChargeableFacilities-error","Enter All Chargeable Facilities Cost");
                if(!checkInvalidity)  fieldCost.focus();
                checkInvalidity=true;
                break;
            }
            if(parseInt(fieldCost.value)<0){
                ShowError("hotel-ChargeableFacilities-error","Enter valid ChargeableFacilities Cost");
                if(!checkInvalidity)  fieldCost.focus();
                checkInvalidity=true;
                break;
            }
        }
        
        //Extra Images Fields
        for (let index = 0; index < extraImagesFields.length; index++) {
            const field = document.getElementById("ExtraImagesFields-"+extraImagesFields[index]);
            if(field.value==="" || field.value===undefined){
                ShowError("hotel-ExtraImagesFields-error","Enter all extra images fields");
                if(!checkInvalidity)  field.focus();
                checkInvalidity=true;
                break;
            }
            let extraimageresult = validFileExtensions.test(field.value);
            if(!extraimageresult){
                ShowError("hotel-ExtraImagesFields-error","Valid Extensions are: jpg/gif/jpeg/bmp/png/svg ");
                if(!checkInvalidity)  field.focus();
                checkInvalidity=true;
                break;
            }
        }

        //Room Types Details fields
        for (let index = 0; index < roomTypesDetailsFields.length; index++) {
            const field = document.getElementById("RoomTypesDetails-"+roomTypesDetailsFields[index]);
            const fieldCost = document.getElementById("RoomTypesDetails-Cost-"+roomTypesDetailsFields[index]);
            const fieldSpecialities = document.getElementById("RoomTypesDetails-specialities-"+roomTypesDetailsFields[index]);
            const fieldDisplayImage = document.getElementById("RoomTypesDetails-displayImage-"+roomTypesDetailsFields[index]);
            if(field.value==="" || field.value===undefined){
                ShowError("hotel-RoomTypesDetails-error","Enter All Room Types Details");
                if(!checkInvalidity)  field.focus();
                checkInvalidity=true;
                break;
            }
            if(fieldCost.value==="" || fieldCost.value===undefined){
                ShowError("hotel-RoomTypesDetails-error","Enter All Room Type's Cost");
                if(!checkInvalidity)  fieldCost.focus();
                checkInvalidity=true;
                break;
            }
            if(fieldSpecialities.value==="" || fieldSpecialities.value===undefined){
                ShowError("hotel-RoomTypesDetails-error","Enter All Room Type's facilities");
                if(!checkInvalidity)  fieldSpecialities.focus();
                checkInvalidity=true;
                break;
            }
            if(parseInt(fieldCost.value)<0){
                ShowError("hotel-RoomTypesDetails-error","Enter valid Room Type's Cost");
                if(!checkInvalidity)  fieldCost.focus();
                checkInvalidity=true;
                break;
            }
            
            if(fieldDisplayImage.value==="" || fieldDisplayImage.value===undefined){
                ShowError("hotel-RoomTypesDetails-error","Enter image field");
                if(!checkInvalidity)  fieldDisplayImage.focus();
                checkInvalidity=true;
                break;
            }
            let fieldDisplayImageResult = validFileExtensions.test(fieldDisplayImage.value);
            if(!fieldDisplayImageResult){
                ShowError("hotel-RoomTypesDetails-error","Valid Extensions are: jpg/gif/jpeg/bmp/png/svg ");
                if(!checkInvalidity)  fieldDisplayImage.focus();
                checkInvalidity=true;
                break;
            }
        }

        //No Fields 
        if(facilitiesFields.length===0){
            ShowError("hotel-FacilitiesFields-error","Create at least 1 field.");
            checkInvalidity=true;
        }
        if(extraImagesFields.length===0){
            ShowError("hotel-ExtraImagesFields-error","Create at least 1 field.");
            checkInvalidity=true;
        }
        if(chargableFacilitiesFields.length===0){
            ShowError("hotel-ChargeableFacilities-error","Create at least 1 field.");
            checkInvalidity=true;
        }
        if(roomTypesDetailsFields.length===0){
            ShowError("hotel-RoomTypesDetails-error","Create at least 1 field.");
            checkInvalidity=true;
        }

        if(checkInvalidity) console.log("Fill all required fields appropriately!!");

        return checkInvalidity;
    }

    //Create Fields
    const createField=type => e =>{
        switch(type){
            case 0: RemoveError("hotel-FacilitiesFields-error")();
                    setfacilitiesFields([...facilitiesFields, facilitiesFields.length===0 ? facilitiesFields.length : facilitiesFields[facilitiesFields.length-1]+1]);
                    break;
            case 1: RemoveError("hotel-ChargeableFacilities-error")();
                    setchargableFacilitiesFields([...chargableFacilitiesFields, chargableFacilitiesFields.length===0 ? chargableFacilitiesFields.length : chargableFacilitiesFields[chargableFacilitiesFields.length-1]+1]);
                    break;
            case 2: RemoveError("hotel-ExtraImagesFields-error")();
                    setextraImagesFields([...extraImagesFields, extraImagesFields.length===0 ? extraImagesFields.length : extraImagesFields[extraImagesFields.length-1]+1]);
                    break;
            case 3: RemoveError("hotel-RoomTypesDetails-error")();
                    setroomTypesDetailsFields([...roomTypesDetailsFields, roomTypesDetailsFields.length===0 ? roomTypesDetailsFields.length : roomTypesDetailsFields[roomTypesDetailsFields.length-1]+1]);
                    break;
            default:console.log("Wrong type");
        }
    }
    //Remove Fields
    const removeField=(type,id) => e =>{
        switch(type){
            case 0: RemoveError("hotel-FacilitiesFields-error")();
                    setfacilitiesFields(facilitiesFields.filter(index => index !== id));
                    break;
            case 1: RemoveError("hotel-ChargeableFacilities-error")();
                    setchargableFacilitiesFields(chargableFacilitiesFields.filter(index => index !== id));
                    break;
            case 2: RemoveError("hotel-ExtraImagesFields-error")();
                    setextraImagesFields(extraImagesFields.filter(index => index !== id));
                    break;
            case 3: RemoveError("hotel-RoomTypesDetails-error")();
                    setroomTypesDetailsFields(roomTypesDetailsFields.filter(index => index !== id));
                    break;
            default:console.log("Wrong type");
        }
    }

// Deal with Images
    const removeImagesErrorNShowFileName=(errorFieldName,imageFieldName,fileFieldName) => e =>{
        RemoveError(`hotel-${errorFieldName}-error`)();

        let path=document.getElementById(imageFieldName).value;
        
        if(path){
            let fileName=path.match(/[/\\]([\w\d\s.\-()]+)$/)[1];

            for (let index = 0; index < fileName.length; index++) {
                if(index%15===0 && index>0) fileName=fileName.slice(0, index) + "\n" + fileName.slice(index,fileName.length);
            }

            document.getElementById(fileFieldName).innerText=fileName;
        }
        else
            document.getElementById(fileFieldName).innerText="No File Choosen";
    }

    const clickImageField=(imageFieldName) => e =>{
        document.getElementById(imageFieldName).click();
    }

    return (
        <div className="card-container">
            <div className="card">
                <div className="type">
                    HOTEL DETAILS
                </div>

                <form id="CreateCardForm" className="form" action="HomePage.php" method="post">
                    {/* Hotel Name */}
                    <label htmlFor="Hotel">Name</label>
                    <input type="text" id="Hotel" className="text-box" name="name" onChange={RemoveError("hotel-name-error")}/>

                    <p id="hotel-name-error" className="error-hide"></p>
                    {/* Hotel city */}
                    <label htmlFor="City">City</label>
                    <input type="text" id="City" className="text-box" name="city" onChange={RemoveError("hotel-city-error")}/>

                    <p id="hotel-city-error" className="error-hide"></p>
                    {/* Hotel State */}
                    <label htmlFor="State">State</label>
                    <input type="text" id="State" className="text-box" name="state" onChange={RemoveError("hotel-state-error")}/>

                    <p id="hotel-state-error" className="error-hide"></p>
                    {/* Hotel Available date
                    <label htmlFor="Date">Available Date</label>
                    <input type="date" id="Date" className="text-box" name="date" onChange={RemoveError("hotel-date-error")}/>

                    <p id="hotel-date-error" className="error-hide"></p> */}
                    {/* Hotel Minimum Room Price */}
                    <label htmlFor="MinPrice">Minimum Room Price</label>
                    <input type="number" id="MinPrice" className="text-box" name="minprice" onChange={RemoveError("hotel-minprice-error")}/>

                    <p id="hotel-minprice-error" className="error-hide"></p>
                    {/* Hotel Description */}
                    <label htmlFor="Description">Hotel Description</label>
                    <textarea id="Description" className="text-box" name="description" onChange={RemoveError("hotel-description-error")} rows="5"/>

                    <p id="hotel-description-error" className="error-hide"></p>
                    {/* Hotel Restrictions */}
                    <label htmlFor="Restrictions">Restrictions</label>
                    <textarea id="Restrictions" className="text-box" name="restrictions" onChange={RemoveError("hotel-restrictions-error")} rows="5"/>

                    <p id="hotel-restrictions-error" className="error-hide"></p>
                    {/* Hotel Front Image */}
                    <label htmlFor="Image" id="file-label">Front Image</label>
                    <input type="file" id="Image" accept="image/*" name="image" onChange={removeImagesErrorNShowFileName("image","Image","FileName")} hidden="hidden"/>

                    <div className="big-text-box">
                        <button type="button" id="Image-btn" onClick={clickImageField("Image")}>CHOOSE IMAGE</button>
                        <span id="FileName">No File Choosen</span>
                    </div>
                    
                    <p id="hotel-image-error" className="error-hide"></p>

                    {/* Hotel Facilities */}
                    <div className="big-text-box">
                        <label htmlFor="FacilitiesFields">Facilities</label>
                        <button type="button" onClick={createField(0)}>Create Field</button>
                    </div>
                    <div id="FacilitiesFields" className="multipleFields-text-box">
                        {
                            facilitiesFields.map((id,index)=>{
                                return <div key={id} className="field-text-box">
                                            <div>{index+1}</div>
                                            <input type="text" id={"FacilitiesFields-"+id} className="text-box" name={"FacilitiesFields-"+id} placeholder="Facility description" onChange={RemoveError("hotel-FacilitiesFields-error")}/>
                                            <button type="button" onClick={removeField(0,id)}>Remove Field</button>
                                        </div>;
                            })
                        }
                    </div>

                    <p id="hotel-FacilitiesFields-error" className="error-hide"></p>

                    {/* Extra Chargeable Facilities */}
                    <div className="big-text-box">
                        <label htmlFor="ChargeableFacilities">Extra Chargeable Facilities</label>
                        <button type="button" onClick={createField(1)}>Create Field</button>
                    </div>
                    <div id="ChargeableFacilities" className="multipleFields-text-box">
                        {
                            chargableFacilitiesFields.map((id,index)=>{
                                return <div key={id} className="field-text-box">
                                            <div>{index+1}</div>
                                            <input type="text" id={"ChargeableFacilities-"+id} className="text-box" name={"ChargeableFacilities-"+id} placeholder="facility" onChange={RemoveError("hotel-ChargeableFacilities-error")}/>
                                            <input type="number" id={"ChargeableFacilities-Cost-"+id} className="text-box" name={"ChargeableFacilities-Cost-"+id} placeholder="Cost"  onChange={RemoveError("hotel-ChargeableFacilities-error")}/>
                                            <button type="button" onClick={removeField(1,id)}>Remove Field</button>
                                        </div>;
                            })
                        }
                    </div>
                    
                    <p id="hotel-ChargeableFacilities-error" className="error-hide"></p>

                    {/* Hotel extra images */}
                    <div className="big-text-box">
                        <label htmlFor="ExtraImagesFields">Extra Hotel Images</label>
                        <button type="button" onClick={createField(2)}>Create Field</button>
                    </div>
                    <div id="ExtraImagesFields" className="multipleFields-text-box">
                        {
                            extraImagesFields.map((id,index)=>{
                                return <div key={id} className="field-text-box">
                                            <div>{index+1}</div>
                                            <input type="file" id={"ExtraImagesFields-"+id} accept="image/*" name={"ExtraImagesFields-"+id} onChange={removeImagesErrorNShowFileName("ExtraImagesFields","ExtraImagesFields-"+id,"ExtraImagesFileName-"+id)} hidden="hidden"/>

                                            <div className="big-text-box">
                                                <button type="button" onClick={clickImageField("ExtraImagesFields-"+id)}>CHOOSE IMAGE</button>
                                                <span id={"ExtraImagesFileName-"+id}>No File Choosen</span>
                                            </div>
                                            <button type="button" onClick={removeField(2,id)}>Remove Field</button>
                                        </div>;
                            })
                        }
                    </div>

                    <p id="hotel-ExtraImagesFields-error" className="error-hide"></p>

                    {/* Room Type Fields */}
                    <div className="big-text-box">
                        <label htmlFor="RoomTypesDetails">Room Types Details</label>
                        <button type="button" onClick={createField(3)}>Create Field</button>
                    </div>
                    <div id="RoomTypesDetails" className="multipleFields-text-box">
                        {
                            roomTypesDetailsFields.map((id,index)=>{
                                return <div key={id} className="field-text-box">
                                            <div>{index+1}</div>
                                            <input type="text" id={"RoomTypesDetails-"+id} className="text-box" name={"RoomTypesDetails-"+id} placeholder="room type" onChange={RemoveError("hotel-RoomTypesDetails-error")}/>
                                            <input type="number" id={"RoomTypesDetails-Cost-"+id} className="text-box" name={"RoomTypesDetails-Cost-"+id} placeholder="room cost"  onChange={RemoveError("hotel-RoomTypesDetails-error")}/>
                                            <textarea id={"RoomTypesDetails-specialities-"+id} className="text-box" name={"RoomTypesDetails-specialities-"+id}  placeholder="room specialities"  onChange={RemoveError("hotel-RoomTypesDetails-error")} rows="5"/>

                                            <input type="file" id={"RoomTypesDetails-displayImage-"+id} accept="image/*" name={"RoomTypesDetails-displayImage-"+id} onChange={removeImagesErrorNShowFileName("RoomTypesDetails","RoomTypesDetails-displayImage-"+id,"RoomTypesDetails-displayImageFileName-"+id)} hidden="hidden"/>

                                            <div className="big-text-box">
                                                <button type="button" onClick={clickImageField("RoomTypesDetails-displayImage-"+id)}>ROOM IMAGE</button>
                                                <span id={"RoomTypesDetails-displayImageFileName-"+id}>No File Choosen</span>
                                            </div>

                                            <button type="button" onClick={removeField(3,id)}>Remove Field</button>
                                        </div>;
                            })
                        }
                    </div>
                    
                    <p id="hotel-RoomTypesDetails-error" className="error-hide"></p>

                    <input type="submit" className="submit-btn" id="CardEntry" name="Card" onClick={CardCheckCreditionals} value="Card"/>

                    <p className="bottom-link">Authenticate ? ( <Link to="/login"> Login here </Link> / <Link to="/register"> Register here </Link> )</p>

                </form>
            </div>
      </div>
    )
}

export default CreateCard
