# CONTRIBUTING

Firstly, this library was created to go hand in hand with the [city of Ghent styleguide](https://stijlgids.stad.gent),
so if you'd like to contribute in any way to this project, it might be of use to read the documentation to that project.

## Pull Request Process

> :warning: When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

1. Document your changes inline in the code using [JSDoc 3](http://usejsdoc.org/). Update the README.md with details of changes to the interface.
2. Write tests if you add any new functionality. 
2. Increase the version numbers in the `package.json` to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](https://semver.org/).
3. You may merge the Pull Request in once you have the sign-off of at least one other developer, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Release a new version

### Prerequisites

* Have [git flow](https://github.com/nvie/gitflow) installed on your machine
* Have `node` and `npm` installed on your machine (most preferably the latest version)
* Write access for [@digipolis-gent/modal](https://www.npmjs.com/package/@digipolis-gent/modal)

### Git flow config

We use the default git flow config. If you haven't already, run the following command to initialize git flow in your repository.

```bash
git flow init -d
```

### Step-by-step 

#### Create a git tag

Before you start, make sure the changes you want to release are merged into the `develop` branch.

1. Start a release branch

    ```bash
    git flow release start [<newversion>]
    ```

2. Bump the version in package.json. You could either do this:
  - **Manually**: Open `package.json` and change the value for the `version` key. Do the same for `package-lock.json`.
  - **In the CLI** using the [npm-version](https://docs.npmjs.com/cli/version.html) command.

    ```bash
    npm --no-git-tag-version version [patch | minor | major]
    ```

3. Change the `[Unreleased]` title in changelog to the `<newversion>` alongside the date. You can copy/adapt from previous versions.

4. Commit your changes

    ```bash
    git commit -m "Bump to [<newversion>]"
    ```

5. Finish your release. A new git tag will be created and the release branch will be back-merged into `develop`.

    ```bash
    git flow release finish [<newversion>]
    ```
    *When prompted, provide the `<newversion>` as a message for the git tag.*

4. Push changes to the remote

    ```bash
    git push --follow-tags
    ```

#### Prepare a GitHub release

1. Open the [releases page](https://github.com/StadGent/npm_package_modal/releases) of the repository 
2. Click your newly created tag and choose "Edit tag" at the top-right corner. 
3. Use `<newversion>` as the name for your release
4. Copy the content the CHANGELOG that is relevant for the new version and use it as the description.
5. Create downloadable archives to include with the release:
  - Run `npm pack` in your CLI in the root of the repository. A `.tgz` archive will be created.
  - Convert the `.tgz` to a `.zip` archive.
  - Upload both archives to the release page and rename them to `modal.{zip|tgz}`.
6. Publish the release

#### Publish the npm package

1. Login to the npm registry in your CLI

    ```bash
    npm adduser
    ```

2. Publish the package
    
    ```bash
    npm publish
    ```

3. Do a happy dance :dancer:
