import React from 'react';
import {connect} from 'react-redux'
import {removeFeat} from '../actions/RemoveFeature'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>{
        props.removeFeat(props.feature)
      }} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state)=>{
  return{


  }
}

export default connect(mapStateToProps,{removeFeat})(AddedFeature);

