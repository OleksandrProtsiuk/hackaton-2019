class StaticController < ApplicationController
  def personal
    @data = Devise.all
    gon.data = [50, 50]
  end

  def about
  end
end
