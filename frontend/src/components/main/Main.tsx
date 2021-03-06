import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import SignInSignUp from './SignInSignUp'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import UserInfo from 'components/users/Profile'
import ListProject from 'components/projects/ListProjects'
import Project from 'components/projects/Project'

const appBarHeight = 64

const styles = createStyles({
  main: {
    height: `calc(100vh - ${appBarHeight}px)`,
    paddingTop: 100
  },
  appBar: {
    height: appBarHeight
  }
})

interface Props extends WithStyles<typeof styles> {}

const Main: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h3">
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
                StartupHub
              </Link>
            </Typography>
            <Typography variant="h5">
              <Link
                style={{
                  marginLeft: 20,
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                to="/projects"
              >
                Projects
              </Link>
            </Typography>
            <Typography variant="h5">
              <Link
                style={{
                  marginLeft: 20,
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                to="/account"
              >
                Account
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.main}>
          <Switch>
            <Route exact path="/" component={SignInSignUp} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/account" component={UserInfo} />
            <Route exact path="/projects/:id" component={Project} />
            <Route exact path="/projects" component={ListProject} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  )
}

export default withStyles(styles)(Main)
