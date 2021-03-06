import React from 'react';
import validator from 'validator';

import {
    Create,
    TextInput,
    SimpleForm,
    required,
    SaveButton,
    Toolbar,
    translate,
    TextField
} from 'react-admin';
import Button from '@material-ui/core/Button';

//This function for cancel and save the create page information
const TagCreateToolbar = translate(({ onCancel, translate, ...props }) => (
    <Toolbar {...props}>
        <SaveButton />
        <Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
    </Toolbar>
));

//This function for valiadting the employees form in adding new employee.
const validateUserCreation = (values) => {
    const errors = {};

    if (!values.Email_Address) {
        console.log(values.Email_Address)
        errors.Email_Address = ['The email is required'];
    }

    else if (!validator.isEmail(values.Email_Address)) {
    errors.Email_Address = ['The email is inVaild'];
  }

    else if (!values.First_Name) {
        console.log(values.First_Name)
        errors.First_Name = ['The firstName is required'];   
    }
    else if (values.First_Name.length < 6){
        errors.First_Name = ['The firstName is required min 6 lchar'];
    }
    else if (values.First_Name.length > 10){
        errors.First_Name = ['The firstName is required max 10 char'];
    }
    else if (!values.Last_Name) {
        errors.Last_Name = ['The LastName is required'];
    }
    else if (values.Last_Name.length < 6){
        errors.Last_Name = ['The LastName is required min 6 char'];
    }
    else if (values.Last_Name.length > 10){
        errors.Last_Name = ['The LastName is required max 10 char'];
    }

    else if (!values.Phone_Number) {
        console.log(values.Email_Address)
        errors.Email_Address = ['The Phone number is required'];
    }

    else if (!validator.isMobilePhone(values.Phone_Number)){
        errors.Phone_Number = ['The Phone number is invaild'];
    }
    return errors
};

//This function for creating the form structure in the creating new employee
const TagCreate = ({ onCancel, ...props }) => (
    <Create title=" " {...props}>
        <SimpleForm toolbar={<TagCreateToolbar onCancel={onCancel} />} validate={validateUserCreation}>
            <TextInput source="First_Name" />
            <TextInput source="Last_Name" />
            <TextInput source="Email_Address" validate={required()}/>
            <TextInput source="Gender" validate={required()}/>
            <TextInput type="number" source="Phone_Number" validate={required()}/>
        </SimpleForm>
    </Create>
);

export default TagCreate;
