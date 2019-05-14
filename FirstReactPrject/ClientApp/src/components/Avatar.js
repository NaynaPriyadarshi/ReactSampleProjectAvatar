import React, { Component } from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

//state only use in class component ...we cant use in function component.

//const Avatar = (props) => {

class Avatar extends Component {

    constructor() {

        super();
        this.state = {
            name: "Welcome to Avatar World "
        }
    }

    namechanger() {

        this.setState({

            name: "Thank You For visiting My AvatarPage"


        })


    }

    render() {

        const avatarlistarray = [

            {
                id: 1,
                name: "Andrew",
                work: "Web developer"

            },
            {
                id: 2,
                name: "Tanya",
                work: "Software developer"

            },
            {
                id: 3,
                name: "James",
                work: "BI developer"

            },
            {
                id: 4,
                name: "Meghan",
                work: "Tester"

            }





        ]

        const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {

            return <Avatarlist key={i} id={avatarlistarray[i].name}
                name={avatarlistarray[i].name}
                work={avatarlistarray[i].work} />


        })






        //Make a Array
        //const avatarlistarray = [

        //    {
        //        id: 1,
        //        name: "Andrew",
        //        work: "Web developer"

        //    },
        //    {
        //        id: 2,
        //        name: "Tanya",
        //        work: "Software developer"

        //    },
        //    {
        //        id: 3,
        //        name: "James",
        //        work: "BI developer"

        //    },
        //    {
        //        id: 4,
        //        name: "Meghan",
        //        work: "Tester"

        //    }





        //]

        //map in React js....map(callback(currentvalue,index,array) arg).......
        //when we arite function it is look like this...avatarlistarray.map( function(){

        //   })



       

            return (
                <div className="mainpage">
                    <h1>  {this.state.name} </h1>

                    {arrayavatarcard}

                    <button onClick={() => this.namechanger()}> Subscribe  </button>
                </div>

            )

       
    }

}

export default Avatar;