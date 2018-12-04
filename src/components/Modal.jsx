import React, { Component } from 'react';
import {ADD_MEMBERS} from '../constants/copy';
import ReactDOM from 'react-dom';
import {Cancel} from '@material-ui/icons';
import {title, key_pref} from '../constants/constants';

const appRoot = document.getElementById('root');
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');

    this.state = {
      'name':null, 'company':null, 'status':null, 'last_updated':null, 'notes':null
    }

    this.saveText = this.saveText.bind(this);
    this.sendData = this.sendData.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    appRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    appRoot.removeChild(this.el);
  }

  saveText(e) {
  	e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  sendData(e) {
    const {sendDataToParent} = this.props;
          
    let flag = true;

    Object.keys(this.state).forEach((value)=>{
      if (!this.state[value]){
        alert(`Please fill your ${value} details`);
        flag=false;
      }
    })

    flag && sendDataToParent(this.state);
  }

  hideModal() {
    const {hideModal} = this.props;

    hideModal();
  }
  
  render() {
    return ReactDOM.createPortal(
    	<div className="container-modal">
      		<div className="modal-wrapper">
      			<div onClick={this.hideModal}>
      				<Cancel/>
      			</div>
      		<div className="input-wrapper">
      		{
        		title.map((value,index)=>{
           			return (   
    					<input type="text" className="inputContainer" onChange={this.saveText} placeholder={`Enter your ${value}`} name={Object.keys(key_pref)[index]} required/>
     				)
        		})
      		}
   			</div>

    		<div className = 'add-member' onClick={this.sendData}>{ADD_MEMBERS}</div>
   		</div>
  	</div>,

    this.el,
    );
  }
}