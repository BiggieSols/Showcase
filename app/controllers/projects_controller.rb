class ProjectsController < ApplicationController
  def index
    @projects = Project.includes(:customer).all
    render json: @projects
  end
end
