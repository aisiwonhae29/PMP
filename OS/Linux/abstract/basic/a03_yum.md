# yum

### about

- A yum repository is a collection of software packages that can be installed and updated using the yum package manager.
- A yum repo typically contains RPM packages for various applications, libraries, and utilities, along with meatadata that describes the packages and their dependencies.
- If we make cmd 'yum install package_name' yum searches through the enabled repositories to find the requested package and its dependencies.

### type

1. Distribution repo

- This is official repositories provided by the Linux distribution maintainers such as CentOS Base, EPEL, and updates repositories.
- This repo contain packages that are tested and supported by the distribution vendors.

2. Third-Party Repo

- These repo are maintained by independent software vendors, open-source projects, or communities.
- They often provide packages that are not included in the officail distribution repo such as proprietary software, bleeding-edge ver, or spcialized app.

3. Local Repo
- These are repo hosted on a local network or server within an organization.
- They can be used to distribute custom or internally developed packages to systems within the organization.

### feature

- yum repo are typically defined in configuration files( /etc/yum.repo.d/) on the client systems.
- Each repo conf file contains info about the rpo url, package architecture (e.g., X86_64, i686) and other optional settings

### sequence

1. Read Repository Configurations
2. Parse Repo Metadata
3. Build Transaction Set
4. Resolve Dependencies
5. Download Packages
6. Install/Upgrade/Remove Packages
7. Update Repository Metadata

### command

- sudo yum localinstall: This makes yum package manager to install package from local files.
  