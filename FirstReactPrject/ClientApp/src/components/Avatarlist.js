﻿import React from 'react';

const Avatarlist = (props) => {

    return(

        <div className="avatarstyle ma4 bg-light-purple dib pa3 grow  shadow-4 tc">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
            <h1 className=""> {props.name} </h1>
            <p> {props.work} </p>

        </div>


    )




}

export default Avatarlist;

//state is managed within the component.
//state can be changed.
//useState Hook - functional Component
//this.state - class components.
