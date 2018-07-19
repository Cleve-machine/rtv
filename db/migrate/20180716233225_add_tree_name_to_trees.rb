class AddTreeNameToTrees < ActiveRecord::Migration[5.2]
  def change
    add_column :trees, :tree_name, :string
  end
end
