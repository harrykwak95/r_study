import './App.css';
import {useState} from 'react';

function App() {

    const [docTitle, setDocTitle] = useState([]);
    const [logo, setLogo] = useState('ReactBlog');
    const [like, setLike] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayTitle, setDisplayTitle] = useState('');
    const [newTodo, setNewTodo] = useState('');

    function likeChange(i){
        let copy = [...like];
        copy[i] = copy[i] + 1;
        setLike(copy);
    }

    function addList(newTodo){
        let newDoc = [...docTitle];
        newDoc.push(newTodo);
        like.push(0);
        setDocTitle(newDoc);
        setNewTodo("")
    }

    function deleteDoc(i){
        let deleteDoc =[...docTitle];
        deleteDoc.splice(i, 1);
        setDocTitle(deleteDoc);
    }

  return (
    <div className="App">
        <div className="black-nav">
            <h4 style={{color:'white', fontSize : '30px'}}>{logo}</h4>
        </div>

        {
            docTitle.map(function(docTitle, i){
                return (
                <div className="list" key={i}>
                    <h4 onClick={()=>{
                        setDisplayModal(!displayModal);
                        setDisplayTitle(docTitle);
                    }
                    }> {i + 1} . {docTitle}
                        <span onClick={(e) => {
                            e.stopPropagation();
                            likeChange(i);
                        }
                        }>👍</span>{like[i]}
                    </h4>

                    <p>2022-09-21 발행</p>
                    <button onClick={()=>deleteDoc(i)}>삭제</button>

                </div>
                )
            })
        }

        <input
            value={newTodo}
            onKeyDown={(e)=>{if(e.key ==='Enter'){addList(newTodo);} } }
            onChange={(e)=>{setNewTodo(e.target.value);}}
        />
        <button onClick={(e)=>{addList(newTodo);}

        }>뀨잉</button>

        {displayModal
            ? <Modal displayTitle={displayTitle}
                     color={'skyblue'}
            /> : null
        }
    </div>
  );
}

function Modal(props){
    return (
        <div className="modal" style={{background : props.color}}>
            <h4>{props.displayTitle}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={props.onClick}>글 수정</button>
        </div>
    )
}

export default App;
