class ChangeUrlFromStringToText < ActiveRecord::Migration
  def change
    change_column :projects, :link,  :text
  end
end
