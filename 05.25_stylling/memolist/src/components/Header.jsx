import React,{useState} from 'react';
import Listitem from './Listitem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
//   import { fab } from '@fortawesome/free-brands-svg-icons'
  import { fas } from '@fortawesome/free-solid-svg-icons'

  library.add( fas)



export default function Header() {
    // all states
    const [input, setInput] = useState('')
    const [aList, setAList] = useState([])
    const [archive, setArchive] = useState(['My plan for the day!'])
    const [trash, setTrash]=useState([])


    // Event functions
    const inputChangeHandle = e => setInput(e.target.value);

    const addToListHandle = e => {
        let arc
        archive.length===0 ? alert('need add Archive first') : arc=archive[archive.length-1]
        
        setAList(prev => ([...prev, {
            text: input,
            edit: false,
            line: false,
            subCheck: false,
            sub:[],
            arc:arc,
            arcCheck:false
        }]));
        e.target.previousElementSibling.value=''
        setInput('')
       
    }

    const handleDelete =(index, e)=> {
        const newList = aList.filter((el,i)=>index!==i);
        setAList(newList)
    }

    const handleEdit = (index, e) => {
        const newList = aList.map((el, i)=>{
            if(index===i){
                if(e.target.type==="checkbox"){
                    
                    el.line = e.target.checked;
                    // console.log(el.line)
                    return el
                }

                if(el.edit){
                    if(e.target.previousElementSibling.value) {
                        el.text=e.target.previousElementSibling.value 
                    }          
                }

                el.edit = !el.edit;
                return el
            } else {return el}
        });
        setAList(newList);
    };

    const handleSubTask = (index, e) => {
        const newList = aList.map((el, i)=>{
            if(index===i) {
                if(el.subCheck){
                    let str = e.target.nextElementSibling.value
                    if(str){
                        el.sub.push(str)
                    }
                }

                el.subCheck = !el.subCheck 
                return el
                
            } else {
                return el
            }
        })
        setAList(newList);
    }

    const handleArc = (index, e) => {
        const newList = aList.map((el, i)=>{
            if(index===i){

                // if(el.arcCheck){
                //     el.arc
                // }
                el.arcCheck = !el.arcCheck;
                // console.log(el.arcCheck);
                return el;
            } else {return el}
        })
        setAList(newList);
    }

    const handleRadio = (index,e) => {
        const newList = aList.map((el, i)=>{
            if(index===i){

                if(e.target.checked){
                    el.arc= e.target.value
                    // console.log( el.arc)
                    el.arcCheck = !el.arcCheck;
                }
               
                return el;
            } else {return el}
        })
        setAList(newList);
    };

    const handleDelArc = (index, e) =>{
        // at this time we need to push some listitem to trash
        setTrash(prev =>([...prev, archive[index]]))

        const newArr = archive.filter((el,i)=>i!==index);  
        console.log(index);   
        setArchive(newArr)
    }

    const handleDelArc2 = (index, e) =>{      
        const newArr = trash.filter((el,i)=>i!==index);    
        setTrash(newArr)
    }

    // JSX
  return (
    <div>
        <h1>My Memo List</h1>

        <input type="text" /> <button onClick={e=>{
            let str = e.target.previousElementSibling.value
            if (str){
                
                setArchive(prev=> ([...prev, str]))
                e.target.previousElementSibling.value = '';
            }
        }}>Add Archive</button>
       
        {/* <div>
           {aList.map((el,i)=> (<Listitem obj={el} key={i} index={i} handleDelete={handleDelete} handleEdit={handleEdit} handleSubTask={handleSubTask} archive={archive} handleArc={handleArc} handleRadio={handleRadio}      />) )}
        </div> */}
        
        {/* <p>{input}</p> */}

         <main>

         {archive.map((str,n)=>{
            return <ul key={n}> {str} <button onClick={(e)=>handleDelArc(n,e)}><FontAwesomeIcon icon="fa-solid fa-ban" size='sm'/></button>
                {aList.map((el,i)=> {
                    if (el.arc===str) {
                        return (<Listitem obj={el} key={i} index={i} handleDelete={handleDelete} handleEdit={handleEdit} handleSubTask={handleSubTask} archive={archive} handleArc={handleArc} handleRadio={handleRadio}      />)
                    }
                    } )}

            </ul>
        })}

         </main>

         <input type="text" name='memo' onChange={inputChangeHandle}/>
        <button onClick={addToListHandle}>Add List Item</button>
        

        {trash.length !==0 
          ? <div>
            <br /> <br /> <br />
            <h2>Trash Box</h2>

            {trash.map((str,n)=>{
            return <ul key={n}> {str} <button onClick={(e)=>handleDelArc2(n,e)}>x</button>
                {aList.map((el,i)=> {
                    if (el.arc===str) {
                        return (<Listitem obj={el} key={i} index={i} handleDelete={handleDelete} handleEdit={handleEdit} handleSubTask={handleSubTask} archive={archive} handleArc={handleArc} handleRadio={handleRadio}      />)
                    }
                    } )}

            </ul>
        })}
        </div>
        : null }
        
        

    </div>
  )
}
