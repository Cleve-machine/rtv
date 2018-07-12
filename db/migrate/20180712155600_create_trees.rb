class CreateTrees < ActiveRecord::Migration[5.2]
  def change
    create_table :trees do |t|
      t.belongs_to :user
      t.string :data

      t.timestamps
    end
  end
end
