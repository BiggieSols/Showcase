# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'
# require 'pry'
require 'date'


rows = CSV.read("db/test_dataset_v2.csv")
# change column names to match
# status (live/disabled) becomes Live (boolean)
# project / subscription becomes Subscription (boolean)
# 

headers = rows[0]
headers[0] = "live"

headers.map! { |header| header.gsub(/\_$/, "").split(" ").join("_").downcase.to_sym }

zipped_rows = []
rows[1..-1].each do |row|
  curr_row                  = Hash[headers.zip(row)]
  customer_name             = curr_row[:customer_name]
  customer                  = Customer.find_by_name(customer_name)

  record_created            = curr_row[:record_created]
  end_date                  = curr_row[:end_date]
  record_created            = nil if record_created && record_created.downcase == "unknown"
  end_date                  = nil if end_date && end_date.downcase == "unknown"
  puts "start date is #{record_created}"
  puts "end date is #{end_date}"
  curr_row[:record_created] = DateTime.strptime(record_created, '%m/%d/%y') if record_created
  curr_row[:end_date]       = DateTime.strptime(end_date, '%m/%d/%y')  if end_date


  customer ||= Customer.create(name: customer_name)
  puts "customer is #{customer.name}"
  curr_row[:customer_id] = customer.id
  curr_row.delete(:customer_name)
  Project.create(curr_row)

  zipped_rows << curr_row
end

# puts zipped_rows