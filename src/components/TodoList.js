import React from "react";
import styled from "styled-components";
import TodoItem from './TodoHead'


const TodoListBlock = styled.div`
  flex:1;
  padding 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: pink;
`;




function TodoList(){
 
  return(
    <TodoListBlock>
       <TodoItem text="9시 기상하기" done={true}/>
       <TodoItem text="12시 점심먹기" done={true}/>
       <TodoItem text="15시 코딩하기" done={true}/>
       <TodoItem text="17시 운동하기" done={false}/>
    </TodoListBlock>
  ) 


}

export default TodoList;