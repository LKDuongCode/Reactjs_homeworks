import React, { Component } from 'react'
//create interface
interface Props {
    title:string;
}

//data type for Cpn
export default class Ex7 extends Component<any,Props> {
    //create constructor
    constructor(pro:Props) {
        super(pro);
        //create state
        this.state = {
            title:'This is title !'
        }
    }
    componentWillMount(): void {
        this.setState({
            title: 'Title was updated!'
        })
    }
  render() {
    return (
      <>
        <h3>Title : {this.state.title}</h3>
      </>
    )
  }
}
