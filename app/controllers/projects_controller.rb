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
    puts "\n"*5
    puts params
    puts "\n"*5
    head :ok
    @project = Project.find(params[:project][:id])
    if @project.update_attributes(params[:project])
      render json: @project
    else
      render status: 422
    end
  end
end
