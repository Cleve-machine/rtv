class ApiController < ApplicationController
  protect_from_forgery
  
  def getTree
  	@tree = current_user.tree.first
  	if @tree 
  		render json: @tree.data
  	else
	  	render json: nil
	end  	
  end

  def saveTree
  	data = params[:data]
  	if data
		if current_user.tree.blank? == false 
			@tree = current_user.tree
			@tree.update(data: data)
			render json: "success"
		else
			@tree = current_user.tree.new(:data => data)
			@tree.save
			render json: "success"
		end		
	else
		render json: "parameter error"
  	end	
  end
end
