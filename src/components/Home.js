import React from "react";
import { handleInitialData } from "../actions/Shared";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Grid,Tabs,Tab,Paper,Typography,Box } from "@material-ui/core";
//maybe make into helpers

import QuestionCard from "./cards/Question";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const useStyles = theme =>(
  {
    paper: {
      marginBottom: theme.spacing(3),
    },
  }
);



const Home = props => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    console.log(props)
    const { answeredIds, unansweredIds,classes } = props;


    return (
      <div><Paper className={classes.paper}>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered indicatorColor="primary">
      <Tab label="Unanswered Questions"  />
          <Tab label="Answered Questions" />
        </Tabs>
    </Paper>
    <TabPanel value={value} index={0}>
    <Grid container spacing={3} >
        {answeredIds.map(id => <QuestionCard key={id} id={id} />)}
      </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} >
          
        <Grid container spacing={3} >
        {unansweredIds.map(id => <QuestionCard key={id} id={id} />)}
      </Grid>
        </TabPanel>
        
      
      </div>
    )
}

// Take the state of our store for questions
// TODO: Reword
function mapStateToProps({ questions, authedUser, users }) {
  // Get the list of answeredIds
  const answeredIds = Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  console.log(answeredIds, "<-test");
  const unansweredIds = Object.keys(questions)
    .filter(q => !answeredIds.includes(q))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredIds,
    unansweredIds
  };
}

export default connect(mapStateToProps)(withStyles(useStyles)(Home));
