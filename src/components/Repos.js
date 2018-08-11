import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import RepoContainer from './RepoContainer';

class Repos extends Component {
  state = {
    filterKeyword: ''
  }

  changefilterKeywordHandler = (event) => {
    this.setState({ filterKeyword: event.target.value })
  }

  render() {
    const repos = this.props.data;
    return (
      <div>
        <div className="filter">
          <input
            className="filterTextField"
            type="text"
            placeholder="Enter repo to filter"
            value={this.state.username}
            onChange={this.changefilterKeywordHandler}
          />
        </div>
        <div className="repo-container">
          <Grid container spacing={24}>
            {
              repos.map(repo => {
                return (
                  <Grid item xs={12} sm={6} key={repo.id}>
                    <RepoContainer
                      name={repo.name}
                      desc={repo.description}
                      language={repo.language}
                      starCount={repo.stargazers_count}
                      forkCount={repo.forks_count}
                    />
                  </Grid>
                );
              })
            }
          </Grid>
        </div>
      </div>
    );
  }
}

export default Repos;