import './App.css';
import { useQuery, gql } from '@apollo/client';

const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

function App() {
  return (
    <div className='container m-10 mx-auto rounded-xl border bg-gray-200 p-8 shadow'>
      <p className='mb-5 text-3xl font-bold text-gray-700'>Welcome!</p>
      <p className='text-lg text-gray-500'>React and Tailwind CSS in action</p>
    </div>
  );
}
export default App;
