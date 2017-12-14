import React, { Component } from 'react';

/*
* Use this component as a launching-pad to build your functionality.
* Api key: AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A
*
*/

export default class YourComponent extends Component {

  render() {
    return (
      <div class="container">
      <div style={divStyle}>
      <div id="map" style={divStyle}></div>
      <div id="over_map" style={overMap}>asdasd</div>
      </div>
</div>
    );
  }

}

var divStyle = {
  height : '100%', width : '100%', top : '0', left : '0', position : 'absolute', zindex : '200',
};

var overMap = {
  background: '#fff', height : '10%', width : '30%', top : '0', left : '0', position : 'absolute', zindex : '201',
}
