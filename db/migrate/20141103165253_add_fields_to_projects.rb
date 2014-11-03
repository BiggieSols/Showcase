class AddFieldsToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :live, :boolean
    add_column :projects, :region, :string
    add_column :projects, :link, :string
    add_column :projects, :screenshot, :string
    add_column :projects, :vertical, :string
    add_column :projects, :industry, :string
    add_column :projects, :use_case, :string
    add_column :projects, :viz_name, :string
    add_column :projects, :customer_id, :integer
    add_column :projects, :subscription, :boolean
    add_column :projects, :location, :string
    add_column :projects, :template_group, :string
    add_column :projects, :record_created, :datetime
    add_column :projects, :end_date, :datetime
    add_column :projects, :story_slide, :string
    add_column :projects, :other, :string
  end
end
