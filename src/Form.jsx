import React from 'react';
import injectSheet from 'react-jss';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = {
  form: {
    width: '400px',
    marginBottom: '40px',
  },

  submit: {
    marginLeft: '20px',
  }
};

const Form = ({classes, onSubmit, onChange, searchTerm}) => (
  <form className={classes.form} onSubmit={onSubmit}>
    <TextField
      margin="normal"
      value={searchTerm}
      label="Search for a GIF"
      onChange={onChange} />
    <Button
      className={classes.submit}
      type="submit"
      variant="raised"
      color="primary"
      margin="normal">Search</Button>
  </form>
);

export default injectSheet(styles)(Form);

