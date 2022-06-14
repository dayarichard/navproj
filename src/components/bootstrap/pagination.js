import Pagination from 'react-bootstrap/Pagination';



export default function PaginationBasic(props){
    let active = 2;
    let items = [];
    for (let i = 1; i <= props.number; i++) {
    items.push(
        <Pagination.Item key={i} active={i === active}>
        {i}
        </Pagination.Item>,
    );
    }

return(
    
  <div>
    <Pagination>{items}</Pagination>
    <br />
  </div>
)
};

