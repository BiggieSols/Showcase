class ProjectsController < ApplicationController
  def show
    @project = Project.find(params[:id])
    render json: @project
  end

  def index
    @projects = Project.includes(:customer).all
    render json: @projects
  end

  def create
    @project = Project.new
    if @project.update_attributes[params[:project]]
      render json: @project
    else
      render status: 422
    end
  end

  def update
    @project = Project.find(params[:project][:id])
    params[:project].delete("created_at")
    params[:project].delete("updated_at")

    existing_attrs = @project.attributes

    existing_attrs.each do |k, v|
      puts "#{k}: #{params[:project][k]}"
      params[:project].delete(k) if v == params[:project][k]
    end

    puts "\n"*5
    puts "updating params below"
    puts params[:project]
    puts "\n"*5

    if @project.update_attributes(params[:project])
      render json: @project
    else
      render status: 422
    end
  end
end
