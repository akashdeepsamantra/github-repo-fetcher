import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import RepoContainer from './RepoContainer';
import EmptyPage from './EmptyPage';

class Repos extends Component {
  state = {
    filterKeyword: ''
  }

  changefilterKeywordHandler = (event) => {
    this.setState({ filterKeyword: event.target.value })
  }

  render() {
    const repos = this.props.data;
    console.log(repos.length);
    if (repos.length === 0) {
      return <EmptyPage />;
    } 
    let selectedRepos = repos;
    if (this.state.filterKeyword !== '') {
      selectedRepos = repos.filter(repo => {
        return repo.name.includes(this.state.filterKeyword) ? repo : null
      });
    }

    return (
      <div>
        <div className="filter">
          <input
            className="filterTextField"
            type="text"
            placeholder="Enter repository name to filter"
            value={this.state.username}
            onChange={this.changefilterKeywordHandler}
          />
        </div>
        <div className="margin">
          <Grid container spacing={24}>
            {
              selectedRepos.map(repo => {
                return (
                  <Grid item xs={12} sm={6} key={repo.id}>
                    <RepoContainer
                      name={repo.name}
                      desc={repo.description}
                      language={repo.language}
                      starCount={repo.stargazers_count}
                      forkCount={repo.forks_count}
                      html_url={repo.html_url}
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