import React from 'react'

function Countries() {
    const arrayCountries = [
        {
            title: "Ukraine",
            flag:<img src="data:image/png;base64,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" alt="flag" />},
            {
                title: "Germany",
                flag: <img style={{width:'225px'}} src="https://emojigraph.org/media/facebook/flag-germany_1f1e9-1f1ea.png" alt="flag" /> 
            },
            {
                title:"Belgium",
                flag: <img style={{width:'225px'}} src="https://em-content.zobj.net/source/skype/289/flag-belgium_1f1e7-1f1ea.png" alt="" />
            },
            {
                title: "Rusland",
                flag: <img src="data:image/png;base64,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" alt="flag" /> 
            },
            {
                title: "Moldova",
                flag: <img src="data:image/png;base64,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" alt="flag" />
            },
            {
                title:"Luxemburg",
                flag: <img style={{width:'225px'}} src="https://emojigraph.org/media/facebook/flag-luxembourg_1f1f1-1f1fa.png" alt="flag" />

            },
            {
                title:"Nitherlands",
                flag: <img style={{width:'225px'}} src="https://emojigraph.org/media/facebook/flag-netherlands_1f1f3-1f1f1.png" alt="flag" />
            },
            {
                title: "Hungary",
                flag: <img style={{width:'225px', height:'225px'}} src="https://images.emojiterra.com/twitter/v13.1/512px/1f1ed-1f1fa.png" alt="flag" />
            },
            {
                title: "Turkey",
                flag: <img style={{width:'225px'}} src="https://emojigraph.org/media/facebook/flag-turkey_1f1f9-1f1f7.png" alt="flag" />
            },
            {
                title: "Egypt",
                flag: <img style={{width:'225px'}} src="https://emojigraph.org/media/facebook/flag-egypt_1f1ea-1f1ec.png" alt="flag" />
            }
        ]
  return (
    <>
    <h1 style={{margin:'50px'}} >Visited countries:</h1>
        <div style={{display:"flex", flexWrap:"wrap", margin:"50px", justifyContent:"center", gap:"60px"}}>
        {arrayCountries.map((country,index)=>(
            <div key={index} >
                
                <div>
                <h1 style={{textAlign: 'center'}}>{country.title}</h1>
                    {country.flag}</div>
            </div>

        ))}

    </div>
    </>

  )
}

export default Countries