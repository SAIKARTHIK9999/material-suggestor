import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {images} from '../../constants';

import './Application.scss';

const Searchmaterials = () => {

  const [toughnessState, setToughnessState] = useState(false);
  const [scratchResistance, setScratchResistanceState] = useState(false);
  const [ductilityState, setDuctilityState] = useState(false);
  const [machinabilityState, setMachinabilityState] = useState(false);
  const [ApplicationState, setApplicationState] = useState(false);


  return (
    <>
    
    <h2>  
      <br/>
      <br/>
      <br/>
    </h2>

<div className='container'>
    <br></br>
<div className='container' >
  <br/>
  <br/>
<label>Choose Application&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
  <br/>
  <br/>
<select 
    className='custom-select'
    onChange={(e) => {
      const selectedApplication = e.target.value;
      setApplicationState(selectedApplication);
    }}
    >
      <option value='None'>None</option>
      <option value='Wrist Pins, Engine Cams, Gears'>Wrist Pins, Engine Cams, Gears</option>
      <option value='Gun Barrels, Axles, Wrentches, Shafts'>Gun Barrels, Axles, Wrentches, Shafts</option>
      <option value='Valves'>Valves</option>
      <option value='Twist Drills, Hacksaw Blades'>Twist Drills, Hacksaw Blades</option>
      <option value='Ball and Roller Bearings'>Ball and Roller Bearings</option>
      <option value='Crankshafts, Propeller Shafts, Aircrafts'>Crankshafts, Propeller Shafts, Aircrafts</option>
      <option value='Cement, Mining, Road Construction, Rail Roads'>Cement, Mining, Road Construction, Rail Roads</option>
      <option value='Connecting rods, Bolts and Nuts'>Connecting rods, Bolts and Nuts</option>
      <option value='Gudgeon Pins, Cam Shafts, Drive Wheels, Clutch Plates, Valve Rockers'>Gudgeon Pins, Cam Shafts, Drive Wheels, Clutch Plates, Valve Rockers</option>
      <option value='Transmission Gears and Chain Pins'>Transmission Gears and Chain Pins</option>
      <option value='Pressure Vessels, Aircraft Structural Parts, Automobile Axles'>Pressure Vessels, Aircraft Structural Parts, Automobile Axles</option>
      <option value='Heavy locomotives and Machine Forgings'>Heavy locomotives and Machine Forgings</option>
      <option value='Coil and Leaf Springs, Chisels, Punches'>Coil and Leaf Springs, Chisels, Punches</option>
      <option value='Food and Chemical Plants, Utensils, Sanitary Fittings'>Food and Chemical Plants, Utensils, Sanitary Fittings</option>
      <option value='Machine Parts, Bolts, Screws, Cutlury springs, Scissors, Spindles'>Machine Parts, Bolts, Screws, Cutlury springs, Scissors, Spindles</option>
      <option value='Hulls for Hydrospace Vehicles, Motor cases of Missiles, Cold Headed Bolts, Pressure valves & Vessels'>Hulls for Hydrospace Vehicles, Motor cases of Missiles, Cold Headed Bolts, Pressure valves & Vessels</option>
      <option value='Heavy Forging Hammers, Hot & Trimming Tools, Cutting Dies, Drift Punches, WatchMakers Tool'>Heavy Forging Hammers, Hot & Trimming Tools, Cutting Dies, Drift Punches, WatchMakers Tool</option>
      <option value='Chisels, Punches, Shear Blades, Scarfing Tools'>Chisels, Punches, Shear Blades, Scarfing Tools</option>
      <option value='Reamers Taps, Blanking & Stamping Dies   '>Reamers Taps, Blanking & Stamping Dies   </option>
      <option value='Intricate tool Shapes'>Intricate tool Shapes</option>
      <option value='Cutting Knives, Plug Gauges, Wire Drawing Dies '>Cutting Knives, Plug Gauges, Wire Drawing Dies </option>
      

    </select>
</div>

<br></br>
<br></br>

    </div>
    <section className='result'>
    
            {ApplicationState.length === 30 && (<>
              <h1>Nickel Steels</h1>
              <a href='https://en.wikipedia.org/wiki/Iron%E2%80%93nickel_alloy'
              target="_blank"
              >Click To Know More!</a>
              {[images.nickelsteel].map((nickelsteel, index) => (
            <img src={nickelsteel} alt="profile_bg" />))}
            </>)}
            {ApplicationState.length === 37 && (<>
              <h1>Chromium Steels (0.35% C, 0.5% Cr)</h1>
              <a href='https://www.hardening-of-stainless-steel.com/materials/chromium-steel/'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>)}
            {ApplicationState.length === 6 && (<>
              <h1 className="flex center font-bold underline"id='hedaings'>Valve Steels, 5XXX Cr Steels or 3XXX Ni-Cr Steels</h1>
              <a href='https://www.villaresmetalsinternational.com/Products/Valve-Steels/Austenitic'
              target="_blank"
              >Click To Know More!</a>
              {[images.valvesteel].map((valvesteel, index) => (
            <img src={valvesteel} alt="profile_bg" />))}
            
            </>)}
            {ApplicationState.length === 28 && (<>
              <h1>Chromium Steels (0.9% C, 1% Cr)</h1>
              <a href='https://www.hardening-of-stainless-steel.com/materials/chromium-steel/'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>)}
            {ApplicationState.length === 24 && (<>
              <h1>Ball Bearing Steels</h1>
              <a href='https://en.wikipedia.org/wiki/Ball_(bearing)'
              target="_blank"
              >Click To Know More!</a>
              {[images.ballbearingsteel].map((ballbearingsteel, index) => (
                <img src={ballbearingsteel} alt="profile_bg" />))}
            </>)}
            {ApplicationState.length === 40 && (<>
              <h1>Nickel Steels (0.25% to 0.45% C &  2.5% to 3.5% Ni) and Ni-Cr Steels (1.25% Ni and 0.75% Cr)</h1>
              <a href='https://en.wikipedia.org/wiki/Iron%E2%80%93nickel_alloy'
              target="_blank"
              >Click To Know More!</a>
              {[images.nickelsteel].map((nickelsteel, index) => (
            <img src={nickelsteel} alt="profile_bg" />))}
            </>)}
            {ApplicationState.length === 45 && (<>
              <h1>Hadfield Steel</h1>
              <a href='https://en.wikipedia.org/wiki/Mangalloy'
              target="_blank"
              >Click To Know More!</a>
              {[images.hadfieldsteel].map((hadfieldsteel, index) => (
                <img src={hadfieldsteel} alt="profile_bg" />))}
            </>)}
            {ApplicationState.length === 31 && (<>

              <h1>Manganese Steels (1.65 to 1.9% Mn)</h1>
              <a href='https://en.wikipedia.org/wiki/Mangalloy'
              target="_blank"
              >Click To Know More!</a>
              {[images.manganesesteel].map((manganesesteel, index) => (
            <img src={manganesesteel} alt="profile_bg" />))}
              </>
            )}
            {ApplicationState.length === 68 && (<>
              <h1>Ni-Cr-Mo Steels (43XX & 47XX Series)</h1>
              <a href='https://www.americanelements.com/nickel-chromium-molybdenum-iron-alloy'
              target="_blank"
              >Click To Know More!</a>
              {[images.nicrmosteel].map((nicrmosteel, index) => (
                <img src={nicrmosteel} alt="profile_bg" />))}
              </>)}
            
            {ApplicationState.length === 61 && (<>
              <h1>Cr-Mo Steels (41XX Steels)</h1>
              <a href='https://en.wikipedia.org/wiki/SAE_steel_grades'
              target="_blank"
              >Click To Know More!</a>
              {[images.crmosteel].map((crmosteel, index) => (
                <img src={crmosteel} alt="profile_bg" />))}
                </>)}
            {ApplicationState.length === 33 && (<>
              <h1>Ni-Mo Steels (46XX & 48XX )</h1>
              <a href='https://www.americanelements.com/nickel-molybdenum-alloy'
              target="_blank"
              >Click To Know More!</a>
              {[images.nimosteel].map((nimosteel, index) => (
                <img src={nimosteel} alt="profile_bg" />))}
                </>)}
            {ApplicationState.length === 38 && (<>
              <h1>Carbon Vanadium Steels</h1>
              <a href='https://www.aboutmechanics.com/what-is-vanadium-steel.htm'
              target="_blank"
              >Click To Know More!</a>
              {[images.carbvansteel].map((carbvansteel, index) => (
                <img src={carbvansteel} alt="profile_bg" />))}
                </>)}
            {ApplicationState.length === 39 && (<>
              <h1>Silicon Steels (9260 Steels)</h1>
              <a href='https://www.thomasnet.com/articles/metals-metal-products/all-about-9260-steel-properties-strength-and-uses/'
              target="_blank"
              >Click To Know More!</a>
              {[images.sisteel].map((sisteel, index) => (
                <img src={sisteel} alt="profile_bg" />))}
                </>)}
            {ApplicationState.length === 53 && (<>
              <h1>303 & 303Se Stainless Steels</h1>
              <a href='https://www.aalco.co.uk/datasheets/Stainless-Steel-14305-303-Bar_107.ashx#:~:text=Grade%20303%20is%20the%20most,slight%20lowering%20of%20the%20toughness.'
              target="_blank"
              >Click To Know More!</a>
              {[images.ststeel].map((ststeel, index) => (
                <img src={ststeel} alt="profile_bg" />))}
                </>)}
            {ApplicationState.length === 65 && (<>
              <h1>Martensitic Stainless Steels (4XX)</h1>
              <a href='https://en.wikipedia.org/wiki/Martensitic_stainless_steel'
              target="_blank"
              >Click To Know More!</a>
              {[images.martsteel].map((martsteel, index) => (
                <img src={martsteel} alt="profile_bg" />))}
                </>)}
            {ApplicationState.length === 100 && (<>
              <h1>Maraging Steels (18-25% Ni)</h1>
              <a href='https://en.wikipedia.org/wiki/Maraging_steel'
              target="_blank"
              >Click To Know More!</a>
              {[images.maragsteel].map((maragsteel, index) => (
                <img src={maragsteel} alt="profile_bg" />))}
                </>)}
            {ApplicationState.length === 90 && (<>
              <h1>Water Hardening Tool Steels (W1,W2)</h1>
              <a href='https://www.azom.com/article.aspx?ArticleID=9114'
              target="_blank"
              >Click To Know More!</a>
              {[images.w1steel].map((w1steel, index) => (
                <img src={w1steel} alt="profile_bg" />))}
                </>)}
            {ApplicationState.length === 46 && (<>
              <h1>Shock Resisting Tool Steels</h1>
              <a href='https://www.azom.com/article.aspx?ArticleID=6140'
              target="_blank"
              >Click To Know More!</a>
              {[images.shocksteel].map((shocksteel, index) => (
                <img src={shocksteel} alt="profile_bg" />))}
                </>)}
            {ApplicationState.length === 21 && (<>
              <h1>Cold Work Tool Steels (D2,D3,D4) </h1>
              <a href='https://en.wikipedia.org/wiki/SAE_steel_grades'
              target="_blank"
              >Click To Know More!</a>
              {[images.d2steel].map((d2steel, index) => (
                <img src={d2steel} alt="profile_bg" />))}
                </>)}
            {ApplicationState.length === 41 && (<>
              <h1>Air & Oil Hardening Tool Steels</h1>
              <a href='https://www.azom.com/article.aspx?ArticleID=6141#:~:text=Cold%20work%20tool%20steels%20are,Air%2Dhardening%20steels'
              target="_blank"
              >Click To Know More!</a>
              {[images.airhardsteel].map((airhardsteel, index) => (
                <img src={airhardsteel} alt="profile_bg" />))}
                </>)}
            {ApplicationState.length === 47 && (<>
              <h1>Oil Hardening Tool Steels</h1>
              <a href='https://www.azom.com/article.aspx?ArticleID=6141#:~:text=Cold%20work%20tool%20steels%20are,Air%2Dhardening%20steels'
              target="_blank"
              >Click To Know More!</a>
              {[images.oilhardsteel].map((oilhardsteel, index) => (
                <img src={oilhardsteel} alt="profile_bg" />))}
                </>)}            
    </section>

   
    </>
  )
}

export default Searchmaterials