class StaticPagesController < ApplicationController
  def home
    render json: {success: true}
  end
end
