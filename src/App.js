import './App.css';
import {useState} from 'react';

function App() {

    let [docTitle, setDocTitle] = useState(['코트 추천', '맛집 추천', '여행지 추천']);
    let [logo, setLogo] = useState('ReactBlog');
    let [like, setLike] = useState(0);

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
        <div className="list">
            <h4>{docTitle[0]} <span onClick={()=>setLike(like+1)}>👍</span>{like}</h4>
            <p>2022-09-20 발행</p>
        </div>
        <div className="list">
            <h4>{docTitle[1]} <span onClick={()=>setLike(like+1)}>👍</span>{like}</h4>
            <p>2022-09-21 발행</p>
        </div>
        <div className="list">
            <h4>{docTitle[2]} <span onClick={()=>setLike(like+1)}>👍</span>{like}</h4>
            <p>2022-09-21 발행</p>
        </div>

        <Modal/>


    </div>
  );
}

function Modal(){
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
