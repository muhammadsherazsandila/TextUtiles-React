import React ,{ useState } from "react"


export default function Form({email = 'Email',password = 'Password',address1 = 'Address1',address2 = 'Address2' ,city = 'City', zip = 'Zip'}) {
    //concept of state...
    //using hooks...
    //first argument sets default value ....
    //second argument is used to update the first variable..
    //second variable is treated like a method ... it i not updated like simple variable
    const [inputValue,inputUpdateValue] = useState('Enter email')
    function buttonClick(){
        inputUpdateValue('Enter Text')
    }
    //while treating with input box, textArea, the change is refleacted this change returned an event which can be used to update the current value
    function inputVAlueCanger(event){
        inputUpdateValue(event.target.value)
    }
    return (
        <div className="container w-50 pt-5">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">{email}</label>
                    <input type="text" className="form-control" id="inputEmail4" value={inputValue} onChange={inputVAlueCanger} /> {/* onchange method runs every time when there is change in the current value of input box */}
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">{password}</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">{address1}</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={inputValue} onChange={inputVAlueCanger}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">{address2}</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">{city}</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">{zip}</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-primary" onClick={buttonClick}>Sign in</button>
                </div>
            </form>

        </div>
    )
}
