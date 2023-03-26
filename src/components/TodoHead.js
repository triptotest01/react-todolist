import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
    background:beige;
    padding-top:48px;
    padding-left:32px;
    padding-right:32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    h2 {
      margin:0
      font-size:36px;
      color: #343a40;
    }

    .cWeek {
      margin-top: 4px;
      color: #ff0000;
      font-size: 21px;
    }

    .tasks-left{
      color: #20c997;
      font-size: 18px;
      margin-top:40px;
      font-weight: bold;
    }
`;


function TodoHead(){


  return(
    <TodoHeadBlock>
      <h2> 2000년 2월 2일</h2>
      <div className="cWeek">일요일</div>
      <div className="tasks-left"> 앞으로 할일: 2개 남음</div>
    </TodoHeadBlock>
  )

}

export default TodoHead;