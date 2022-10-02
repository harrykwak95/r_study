import './App.css';
import {useState} from 'react';

function App() {

    let [docTitle, setDocTitle] = useState(['코트 추천', '맛집 추천', '여행지 추천']);
    let [logo, setLogo] = useState('ReactBlog');
    let [like, setLike] = useState([]);
    let [modal, setModal] = useState(false);

    [1,2,3].map(function(a){
        return 'test';
    })



  return (
    <div className="App">
        <div className="black-nav">
            <h4 style={{color:'white', fontSize : '30px'}}>{logo}</h4>
        </div>
        <button onClick={()=>{
            let copy = [...docTitle];
            copy = [ '나나 나나나', '가가 가가가', '다다 다다다'];
            copy = copy.sort();
            setDocTitle(copy)}}>글 수정</button>

        {
            docTitle.map(function(docTitle, i){
                like.push(0);
                return (
                <div className="list"  key={i} >
                    <h4 onClick={()=>{setModal(!modal)}}> {i+1} . {docTitle} </h4>
                    <span onClick={()=>{
                        let copy = [...like];
                        copy[i] = copy[i]+1;
                        setLike(copy);}
                    }>👍</span>{like[i]}
                    <p>2022-09-21 발행</p>
                </div>
                )
            })
        }

        {modal===true
            ? <Modal docTitle={docTitle} color={'skyblue'}/> : null
        }



    </div>
  );
}

function Modal(props){
    return (
        <div className="modal" style={{background : props.color}}>
            <h4>{props.docTitle}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
