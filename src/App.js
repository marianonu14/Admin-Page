import { Admin, Resource} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'

const dataProvider = jsonServerProvider('http://localhost:5000');



function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit}/>
      <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit}/>
    </Admin>
)}

export default App;
