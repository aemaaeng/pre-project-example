// Todo 작성 폼 & Todo 목록 렌더링
import { useState } from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const TodoContainer = styled.div`
  border: 1px solid blue;
  height: 700px;
`;

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todoContent, setTodoContent] = useState('');

  const inputHandler = (event) => {
    setTodoContent(event.target.value);
  };

  const submitHandler = (event) => {
    if (event.nativeEvent.isComposing) {
      return;
    }

    const todo = {
      id: todos.length,
      createdAt: new Date(),
      updatedAt: new Date(),
      content: todoContent,
      isChecked: false,
    };

    setTodos([todo, ...todos]);
    setTodoContent('');
  };

  return (
    <>
      <div>
        <input
          placeholder="할 일 입력"
          value={todoContent}
          onChange={inputHandler}
        />
        <button onClick={submitHandler}>등록</button>
      </div>
      <TodoContainer>
        <ul>
          {todos.map((el) => {
            return <Todo key={el.id} todo={el} />;
          })}
        </ul>
      </TodoContainer>
    </>
  );
};

export default Todos;
