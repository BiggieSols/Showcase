class Project < ActiveRecord::Base
  attr_accessible :name, :live, :region, :link, :screenshot, :vertical, :industry, :use_case, :viz_name, :customer_id, :subscription, :location, :template_group, :record_created, :end_date, :story_slide, :other

  
end

    
