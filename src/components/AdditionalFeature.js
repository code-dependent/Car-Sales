import React from 'react';
import {addFeat} from '../actions/AddFeat'
import { connect } from "react-redux";

import{removeFeat} from '../actions/RemoveFeature'

const AdditionalFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=>{
        props.addFeat(props.feature)
      }} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state)=>{
  return{


  }
}

export default connect(mapStateToProps,{addFeat,removeFeat})(AdditionalFeature);
