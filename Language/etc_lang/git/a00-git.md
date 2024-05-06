# git

### version control

- This is a system that records changes to a file overtime so that you can recall specific versions later.

**types of version control**

\# LVS  : Local version control system

\# CVCS : Centralized version control system

- This make collaborate each users on other systems.
- But this concept vulnerable to error on central database.

\# DVCS : Distributed Version Control system

- In a DVCS clients don't just check out the latest snapshot of the files, they fully mirror the repo, including its full history.
- Every clone is really a full backup of all the data.

### snapshot

- In git, every time we commit, git basically takes a picture of what all your files look a like at that moment and stores a reference to that snapshot.
- If file doesn't changed, then doesn't store again just a link to the previous identical file arelady stored.
**git snapshot logic**
| version 1 | version 2 | version 3 | version 4 | version 5 |
| :-------: | :-------: | :-------: | :-------: | :-------: |
|  File A   |    A1     |    A1     |    A2     |    A2     |
|  File B   |     B     |     B     |    B1     |    B2     |
|  File C   |    C1     |    C2     |    C2     |    C3     |