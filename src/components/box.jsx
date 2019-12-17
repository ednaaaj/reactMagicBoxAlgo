import React, { Component } from 'react';
import { cpus } from 'os';

class box extends Component {
    state = {  
        el: [],
        willMount: false,
        result: false,
        all: 1
    }

    magicSquare = () => {

  
            let size = this.props.odd * this.props.odd;
            let elements = new Array();
            let row = Math.floor(this.props.odd / 2);
            let col = this.props.odd - 1;
            
            for(let i = 0; i < this.props.odd; i++){
                elements[i] = new Array();
                for(let j = 0; j < this.props.odd; j++){
                    elements[i][j] = 0;
                }
            }
            console.log(elements);
            elements[row][col] = 1;
            // i - 1 , j + 1
            for(let i = 2 ; i <= size; i++){
        
            
                    
                row--;col++;
                    
                    
                    if(row == -1 && col == this.props.odd){
                        row = 0;
                        col = this.props.odd - 2;
                    }else{
                        if(col == this.props.odd)
                        col = 0;
                        
                        if(row == -1)
                        row = this.props.odd - 1;
                    }

                    if(elements[row][col]){
                        row++;
                        col -= 2;
                    }

                    elements[row][col] = i;
                   

                
            }  

            this.setState({el: elements});
      
    }

    popText = () => {
        let size = this.props.odd * this.props.odd;
        
        let flag = 0;
        for(let i = 1; i<= size;i++){
            let id =  document.querySelector(`.col-${i}`);
           
                setTimeout(()=>{
                    
                    
                    id.classList.add('addSomeStyle');
                    setTimeout(()=>{
                        id.innerHTML = i;
                    },200)
                
                },i * 300)
                
            id.classList.remove('addSomeStyle');
        
        }


    
    }
    componentWillMount= () => {
        setTimeout(() => {
            this.setState({willMount: true});
            this.magicSquare();
            this.popText();
        },3000);

    }


    componentDidMount = () => {

        let size = this.props.odd * this.props.odd;
        let eachItem = new Array();

    
        setTimeout(() => {
            console.log(this.state.all);
            this.state.el.forEach(e => {
                
                e.forEach((a,i) => {

                    eachItem.push(a);


                })
            })


            eachItem.forEach((el,ind) => {
                setTimeout(() => {
                    document.querySelector(`.col-${el}`).classList.add('red');
                },ind * 50)
            })

            setTimeout(() => {
                
                for(let i = size; i >= 1; i--){
                    setTimeout(()=>{
                        document.querySelector(`.col-${i}`).classList.add('darkRed');
                    }, i * 50)
                    
                    this.setState({result:true});
                    
                }
            },size * 75);

        

        }, size * 500);


      
    }
    render() { 
        let result = this.props.odd*(Math.pow(this.props.odd,2)+1)/2;
        if(this.state.willMount){
            return(
                <div>
                    {
                         this.state.el.map(element => {
                                   
                             return element.map((fil,index) => {
                                let num = 1;
                                num++;
                                let cc = `col num-${num} col-${fil}`;   
                                return <div className={cc} style={{width: `calc(100% / ${this.props.odd})`}}></div>
                             });
                        })
                    }
                    <br></br>
                    <br/>
                    <br/>
                    {
                    this.state.result ? <div><h3>All sides diagonally,vertically or horizontal are now equal to <span style={{color:'red'}}>{result} </span> </h3></div> : ''}
                </div>
            )
        }else{
            return(
                <div>
                   Setting up your magic box result...
                </div>
            )
        }

    
       
        }
        
    
   

    
}
 
export default box;