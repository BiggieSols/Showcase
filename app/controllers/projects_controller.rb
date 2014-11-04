class ProjectsController < ApplicationController
  def show
    @project = Project.find(params[:id])
    render json: @project
  end

  def index
    @projects = Project.includes(:customer).all
    render json: @projects
  end
end
