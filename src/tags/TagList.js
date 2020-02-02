import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { push } from 'react-router-redux';
import { withStyles } from '@material-ui/core';

import {
    Datagrid,
    List,
    TextField,
    CardActions,
    CreateButton,
    EditButton,
    TopToolbar,
    DeleteButton 
} from 'react-admin';
import { Route, Switch } from 'react-router';
import { Drawer } from '@material-ui/core';
import TagCreate from './TagCreate';
import TagEdit from './TagEdit';


//This gives us a drawer navigator with a navigation items
const styles = {
    drawerContent: {
        width: 300
    }
};

//This Function for craeting a create button.
const TagListActions = ({ basePath }) => (
    <TopToolbar>
        <CreateButton basePath={basePath} />
    </TopToolbar>
);

//This class for rendering the employee list. 
class TagList extends React.Component {
    render() {
        const { push, classes, ...props } = this.props;
        return (
            //Fragments are use for instead of the extraneous ‘div’ tag.
            <Fragment>
                <List
                    {...props}
                    sort={{ field: 'First_Name', order: 'ASC' },{ field: 'Last_Name', order: 'ASC' },{ field: 'Email_Address', order: 'ASC' },{ field: 'Gender', order: 'ASC' },{ field: 'Phone_Number', order: 'ASC' }}
                    actions={<TagListActions />}
                >
                    <Datagrid>
                        <TextField source="First_Name" />
                        <TextField source="Last_Name" />
                        <TextField source="Email_Address" />
                        <TextField source="Gender" />
                        <TextField type="number" source="Phone_Number" />
                        <EditButton />
                        <DeleteButton />
                    </Datagrid>
                </List>
                <Route path="/employee_list/create">
                    {({ match }) => (
                        console.log(match),
                        <Drawer
                            open={!!match}
                            anchor="right"
                            onClose={this.handleClose}
                        >
                            <TagCreate
                                className={classes.drawerContent}
                                onCancel={this.handleClose}
                                {...props}
                            />
                        </Drawer>
                    )}
                </Route>
                <Route path="/employee_list/:id">
                    {({ match }) => {
                        const isMatch =
                            match &&
                            match.params &&
                            match.params.id !== 'create';

                        return (
                            <Drawer
                                open={isMatch}
                                anchor="right"
                                onClose={this.handleClose}
                            >
                                {isMatch ? (
                                    <TagEdit
                                        className={classes.drawerContent}
                                        id={isMatch ? match.params.id : null}
                                        onCancel={this.handleClose}
                                        {...props}
                                    />
                                ) : (
                                    <div className={classes.drawerContent} />
                                )}
                            </Drawer>
                        );
                    }}
                </Route>
            </Fragment>
        );
    }

    //THis function for adding employee_list in url.
    handleClose = () => {
        this.props.push('/employee_list');
        console.log(this.props)
    };
}

export default compose(
    connect(
        undefined,
        { push }
    ),
    withStyles(styles)
)(TagList);
