import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

const UserList = (props) => {
    return ( 
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' />
                <DateField source='email' />
                <EditButton basepath='/users'  />
                <DeleteButton basepath='/users'  />
            </Datagrid>
        </List>
     );
}
 
export default UserList;