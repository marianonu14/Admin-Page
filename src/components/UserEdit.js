import { Edit, SimpleForm, TextInput } from 'react-admin'

const UserEdit = (props) => {
    return ( 
        <Edit title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Edit>
     );
}
 
export default UserEdit;