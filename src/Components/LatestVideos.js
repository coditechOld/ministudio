import React from 'react';
import'./App.css'
class LatestVideos extends React.Component {
  constructor() {
    super();
    
  }
render(){
  return(
<div>
  <div className="first-video">
  <h1 className = "h1"style={{textAlign:'center'}}>LATEST VIDEOS</h1>
<iframe width="480" height="315" src="https://www.youtube.com/embed/I-2_75rkz_Q" />
<iframe className = "second" width="480" height="315" src="https://www.youtube.com/embed/lwPUigPSYsA"/>
</div>   
<div className = "divbtn">Watch More</div>
</div>
  )
}
  



  
}
  

export default LatestVideos;