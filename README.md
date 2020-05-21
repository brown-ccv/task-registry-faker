Repository with fake data for Neuro Task Registry

---

To generate new fake data:

- install dependencies: `npm install`
- run faker script: `npm run make`

GraphQL Query to fecth all files in `data`:

```graphql
query {
  repository(owner: "brown-ccv", name: "task-registry-faker") {
    object(expression: "master:data/") {
      ... on Tree {
        entries {
          oid
          object {
            ... on Blob {
              text
            }
          }
          name
        }
      }
    }
  }
}
```

Example Axios set up:

```js
const apiClient = axios.create({
  url: "https://api.github.com/graphql",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
    "User-Agent": process.env.VUE_APP_GITHUB_USER
  },
  timeout: 10000
});
```

Github Token Scopes:

```bash
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```