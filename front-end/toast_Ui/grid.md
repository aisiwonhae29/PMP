# tui-grid

### usage

<details><summary> grid table config</summary>
  
```
grid = new Grid({
    el: document.getElementById('grid'),
    data: gridData,
    scrollx: false,
    scrollY: true,
    minBodyHeight: 400,
    bodyHeight: 400,
    rowHeaders:[
        { type: 'checkbox', width: 50, align: 'center }
    ],
    colums: [
        { header: 'Profile ID', name: 'charge_profile_id', align: 'center' },
        ...
    ],
    emptyMessage: 'No data available'
})
```
</details>