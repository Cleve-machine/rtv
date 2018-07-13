class HomeController < ApplicationController
  before_action :authenticate_user!
  def index
  end

  def tree
  end
end
