# db

### usage

\# create

```ruby
create_table :users, force: cascade do |t|
  t.string :name
  t.integer :age
  t.boolean :active, default: true
  t.datetime 
end
```

- `create_table`    : create a table
- t.xxx             : set column type
- :xxx              : set column name
- default: xxx      : set default value
- do |t|            : t means table being created.
- force: casecade   : drop table if exists