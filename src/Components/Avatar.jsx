import React from "react";


function Avatar(props) {
  // const favoriteAnimal = "Favorite Animals: Bear";
  const img =
     "https://cdnn1.img.sputnik-abkhazia.info/img/102880/56/1028805662_0:173:3027:1876_1920x0_80_0_0_f847d45ac0390deaeb510e20cd9ccabb.jpg";
  return (
    <div>
    
      <img style={{ width: "100%", height:'auto', borderRadius:'30px' }} src={img} alt="bear" />
      {props.children}
    </div>
  );
}

export default Avatar;
