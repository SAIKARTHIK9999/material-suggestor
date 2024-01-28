import React,{useState} from 'react';

import './Searchmaterials.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {images} from '../../constants';

const Searchmaterials = () => {

  const [toughnessState, setToughnessState] = useState(false);
  const [scratchResistance, setScratchResistanceState] = useState(false);
  const [ductilityState, setDuctilityState] = useState(false);
  const [machinabilityState, setMachinabilityState] = useState(false);
  const [ApplicationState, setApplicationState] = useState(false);


  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  
    <h1 id='title'>MATERIAL SUGGESTER</h1>
    
    
    <h4 id='sub-title'>Data Collection</h4>

    <span>
    Choose the options according to your requirement and experience the magic of Thermal Star!
    </span>
    <br/>
    <br/>

  <div className='container'>
    <label id='lb'>Choose Toughness&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
    <br/>
    <br/>
    <select 
    className='custom-select'
    onChange={(e) => {
      const selectedToughness = e.target.value;
      setToughnessState(selectedToughness);
    }}
    >
      <option className='optn' value='low'>Low</option>
      <option className='optn' value='medium'>Medium</option>
      <option className='optn' value='high'>High</option>
    </select>
    </div>
    <br></br>
    <br></br>
    

<div className='container' >
<label>Choose Hardness&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
<br/>
<br/>
<select 
    className='custom-select'
    onChange={(e) => {
      const selectedScratchResistance = e.target.value;
      setScratchResistanceState(selectedScratchResistance);
    }}
    >
      <option value='low'>Low</option>
      <option value='medium'>Medium</option>
      <option value='high'>High</option>
    </select>
</div>

<br></br>
<br></br>

<div className='container'>
  <label>Choose Ductility&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
  <br/>
  <br/>
<select 
    className='custom-select'
    onChange={(e) => {
      const selectedDuctility = e.target.value;
      setDuctilityState(selectedDuctility);
    }}
    >
      <option className='optn' value='low'>Low</option>
      <option className='optn' value='medium'>Medium</option>
      <option className='optn' value='high'>High</option>
    </select>
</div>

<br></br>
<br></br>

<div className='container'>
    <label>Choose Machinability&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
    <br/>
    <br/>
    <select 
    className='custom-select'
    onChange={(e) => {
      const selectedMachinability = e.target.value;
      setMachinabilityState(selectedMachinability);
    }}
    >
      <option className='optn' value='low'>Low</option>
      <option className='optn' value='medium'>Medium</option>
      <option className='optn' value='high'>High</option>
    </select>

   
    </div>
    <section className='result'>
    {toughnessState.length === 6 && scratchResistance.length === 6 && ductilityState.length === 6 && machinabilityState.length === 4 && (<>
              <h1>Cartridge Brass, Admiralty Brass, Muntz Metal, 416,430,416Se,430F,301,303, 303Se Stainless Steels, Britannia Silver, Pewter, Shibuichi, Spring Steel </h1>
              <a href='https://www.copper.org/applications/industrial/DesignGuide/selection/brasses02.html#:~:text=Cartridge%20brass%2C%20a%20copper%20alloy,contacts%2C%20and%20other%20connector%20components.'
              target="_blank"
              >Click To Know More!</a>
              {[images.cartidgebrass].map((cartidgebrass, index) => (
            <img src={cartidgebrass} alt="profile_bg" />))}
              <a href='http://ameritube.net/c44300-admiralty-brass/#:~:text=Admiralty%20brass%20is%20composed%20of,these%20tubes%20are%20very%20useful.'
              target="_blank"
              >Click To Know More!</a>
              {[images.muntzmetal].map((muntzmetal, index) => (
            <img src={muntzmetal} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/Muntz_metal'
              target="_blank"
              >Click To Know More!</a>
              {[images.admbrass].map((admbrass, index) => (
            <img src={admbrass} alt="profile_bg" />))}
            <a href='https://www.pennstainless.com/resources/product-information/stainless-grades/400-series/'
              target="_blank"
              >Click To Know More!</a>
              {[images.admbrass].map((admbrass, index) => (
            <img src={admbrass} alt="profile_bg" />))}
            <a href='https://www.nealloys.com/300_series_alloy.php'
              target="_blank"
              >Click To Know More!</a>
              {[images.britsilver].map((britsilver, index) => (
            <img src={britsilver} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/Britannia_silver'
              target="_blank"
              >Click To Know More!</a>
              {[images.pewter].map((pewter, index) => (
            <img src={pewter} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/Pewter#:~:text=Pewter%20(%2F%CB%88pju%CB%90t,pewter%2C%20imparting%20a%20bluish%20tint.'
              target="_blank"
              >Click To Know More!</a>
              {[images.shibuichi].map((shibuichi, index) => (
            <img src={shibuichi} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/Shibuichi'
              target="_blank"
              >Click To Know More!</a>
              {[images.springsteel].map((admbrass, index) => (
            <img src={admbrass} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/Spring_steel'
              target="_blank"
              >Click To Know More!</a>
              {[images.admbrass].map((admbrass, index) => (
            <img src={admbrass} alt="profile_bg" />))}
            </>)}
            {toughnessState.length === 4 && scratchResistance.length === 6 && ductilityState.length === 4 && machinabilityState.length === 3 && (<>
              <h1>Ni 316 Steel</h1>
              <a href='https://en.wikipedia.org/wiki/Iron%E2%80%93nickel_alloy'
              target="_blank"
              >Click To Know More!</a>
              {[images.nickelsteel].map((nickelsteel, index) => (
            <img src={nickelsteel} alt="profile_bg" />))}
            </>)}
            {toughnessState.length === 6 && scratchResistance.length === 6 && ductilityState.length === 3 && machinabilityState.length === 6 && (<>
              <h1>Cr 408 Steel</h1>
              <a href='https://www.hardening-of-stainless-steel.com/materials/chromium-steel/'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>)}
            {toughnessState.length === 6 && scratchResistance.length === 3 && ductilityState.length === 6 &&  machinabilityState.length === 4 && (<>
              <h1>Cr 409 Steel, Leaded Brass, Britannium</h1>
              <a href='https://www.azom.com/article.aspx?ArticleID=969'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            <a href='https://www.avivametals.com/collections/leaded-brass'
              target="_blank"
              >Click To Know More!</a>
              {[images.leadedbrass].map((leadedbrass, index) => (
            <img src={leadedbrass} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/Britannia_metal#:~:text=Britannia%20metal%20(also%20called%20britannium,antimony%2C%20and%202%25%20copper.'
              target="_blank"
              >Click To Know More!</a>
              {[images.britmetal].map((britmetal, index) => (
            <img src={britmetal} alt="profile_bg" />))}
            </>)}
            {toughnessState.length === 4 && scratchResistance.length === 6 && ductilityState.length === 6 && machinabilityState.length === 6 && (<>
              <h1>Cr 410 Steel, 403,410,414 Stainless Steels</h1>
              <a href='https://www.sandmeyersteel.com/410.html#:~:text=Alloy%20410%20(UNS%20S41000)%20is,ductile%20and%20may%20be%20formed.'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            <a href='https://www.pennstainless.com/resources/product-information/stainless-grades/400-series/'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}  
            </>
            )}
            {toughnessState.length === 6 && scratchResistance.length === 3 && ductilityState.length === 6 && machinabilityState.length === 3 && (<>
              <h1>446 Stainless Steel</h1>
              <a href='https://www.pennstainless.com/resources/product-information/stainless-grades/400-series/'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 4 && scratchResistance.length === 6 && ductilityState.length === 6 && machinabilityState.length === 3 && (<>
              <h1>Zamak, 442, 202 Stainless Steels</h1>
              <a href='https://en.wikipedia.org/wiki/Zamak'
              target="_blank"
              >Click To Know More!</a>
              {[images.Zamak].map((Zamak, index) => (
            <img src={Zamak} alt="profile_bg" />))}
            <a href='https://www.azom.com/article.aspx?ArticleID=8274#:~:text=Stainless%20steel%20grade%20442%20is,single%20precipitation%20or%20aging%20treatment.'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            <a href='https://www.azom.com/article.aspx?ArticleID=8209'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 6 && scratchResistance.length === 4 && ductilityState.length === 6 && machinabilityState.length === 3 && (<>
              <h1>440B, 420, 302 Stainless Steel</h1>
              <a href='https://www.azom.com/article.aspx?ArticleID=6816'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            <a href='https://www.pennstainless.com/resources/product-information/stainless-grades/400-series/420-stainless-steel/#:~:text=Alloy%20420%20is%20a%20hardenable,to%20give%20corrosion%20resistant%20properties.'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            <a href='https://www.azom.com/article.aspx?ArticleID=8197'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 3 && scratchResistance.length === 4 && ductilityState.length === 4 && machinabilityState.length === 3 && (<>
              <h1>440C Steel</h1>
              <a href='https://matmatch.com/learn/material/440c-stainless-steel'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 6 && scratchResistance.length === 6 && ductilityState.length === 4 && machinabilityState.length === 6 && (<>
              <h1>431 Stainless Steel</h1>
              <a href='https://www.azom.com/article.aspx?ArticleID=1023'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 6 && scratchResistance.length === 4 && ductilityState.length === 4 && machinabilityState.length === 3 && (<>
              <h1>440A Stainless Steel</h1>
              <a href='https://www.univstainless.com/440a/'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 6 && scratchResistance.length === 6 && ductilityState.length === 4 && machinabilityState.length === 4 && (<>
              <h1>Brass, Billon, Sterling Silver, 303Se Stainless Steel</h1>
              <a href='https://en.wikipedia.org/wiki/Brass'
              target="_blank"
              >Click To Know More!</a>
              {[images.brass].map((brass, index) => (
            <img src={brass} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/Billon_(alloy)'
              target="_blank"
              >Click To Know More!</a>
              {[images.billon].map((billon, index) => (
            <img src={billon} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/Brass'
              target="_blank"
              >Click To Know More!</a>
              {[images.sterlingsilver].map((sterlingsilver, index) => (
            <img src={sterlingsilver} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/Sterling_silver'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            <a href='https://www.azom.com/article.aspx?ArticleID=8204'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 6 && scratchResistance.length === 6 && ductilityState.length === 6 && machinabilityState.length === 3 && (<>
              <h1>302B, 304 Stainless Steels</h1>
              <a href='https://www.azom.com/article.aspx?ArticleID=8196'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/SAE_304_stainless_steel'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            
            </>
            )}
            {toughnessState.length === 6 && scratchResistance.length === 6 && ductilityState.length === 4 && machinabilityState.length === 3 && (<>
              <h1>201 Stainless Steel</h1>
              <a href='https://www.thoughtco.com/type-201-stainless-steel-2340260'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 4 && scratchResistance.length === 6 && ductilityState.length === 6 && machinabilityState.length === 4 && (<>
              <h1>Electrum, 6Al-4v, 430Se Stainless Steel</h1>
              <a href='https://en.wikipedia.org/wiki/Electrum'
              target="_blank"
              >Click To Know More!</a>
              {[images.electrum].map((electrum, index) => (
            <img src={electrum} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/Ti-6Al-4V'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            <a href='http://www.sunmach.net/Alloys/Stainless-Steel-430-or-430F-or-430F-SE-Manufacturers.html'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 6 && scratchResistance.length === 3 && ductilityState.length === 6 && machinabilityState.length === 6 && (<>
              <h1>Solder</h1>
              <a href='https://en.wikipedia.org/wiki/Solder'
              target="_blank"
              >Click To Know More!</a>
              {[images.solder].map((solder, index) => (
            <img src={solder} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 3 && scratchResistance.length === 4 && ductilityState.length === 4 && machinabilityState.length === 3 && (<>
              <h1>Iridium, Osmium, Rhodium-Platinum Alloy</h1>
              <a href='https://en.wikipedia.org/wiki/Iridium'
              target="_blank"
              >Click To Know More!</a>
              {[images.Iridium].map((Iridium, index) => (
            <img src={Iridium} alt="profile_bg" />))}
            <a href='https://en.wikipedia.org/wiki/Osmium#:~:text=Osmium%20(from%20Greek%20%E1%BD%80%CF%83%CE%BC%CE%AE%2C%20osme,the%20densest%20naturally%20occurring%20element.'
              target="_blank"
              >Click To Know More!</a>
              {[images.Iridium].map((Iridium, index) => (
            <img src={Iridium} alt="profile_bg" />))}
            <a href='https://technology.matthey.com/article/5/2/58-65/'
              target="_blank"
              >Click To Know More!</a>
              {[images.Osmium].map((Osmium, index) => (
            <img src={Osmium} alt="profile_bg" />))}
            
            </>
            )}
            {toughnessState.length === 4 && scratchResistance.length === 6 && ductilityState.length === 4 && machinabilityState.length === 6 && (<>
              <h1>Hadfield Steel</h1>
              <a href='https://en.wikipedia.org/wiki/Mangalloy'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 6 && scratchResistance.length === 6 && ductilityState.length === 3 && machinabilityState.length === 6 && (<>
              <h1>Ball Bearing Steel</h1>
              <a href='https://en.wikipedia.org/wiki/Ball_(bearing)'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 6 && scratchResistance.length === 6 && ductilityState.length === 4 && machinabilityState.length === 3 && (<>
              <h1>Rhodium-Palladium Alloy</h1>
              <a href='https://www.nature.com/articles/180334a0'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 6 && scratchResistance.length === 3 && ductilityState.length === 6 && machinabilityState.length === 4 && (<>
              <h1>Pseudo Palladium</h1>
              <a href='https://en.wikipedia.org/wiki/Pseudo_palladium#:~:text=Pseudo%20palladium%20(RhAg)%20is%20a,possible%20using%20more%20conventional%20methods.'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 3 && scratchResistance.length === 4 && ductilityState.length === 6 && machinabilityState.length === 6 && (<>
              <h1>Ruthenium</h1>
              <a href='https://en.wikipedia.org/wiki/Ruthenium'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 4 && scratchResistance.length === 6 && ductilityState.length === 6 && machinabilityState.length === 6 && (<>
              <h1>Ti Beta-C</h1>
              <a href='https://www.matweb.com/search/datasheet_print.aspx?matguid=1366b26eea18429eb7be04e08d5f6636'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
            {toughnessState.length === 3 && scratchResistance.length === 4 && ductilityState.length === 4 && machinabilityState.length === 3 && (<>
              <h1>Stellite</h1>
              <a href='https://www.hardening-of-stainless-steel.com/materials/chromium-steel/'
              target="_blank"
              >Click To Know More!</a>
              {[images.crsteel].map((crsteel, index) => (
            <img src={crsteel} alt="profile_bg" />))}
            </>
            )}
    </section>

   
    </>
  )
}

export default Searchmaterials