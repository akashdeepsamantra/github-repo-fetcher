import React from 'react';
import Grid from '@material-ui/core/Grid';

import OrgCard from './OrgCard';
import EmptyPage from './EmptyPage';

const Org = (props) => {
  const { orgs } = props;
  if (orgs.length === 0) {
    return <EmptyPage />
  }
  return (
    <div className="margin">
      <Grid container spacing={24}>
        {
          orgs.map(org => {
            return (
              <Grid item xs={12} sm={6} key={org.id}>
                <OrgCard
                  login={org.login}
                  id={org.id}
                  desc={org.description}
                  avatar_url={org.avatar_url}
                />
              </Grid>
            );
          })
        }
      </Grid>
    </div>
  );
}

export default Org;