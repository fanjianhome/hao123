import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, Paper, Box,  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import data from "./data";

const useStyle = makeStyles(theme => ({
  gridContainer: {
    margin: theme.spacing(4),
    maxWidth: 800,
  },
  sectionHeader: {
    marginTop: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  }
}))


const App: React.FC = () => {
  const classes = useStyle();
  return (
    <div>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h5'>光合公寓 - hao123</Typography>
        </Toolbar>
      </AppBar>
      <Box display='flex' justifyContent='center'>
        <Grid container className={classes.gridContainer} spacing={2}>
          {data
            .map((section, i) => [
              (
                <Grid item xs={12} key={section.name} className={classes.sectionHeader}>
                  <Paper className={classes.paper} elevation={0}><Typography variant='subtitle2'>{section.name}</Typography></Paper>
                </Grid>
              ),
              ...section.items
                .map((item, i) => (
                  <Grid item key={item.name}>
                    <Button target='_blank' variant='outlined' href={item.url} key={item.name} >{item.name}</Button>
                  </Grid>
                ))
            ]
            )}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
