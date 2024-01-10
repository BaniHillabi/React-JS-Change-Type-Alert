import React from 'react'


export default class Media extends React.Component{
    render(){
        return(
            <div className={'row alert alert-' + this.props.type}>
                <div className='col col-auto text-left'>
                    <h4 className='mt-0'>{this.props.title}</h4>
                    <p>{this.props.children}</p>
                </div>
            </div>
        )
    }
} 
