# chmod

### chmod elements

- +x: Add execute permission.
- -x: Remove execute permission.
- +r: Add read permission.
- -r: Remove read permission.
- +w: Add write permission.
- -w: Remove write permission.

### chmod Command

- chmod +x something.sh

### chmod numeric mode

- description

_ [ Owner ] _ [ Group ] _ [ Others ] <br>

4: Read (r)<br>
2: Write (w)<br>
1: Execute (x)<br>

ex) chmod 751 filename

### chmod tip

- show file permission status: ls -le

---

# chown

### chwon elements

- change Owner of file: sudo chown newowner: filename
- change Group ownership: sudo chown :newgroup filename
- change both : sudo chown newowner:newgroup filename