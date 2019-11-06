// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import 'isomorphic-fetch';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './searchMemberStyles.jsx';
import { InputAdornment } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const classes = styles();
  
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3); // For demo purposes.
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map(key => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      style={{ display: 'inline' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionLabel={option => option.name}
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
          style={{ width: 250 }}
          className={classes.adicionar}
          {...params}
          margin="dense"
            hiddenLabel
            variant="filled"
            placeholder="Adicionar"
          InputProps={{
            ...params.InputProps,
                startAdornment: <InputAdornment position="start"><PersonAdd /></InputAdornment>,
                className: classes.adicionarInput,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
