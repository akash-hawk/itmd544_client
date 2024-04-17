import { useQuery, gql } from '@apollo/client';

const query = gql`
  query getTodos {
    getTodos {
      id
      userId
      title
      user {
        id
        name
        email
      }
    }
  }
`

function App() {

  const {data, loading} = useQuery(query);

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div className='App'>
      {JSON.stringify(data)}  
    </div>
  );
}

export default App;
