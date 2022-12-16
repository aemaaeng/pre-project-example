// Todo 하나
import styled from 'styled-components';

const ListContainer = styled.li`
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 5px 50px 5px 0px;
  border: 1px dotted black;
  padding: 5px;
`;

const TodoContent = styled.div`
  width: 400px;
  margin-left: 10px;
  text-align: left;
`;

const Todo = ({ todo }) => {
  return (
    <ListContainer>
      <input type="checkbox"></input>
      <TodoContent>{todo.content}</TodoContent>
      <button>삭제</button>
    </ListContainer>
  );
};

export default Todo;
