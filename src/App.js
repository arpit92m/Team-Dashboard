import React, { Component } from 'react';
import './App.scss';
import {TEAM_MEMBERS, ADD_MEMBERS, data} from './constants/copy';
import Modal from './components/Modal';
import {Add, Delete, ArrowUpward, ArrowDownward} from '@material-ui/icons';
import {key_pref, title} from './constants/constants';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      team_data: null,
      showModal: false,
      selectAll: false,
      check: null,
      ascendingName: null
    }

    this.mainCheckbox = React.createRef();
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.addData = this.addData.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.checkMainBox = this.checkMainBox.bind(this);
    
  }

  componentWillMount() {
    let checkStatus = [];
    data.forEach((value, index)=>{
      checkStatus.push(false);
    });
    this.setState({ team_data: this.arrangeData(data), check: checkStatus});
  }

//for storing in local Storage
  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }


//for storing data from local storage to component state
  UpdateWithLocalStorage() {
    for (let key in this.state) {
      if (window.localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount(){
    this.UpdateWithLocalStorage();
//added eventListener which will be called before page unload so that data from component state can stored to localStoragr

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const {check} = this.state;

    if(check.every((currentValue)=> currentValue)) {
      this.mainCheckbox.current.checked = true;
    }
    else {
      this.mainCheckbox.current.checked = false;
    }
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  handleShow() {
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
  }

//function to select all/ unselect all checkboxes of team members
  checkMainBox() {
    const {check, selectAll} = this.state;

    let updatedCheck = check.map((value)=>{
      return (selectAll ? false: true);
    })

    this.setState({check: updatedCheck, selectAll: !selectAll});
  }

//function to sort elements by Name
  sortByName(e) {
      const {team_data, ascendingName}=this.state;
      let sorted_team_data;

      if(!ascendingName) {
        sorted_team_data= team_data.sort((a, b) => a[0].localeCompare(b[0]))
      }
      else {
        sorted_team_data= team_data.sort((a, b) => b[0].localeCompare(a[0]))
      }

      this.setState({team_data: sorted_team_data, ascendingName: !ascendingName})
  }

  deleteItem(e) {
    e.preventDefault();

    const {team_data, check}=this.state,
          index_to_be_deleted = e.currentTarget.parentElement.getAttribute('data-idx');
          team_data.splice(index_to_be_deleted, 1);
          check.splice(index_to_be_deleted, 1);

    this.setState({team_data, check})
  }

  addData(new_row) {
    const {team_data, check}=this.state,
          new_data = this.arrangeData([new_row])[0];

    let updated_team_data=[...team_data, new_data];

    this.setState({showModal: false, team_data: updated_team_data, check: [...check, false]});
  }

  checkItem(e) {
    const {check}=this.state,
          index_to_be_updated = e.target.parentElement.getAttribute('data-idx');
          check[index_to_be_updated] = !check[index_to_be_updated];

    this.setState({check});
  }

//function to dynamically arrange data in the title order
  arrangeData(data) {
    let sortable = [],
        keysSorted;

    data.forEach((value, index)=>{
      sortable.push([]);
    });

    data.forEach((value, index)=>{

      keysSorted = Object.keys(value).sort((a,b)=>{
        return key_pref[b]-key_pref[a];
      });

      keysSorted.forEach((data, idx)=>{
          sortable[index].push(value[keysSorted[idx]]);
      });
    });

    return sortable;
  }

  render() {
    const {team_data, showModal, check, ascendingName}=this.state,
          IconNameTitle = ascendingName ? ArrowUpward : ArrowDownward;
    
    return (
      <div className="App">
        { showModal && <Modal sendDataToParent={this.addData} hideModal={this.handleHide}/> }

        <div className = "team-heading"> 
          <div className = 'team-member'>{TEAM_MEMBERS}</div>
          <div className = 'add-member' onClick={this.handleShow}>{ADD_MEMBERS}<Add/></div>
        </div>
        <div className='table-content'>
          <div className = "title-heading" onClick={this.sortByName}>
          <input type="checkbox" className = 'table-header-cell' name={'select-all'} ref = {this.mainCheckbox} onClick = {this.checkMainBox}/>

          {
            title.map((value, index)=>{
              return (
                value === 'Name' ?
                <div key={index} className='table-header-cell'>{value}{ascendingName !== null && <IconNameTitle/>}</div> :
                <div key={index} className='table-header-cell'>{value}</div> 
              )
            })
          }

          <div className='table-header-cell'>{' '}</div>
        </div>

        <div className = 'table-body'>
        {
          team_data.map((data_row, idx)=>{
            return (
              <div data-idx={idx} className = 'team-row'>
              <input onChange={this.checkItem} className = 'team-field' type="checkbox" name={`row${idx}`} checked={check[idx]}/>
              {
                data_row.map((data_field, index)=>{
                  return (
                    <div className = 'team-field' key = {index}>{data_field}</div>
                  )
                })
              }
              <div className = 'team-field' onClick={this.deleteItem}><Delete/></div>
            </div>
          )
        })
      }
      </div>
    </div>
  </div>
  );
}}

export default App;
