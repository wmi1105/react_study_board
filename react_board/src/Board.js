import React, { Component } from 'react';

class Board extends Component{

  constructor(props){
    super(props);
    this.child = React.createRef();
  }

  state = {
    maxNo : 3,
    boards : [
      {
        brdno : 1,
        brdwriter : 'Lee sunSin',
        brdtitle:'If you intend to live then you die',
        brddate: new Date()
      },
      {
        brdno : 2,
        brdwriter : 'So SiNo',
        brdtitle: 'Founder for two couteries',
        brddate: new Date()
      }
    ]
  }

  handleSaveData = (data) => {
    let boards = this.state.boards;
    if(data.brdno === null || data.brdno === '' || data.brdno === undefined){ //insert
      this.setState({
        maxNo : this.state.maxNo+1,
        boards:this.state.boards.concat({brdno:this.state.maxNo, brddate:new Date(), ...data})
      })
    }else{
      this.setState({   //update
        boards : boards.map(row => data.brdno === row.brdno ? {...data} : row)
      })
    }
    
  }

  handleSelectRow = (row) => {
    this.child.current.handleSelectRow(row);
  }

  handleRemove = (brdno) =>{
    this.setState({
      boards : this.state.boards.filter(row => row.brdno !== brdno)
    })
  }

  render(){
    const {boards} = this.state;
    // const list = boards.map(function(row){
    //   return row.brdno + row.brdwriter;
    // })

    return(
      <div>
        <BoardForm onSaveData = {this.handleSaveData} ref={this.child}/>  
        {/* 각 컴포넌트의 핸들을 가지고 오는 속성 ref를 this.child에 보관하는 방법 */}
        
        <table>
          <thead>
            <tr>
              <th>no.</th>
              <th>title</th>
              <th>name</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
          { 
            boards.map(row => 
              (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />) 
            )
          }
          </tbody>
        </table>
      </div>
    )
  }
}

class BoardItem extends React.Component{
  handleRemove = () => {
    const {row, onRemove} = this.props;
    onRemove(row.brdno);
  }

  handleSelectRow = () => {
    const {row, onSelectRow} = this.props;
    onSelectRow(row)
  }

  render(){
    return(
      <tr>
        <td>{this.props.row.brdno}</td>
        <td><a href='#' onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
        <td>{this.props.row.brdwriter}</td>
        <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
        <td><button onClick={this.handleRemove}>X</button></td>
      </tr>
    )
  }
}

class BoardForm extends Component{
  state = {
    brdwriter : '',
    brdtitle:''
  }

  handleChange = (e) => {   //onChange event
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveData(this.state);
    this.setState({
      brdno : '',
      brdwriter:'',
      brdtitle:''
    });
  }

  handleSelectRow = (row) => {
    this.setState(row)
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <input placeholder="title" name="brdtitle" value={this.state.brdtitle} onChange={this.handleChange}/>
        <input placeholder="name" name="brdwriter" value={this.state.brdwriter} onChange={this.handleChange}/>
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default Board;
