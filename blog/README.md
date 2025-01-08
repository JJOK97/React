## 소개
React로 만든 간단 블로그 앱입니다. 게시글 목록, 좋아요, 글 발행, 삭제, 모달창 표시 등 기본 기능을 포함합니다.

<br>

## What I Learned
### 1. State와 Props
- **State**: 함수형 컴포넌트에서 `useState`를 활용해 값이 변경될 때 자동으로 재렌더링되는 구조를 이해했습니다.
- **Props**: 부모에서 자식 컴포넌트로 데이터를 전송할 때 사용. 모달창 컴포넌트에 글제목 배열과 현재 선택된 인덱스를 props로 내려주는 식으로 구현했습니다.

<br>

### 2. 배열/객체 조작
- 스프레드 연산자(...)로 복사본을 만든 다음 수정해야 React가 변경 사항을 인식한다는 점을 배웠습니다.  
  예) `let copy = [...글제목]`  
- `.map()`을 사용해 게시글을 반복 렌더링하며, index값(i)을 사용해서 해당 게시글의 따봉(좋아요) 수나 제목 등을 갱신했습니다.

<br>

### 3. 이벤트 핸들링
- `onClick`, `onChange` 등의 기본 이벤트에서 **화살표 함수**를 쓸 때 `e.stopPropagation()`으로 이벤트 버블링을 막는 방법을 알았습니다.
- 새 글을 발행할 때, 입력값을 state로 받고, 버튼 클릭 시 `글제목` 배열 앞에 새 글을 추가 (`copyTitle.splice(0, 0, 입력값)`) 하는 식으로 구현했습니다.

<br>

### 4. 모달창 (Modal Component)
- `modal` 상태값을 `true` 혹은 `false`로 관리해, 조건부 렌더링(`{modal === true ? <Modal /> : null}`)을 통해 모달을 띄우는 구조.
- **클릭한 제목**의 인덱스를 `title`에 저장해 모달 컴포넌트에서 알맞은 글제목을 표시하게 했습니다.

<br>

### 5. 클래스 컴포넌트 (Modal2)
- 함수형 컴포넌트와 달리, `this.setState()`로 state를 변경해야 하는 점이 다릅니다.
- React 최신 문법인 Hooks와 비교했을 때, state나 라이프사이클 관리가 좀 더 번거롭지만, 기존 프로젝트에는 여전히 남아 있는 경우가 많다는 점을 알았습니다.

<br>

## 데모 화면


<table width="100%">
  <!-- 1행: Change Post Title / Open Modal -->
  <tr>
    <td align="center" width="50%"><b>Change Post Title</b></td>
    <td align="center" width="50%"><b>Open Modal</b></td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img 
        src="https://github.com/user-attachments/assets/6e3bb75a-5c78-4253-8c90-df7bdf9cef1c"
        style="width:100%; height:auto;" 
        alt="update-title" 
      />
    </td>
    <td align="center" width="50%">
      <img 
        src="https://github.com/user-attachments/assets/dabfe822-783c-4fbb-b219-fed0d4ccb66f"
        style="width:100%; height:auto;" 
        alt="open-modal" 
      />
    </td>
  </tr>

  <!-- 2행: Create New Post / Delete Post -->
  <tr>
    <td align="center" width="50%"><b>Create New Post</b></td>
    <td align="center" width="50%"><b>Delete Post</b></td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img 
        src="https://github.com/user-attachments/assets/1ee6b72f-ef7e-47ad-a09a-ee750432fa71"
        style="width:100%; height:auto;" 
        alt="create-post" 
      />
    </td>
    <td align="center" width="50%">
      <img 
        src="https://github.com/user-attachments/assets/aa92c28a-d341-43f3-b3b3-f79dc922a86f"
        style="width:100%; height:auto;" 
        alt="delete-post" 
      />
    </td>
  </tr>
</table>

<br>

## 4. 주요 기능 
1. **“가나다순 정렬” / “❤️” 버튼**:  
   - 첫 번째 게시글 제목을 **‘여자 코트 추천’** 등으로 변경하거나,  
   - 기존 게시글 배열을 **정렬**하여 글 목록 순서를 즉시 바꿀 수 있습니다.

<br>

2. **게시글 클릭 시 모달창 표시**:  
   - 특정 게시글을 클릭하면 **Modal** 컴포넌트를 활성화하여,  
   - 선택된 게시글에 대한 **상세 정보**(제목, 내용 등)를 표시합니다.

<br>

3. **새로운 글 발행 & 좋아요(👍) 기능**:  
   - 하단의 **입력란**에서 새 글을 작성해, 기존 게시글 목록의 **앞쪽**에 추가할 수 있습니다.  
   - 좋아요 버튼(👍)을 누르면 해당 글의 **따봉(좋아요) 수**가 1 증가합니다.

<br>

4. **글 삭제**:  
   - 게시글 오른쪽의 **삭제 버튼**을 누르면, 해당 글이 **목록에서 사라짐**  
   - `splice()`로 해당 인덱스(i)의 글제목과 좋아요를 동시 관리 (제목·좋아요 배열 둘 다 수정)


<br>

## 5. 설치 & 실행
```bash
git clone https://github.com/JJOK97/react_codingapple.git
cd blog
npm install
npm start
```

- 브라우저 [http://localhost:3000](http://localhost:3000) 접속

<br>

## 6. 코드 설명
<details>
<summary>코드 보기</summary>

```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  // 글제목과 좋아요(따봉) 수를 배열 state로 관리
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  // 모달창 표시 여부 & 선택된 글 인덱스
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  // 새 글 발행 시 입력값
  let [입력값, 입력값변경] = useState('');

  // 글 목록 정렬 버튼
  function sortTitles() {
    let copy = [...글제목];
    copy.sort(); // 가나다순 정렬
    글제목변경(copy);
  }

  // 첫 번째 글 수정 버튼 (❤️)
  function changeFirstTitle() {
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    글제목변경(copy);
  }

  // 좋아요(👍) 증가 함수
  function addLike(i) {
    let copy = [...따봉];
    copy[i] = copy[i] + 1;
    따봉변경(copy);
  }

  // 새 글 발행
  function createPost() {
    // 글제목 배열 맨 앞에 입력값 추가
    let copyTitle = [...글제목];
    copyTitle.unshift(입력값);

    // 따봉 배열도 동일하게 맨 앞에 0 추가
    let copyLike = [...따봉];
    copyLike.unshift(0);

    글제목변경(copyTitle);
    따봉변경(copyLike);
  }

  // 글 삭제
  function deletePost(i) {
    let copyTitle = [...글제목];
    copyTitle.splice(i, 1);

    let copyLike = [...따봉];
    copyLike.splice(i, 1);

    글제목변경(copyTitle);
    따봉변경(copyLike);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {/* 버튼 기능들 */}
      <button onClick={sortTitles}>가나다순 정렬</button>
      <button onClick={changeFirstTitle}>❤️</button>

      {/* 게시글 목록 표시 */}
      {글제목.map((titleText, i) => (
        <div className="list" key={i}>
          <h4
            onClick={() => {
              // 모달 열기 + 클릭한 글의 인덱스 기억
              setModal(true);
              setTitle(i);
            }}
          >
            {titleText}
            <span
              onClick={(e) => {
                e.stopPropagation(); // 상위 클릭 이벤트 막기
                addLike(i);
              }}
            >
              {' '}👍
            </span> {따봉[i]}
            <button
              onClick={(e) => {
                e.stopPropagation(); // 상위 클릭 이벤트 막기
                deletePost(i);
              }}
            >
              글 삭제
            </button>
          </h4>
          <p>2월 17일 발행</p>
        </div>
      ))}

      {/* 새 글 발행 */}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button onClick={createPost}>글 생성</button>

      {/* 모달창 표시 */}
      {modal === true ? <Modal 글제목={글제목} title={title} /> : null}
    </div>
  );
}

// 모달창 컴포넌트
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  );
}

export default App;
```

</details>
