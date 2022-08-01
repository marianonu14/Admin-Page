import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

const PostList = (props) => {
    return ( 
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <TextField source='body' />
                <DateField source='publishedAt' />
                <EditButton basepath='/posts'  />
                <DeleteButton basepath='/posts'  />
            </Datagrid>
        </List>
     );
}
 
export default PostList;