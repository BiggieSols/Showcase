class AddIndexToCustomers < ActiveRecord::Migration
  def change
    add_index :customers, :name
  end
end
