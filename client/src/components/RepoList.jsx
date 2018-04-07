import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <h3>There are {props.repos.length} repos.</h3>
    <table>
      <thead>
      <tr><td>id              </td>
          <td>name            </td>
          <td>owner           </td>
          <td>description     </td>
      </tr>
      </thead>
    <tbody>
    {props.repos.slice(0,25).map(repo => {
      return (<tr><td>{repo.id}</td>
                <td><a href={repo.repoURL}>{repo.name}</a></td>
                <td>{repo.owner}</td>
                <td>{repo.description}</td>
            </tr>
      )
    })}
    </tbody>
  </table>
  </div>
)

export default RepoList;
