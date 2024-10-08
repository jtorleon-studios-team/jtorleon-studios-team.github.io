tk=""

queryGraphQL='query ($owner: String!, $repo: String!) { repository(owner: $owner, name: $repo) { discussionCategories(first: 10) { nodes { id name } } } }'
queryVariable='"owner": "jtorleon-studios-team", "repo": ".github"'

scriptNodeJS='
  let categoryToFind = "Announcements";
  let discussionCategories = response.data.repository.discussionCategories;
  let find = discussionCategories.nodes.filter(v => v.name === categoryToFind);
  if (find) {
    console.log("success", find); 
  } else {
    throw new Error("not found discussionCategories", categoryToFind); 
  }
'

apiResponse=$(curl -X POST -H "Content-Type: application/vnd.github+json" -H "Authorization: token $tk" \
  -d "{ \"query\": \"$queryGraphQL\", \"variables\": { $queryVariable } }" https://api.github.com/graphql)
# pass result to node for parse response
node -e "let response = JSON.parse('$apiResponse');$scriptNodeJS"
