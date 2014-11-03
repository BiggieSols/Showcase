# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20141103182147) do

  create_table "customers", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "customers", ["name"], :name => "index_customers_on_name"

  create_table "projects", :force => true do |t|
    t.string   "name"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
    t.boolean  "live"
    t.string   "region"
    t.string   "link"
    t.string   "screenshot"
    t.string   "vertical"
    t.string   "industry"
    t.string   "use_case"
    t.string   "viz_name"
    t.integer  "customer_id"
    t.boolean  "subscription"
    t.string   "location"
    t.string   "template_group"
    t.datetime "record_created"
    t.datetime "end_date"
    t.string   "story_slide"
    t.string   "other"
  end

  add_index "projects", ["name"], :name => "index_projects_on_name"

end
