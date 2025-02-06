import React, { Component } from 'react'
import "./About.css"
import Header from '../../Compoments/Entet/Header/Header';
import Foother from '../../Compoments/Entet/Foother/Foother';
 const About=() => {
    return (
      <div>
         <Header/>
         <div>
          <div className='container-text'>
            <h1>Notre histoire commence maintenant.</h1>
            <p>
                Depuis quelque années <em>FINCS</em>  procure de la joie <br />
                aux gens
            </p>
            <h2>
                Nous diffusons des animés pour un voyage meiveilleux
            </h2>
            <p> Avec des animés  d'avanture,de comedie <br />
            science ficion plein d'autre .
             </p>
            <div className='image-about'>
            <div className="container-image-About"><img src="https://th.bing.com/th/id/OIP.vQfRRuMVF0vPIOoGi8ItIwAAAA?w=474&h=669&rs=1&pid=ImgDetMain" alt="" id="images-about" /></div>
           <div className="container-image-About"><img src="https://th.bing.com/th/id/R.a7e4aac2ca00b491e758e77566bf883c?rik=hGJCahua4mX%2bRg&pid=ImgRaw&r=0" alt=""id="images-about" /></div>
           <div className="container-image-About"><img src="https://th.bing.com/th/id/OIP.r4mcE_vIEIw-p4SKNDY14wHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain" alt="" id="images-about"/></div>
           <div className="container-image-About"><img src="https://th.bing.com/th/id/R.7754428b8b806b611b9e86c85b3014e4?rik=GOwwgxseHZAQ%2bw&pid=ImgRaw&r=0" alt="" id="images-about"/></div>
           <div className="container-image-About"><img src="https://th.bing.com/th/id/OIP.-9Lc5jzJ4rvWXR79tXXvPgHaFt?w=500&h=386&rs=1&pid=ImgDetMain" alt="" id="images-about"/></div>
         <div className="container-image-About"><img src="https://th.bing.com/th/id/OIP.G7DDcmPPoYEz7bN2hfdPcQAAAA?w=474&h=266&rs=1&pid=ImgDetMain" alt="" id="images-about" /></div>
         <div className="container-image-About"><img src="https://th.bing.com/th/id/OIP.HY5LZcrHS4dlbcULtCwkxgHaE8?w=600&h=400&rs=1&pid=ImgDetMain" alt="" id="images-about"/></div>  
            </div>
            <p>Découvrez comment <em>FINCS</em>  contribue à la distraction  des jeunes  avec des mangas de tout sorte  <br /> permettre aux jeunes,aux adultes de regarder suivre des animés en ligne.<br />
            Notre application resoudre un probleme très important,nous permettons aux jeunes de regarder des animés concernant leur age.
             <strong>NOTRE BUT EST DE VOUS FAIRE VOIYAGER</strong>
          </p>
          <div className="container-one-image"><img src="https://th.bing.com/th/id/OIP.5tlIbEfUSCfh6CGmkS54AQHaE-?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" id="images-about" /></div>
          <p>Nous souhaitons contribuer à améliorer la vie du plus grand nombre grâce à notre application</p>
          </div>
         
        </div> 
        <Foother/>
      </div>
    )
 
}
export default  About;