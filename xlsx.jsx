import { read, utils } from 'xlsx';//for sheet.JS
import { useRef, useState, useEffect } from 'react';// for hooks and mount loading
import React from 'react';// for react
import * as XLSX from 'xlsx'

import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

 










const handleSubmit = async (e) => {
    e.preventDefault()//dont reload the page
    
}


function ExcelIntegration({user}){
    const [Name,setName] = useState('') // using hooks so they can be used in the form 
    const [tillTotal,setTillTotal] = useState()
    const [pendingBills,setpendingBills] = useState() 
    const [Entries,setEntries] = useState()//Entry Hook
    const [submit, setSubmit] = useState(false)
    const [uber,setUber] = useState() 
    const [cash, setCash] = useState()
    const [cardBarclays, setBarclays] = useState()
    const [cardAmex, setAmex] = useState()
    const [Maruthi, setMaruthi] = useState()
    const [shop, setShop] = useState()
    const [pending, setPending] = useState()
    const [staff,setStaff]= useState()
    const [extra,setExtra] = useState()


    

    
    
    function convertJSON({Name , tillTotal, pendingBills,uber,cash ,cardBarclays,cardAmex, Maruthi,shop,staff,pending,extra}){//using props
        const date = new Date()//getting date and time
        let total = (parseFloat(tillTotal)) + (parseFloat(pendingBills))
        let grandtotal = parseFloat(uber) + total
        let otherTotal =  (parseFloat(cash) + parseFloat(cardBarclays) + parseFloat(cardAmex) + parseFloat(Maruthi)+ parseFloat(shop) + parseFloat(pending) + parseFloat(staff))
        let difference = otherTotal-total 
        const JSONobj = {
          Date: date,
          Name: Name,
          Till_Total: tillTotal,
          Pending_Bills: pendingBills,
          Total:  total,
          Uber: uber,
          Grand_Total: grandtotal,
          Cash: cash,
          Card_Barclays:cardBarclays,
          Card_Amex:cardAmex,
          Maruthi: Maruthi,
          Shop:shop,
          Pending:pending,
          Staff:staff,
          Extra:extra,
          Difference: difference

          


        }
        console.log(JSONobj)// checking the correct object is being parse
        setSubmit(!submit)//setting submit field to True
        setEntries(JSONobj)//Setting JSON to a hook so it can be used globally
        // +', "Money":'+Money


        

        
        
        
    }


    function Submit(){
        axios.post('https://sheet.best/api/sheets/210cc8d7-7fb4-4560-9266-a9d64f841e22', Entries)
        .then(response => {
          console.log(response);
        })

    }

    

    return(
        <form onSubmit={handleSubmit} >
          <div className="entireForm">
              <div className="labelWrapper">
                <label htmlFor="name">Name:</label>
                <input 
                 type="text" 
                 id="name"
                 className="typein__box"
                 onChange = {(e)=> setName(e.target.value)} 
                //  using a imaginary variable to setName when changed
                 value = {Name}
                 required
                />
               
              <div className="everyForm">
               <div className="firstTotal">
                <label htmlFor="tillTotal">Till Total:</label>
                <input
                 className="typein__box"
                 type="tillTotal" 
                 id="tillTotal"

                 onChange = {(e)=> setTillTotal(e.target.value)} 
                 value = {tillTotal}
                 required
                />

                <label htmlFor="pendingBills"> Pending Bills:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="pendingBills"
                 onChange = {(e)=> setpendingBills(e.target.value)} 
                 value = {pendingBills}
                />
                <label htmlFor="uber"> Delivery Services:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="uber"
                 onChange = {(e)=> setUber(e.target.value)} 
                 value = {uber}
                />
                </div>
                <label htmlFor="cash"> Cash:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="cash"
                 onChange = {(e)=> setCash(e.target.value)} 
                 value = {cash}
                />
                <label htmlFor="cardBarclays"> Card Barclays:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="cardBarclays"
                 onChange = {(e)=> setBarclays(e.target.value)} 
                 value = {cardBarclays}
                />
                <label htmlFor="cardAmex "> Card Amex:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="cardAmex"
                 onChange = {(e)=> setAmex(e.target.value)} 
                 value = {cardAmex}
                />

               <label htmlFor="Maruthi ">Maruthi:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="Maruthi"
                 onChange = {(e)=> setMaruthi(e.target.value)} 
                 value = {Maruthi}
                />

                <label htmlFor="shop ">Shop:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="shop"
                 onChange = {(e)=> setShop(e.target.value)} 
                 value = {shop}
                />
                <label htmlFor="pending ">Pending:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="pending"
                 onChange = {(e)=> setPending(e.target.value)} 
                 value = {pending}
                />
                <label htmlFor="Staff ">Staff:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="pending"
                 onChange = {(e)=> setStaff(e.target.value)} 
                 value = {staff}
                />
                <label htmlFor="extra ">Extra:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="pending"
                 onChange = {(e)=> setExtra(e.target.value)} 
                 value = {extra}
                />
                </div>



                
                
                
                
                
                <button className="button-10" onClick={() => convertJSON({Name, tillTotal, pendingBills,uber, cash, cardBarclays,cardAmex, Maruthi,shop,pending,staff,extra})} >Submit</button>
                { submit ? <div className = "buttonWrapper"><button className ="confirmButton button-10" onClick={() => Submit(Entries)}>Confirm Submit </button> <Link to="/AddSAFEReport">Log Reports</Link> </div>: <p className="smallFont">SugarTech 2023©</p>  }
              </div>
             </div>

            </form>
    )


}


export default ExcelIntegration