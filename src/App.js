import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from "lodash"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  changeItem = (index, item) => {
    let list = this.state.list;
    list[index] = item;
    this.setState({
      list: list,
    })
  }

  onAdd = () => {
    let list = this.state.list;

    list.forEach(element => {
      element.visible = true;
    });

    let input = this.refs.addContent;
    let inputValue = input.value;

    let item = {
      value : inputValue,
      visible : true,
      checkStatus : false
    }

    list.push(item);
    this.setState({
      list: list,
    })
  }

  onCancelFilter = () => {
    let list = this.state.list;

    list.forEach(element => {
      element.visible = true;
    });
    
    this.setState({
      list: list,
    })
  }


  onFilter = () => {
    let list = this.state.list;

    list.forEach(element => {
      element.visible = false;
    });

    let input = this.refs.filterContent;
    let inputValue = input.value;

    // console.log("inputValue", inputValue)
    list.forEach(element => {
      // console.log('f', new RegExp(inputValue).test(element.value))
      // console.log('ele', element)
      if (new RegExp(inputValue).test(element.value)) {
        element.visible = true;
      }
    });
    this.setState({
      list: list
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <input type="text" ref="filterContent" />
          <button onClick={this.onFilter}>filter</button>
          <button onClick={this.onCancelFilter}>cancel filter</button>

        </div>

        <div>
          <input type="text" ref="addContent" />
          <button onClick={this.onAdd}>add</button>
        </div>

        {/* {
          this.state.list.map((item) => {
          return <ListItem toDoContent={item} key={item} />
        })} */}

        <List  list={this.state.list} changeItem={this.changeItem}/>

      </div>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let l = this.props.list.filter((element) => element.visible)
    return (l.map((item, index) => {
      if (item.visible) {
        return <ListItem item={item} index={index} changeItem={this.props.changeItem} key={item} />
      } else {
        return <span/>
      }
    }));
  }
}

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  onWancheng = () => {
    if (this.props.item.checkStatus === true) {
      let item = {
        value:this.props.item.value,
        checkStatus:false,
        visible:true
      }
      this.props.changeItem(this.props.index, item)
    } else {
      let item = {
        value:this.props.item.value,
        checkStatus:true,
        visible:true
      }
      this.props.changeItem(this.props.index, item)
    }
  }

  render() {
    return (
      <div>
        <input type='checkbox' name="todo" onClick={this.onWancheng} ></input>
        <TodoText item={this.props.item} index={this.props.index} changeItem={this.props.changeItem}/>
      </div>
    );
  }
}

class TodoText extends Component {
  constructor(props) {
    super(props);
  }

  changeContent = () => {
    let input = this.refs.inputContent;
    let inputValue = input.value;
    let item = {
      value:inputValue,
      checkStatus:this.props.item.checkStatus,
      visible:this.props.item.visible
    }
    this.props.changeItem(this.props.index, item)
    // console.log("change" + inputValue)
  }

  render() {
    if (this.props.item.checkStatus) {
      return <del>{this.props.item.value}</del>;
    } else {
      // return <span contentEditable="true" onChange={this.changeContent}>{this.props.todo}</span>;
      return <input ref='inputContent' onChange={this.changeContent} defaultValue={this.props.item.value}></input>;

    }
  }
}

export default App;
